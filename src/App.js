/*
TODO:

* Multiplex between different types of trainers, not just chess.
  - Started a Spanish trainer, but it sucks (no good spanish tts atm) -- Kinda works in chrome.  Doesn't always play on page load

* "Playlists" by playtime (e.g. totals to 30 minutes, etc)
  - Might want to be able to change this dynamically so that the playtime fits my workout...

* Note, playtimes won't be correct for problems that repeat (fewer than 10 moves)

* Need to figure out what the repetition rules are, and whether the should be configurable

* Add a button to start/stop the audio trainer

*/

import './App.css';
import React from 'react';

import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { Chessboard } from "react-chessboard";
import Switch from '@mui/material/Switch';

import * as util from './util.js'

import { Tab, Tabs } from '@mui/material';

import games from './data/chess-db.js' 
import spanishParas from './data/spanish-db.js' 

class Card{
  constructor(content, renderer) {
    if(!content) throw "Content of card is required"
    this.content = content
    this.renderer = renderer 
  }

  name() {
    return this.content.name ? this.content.name() : this.content.substring(0, 10)
  }
}
let chessCards   = games.map((g)=>new Card(g, ChessTrainer))
let spanishCards = spanishParas.map((p)=>new Card(p, SpanishTrainer))

function App() {
  let decks = [chessCards, spanishCards]
  let [deckIndex, setDeckIndex] = React.useState(0)
  let [cardIndexes, setCardIndexes] = React.useState([0,0])
  let [beat, setBeat] = React.useState(0)
  let [rate, setRate] = React.useState(2)
  const handleChange = (event, newValue) => {
    setRate(newValue)
  };

  let cardIndex = cardIndexes[deckIndex]

  console.log(spanishCards)

  let next = () => {
    let newDi = (deckIndex + 1) % decks.length
    setDeckIndex(newDi)
    setCardIndexes((ci) => {
      let is = [...ci]
      is[deckIndex] = (is[deckIndex] + 1) % decks[deckIndex].length

      return is  
    })
  }

  let restart = () => {
    setCardIndexes([0,0])
    setDeckIndex(0)
    setBeat(0)
  }

  let onComplete = () => {
    next()
  }

  React.useEffect(() => {
    setBeat(0)
    let interval = setInterval(() => {
      setBeat((b) => b + 1)
    }, rate * 1000)

    return () => clearInterval(interval)
  }, [cardIndex, rate])

  let currentCard = decks[deckIndex][cardIndex]

  let Renderer = currentCard.renderer

  return (
    <Container maxWidth="sm">
      <h1>
        Welcome to Stephen R. Foster's flashcard app
      </h1>

      <Slider value={rate} onChange={handleChange}
        valueLabelDisplay='off'
        marks={[{value: 1, label: '1s'}, {value: 2, label: '2s'}, {value: 3, label: '3s'}, {value: 4, label: '4s'}, {value: 5, label: '5s'}, {value: 6, label: '6s'}, {value: 7, label: '7s'}, {value: 8, label: '8s'}, {value: 9, label: '9s'}, {value: 10, label: '10s'}]}
        min={1}
        max={10}
      />

      Deck: { deckIndex } Card: { cardIndex } Beat: { beat }
      <Button onClick={next}>Next</Button>
      <Button onClick={restart}>Restart</Button>
      <Renderer card={currentCard} onComplete={onComplete} beat={ beat}></Renderer>
      
    </Container>
  );
}


//TODO: These should not be out here.  Use refs.
let spanishUtterance = new SpeechSynthesisUtterance()
function SpanishTrainer({ card, onComplete }) {

  let speak = () => {
    spanishUtterance.lang = 'es-MX'
    spanishUtterance.voice = window.speechSynthesis.getVoices().find((v)=>v.lang.startsWith("es"))
    spanishUtterance.rate = 1
    spanishUtterance.text = card.content
    window.speechSynthesis.speak(spanishUtterance)
    spanishUtterance.onend = () => {
      onComplete()
    }
    console.log("speak", spanishUtterance) 
  }

  React.useEffect(() => {
    console.log("speaking", card.content)
    speak()
  }, [card.content])

  return (card.content)
}


//TODO: These should not be out here.  Use refs.
let utterance = new SpeechSynthesisUtterance()
function ChessTrainer({ card, onComplete, beat }) {
  let [pictureMode, setPictureMode] = React.useState(false)

  let move = beat

  let currentMove
    
  if(pictureMode)
    currentMove = card.content.pictureMoveWords()[move]
  else
    currentMove = card.content.moves()[move]

  let speak = () => {
    //Speak the current one
    if (move === undefined || currentMove === undefined) return
    utterance.lang = 'en-US'
    utterance.voice = window.speechSynthesis.getVoices()[move % 2 + 1]
    utterance.rate = pictureMode ? 1 : 2
    if (!pictureMode) {
      utterance.text = util.clarifySounds(currentMove)
    } else {
      utterance.text = currentMove
    }
    window.speechSynthesis.speak(utterance)
  }

  React.useEffect(() => {
    speak()
  }, [beat])

  if (move >= card.content.moves().length) {
    onComplete()  
    return "Done"
  }

  return (
    <>
      <p>Current Square: {pictureMode ? util.pictureNotation(move) : currentMove}</p>
      Picture Mode {pictureMode}: <Switch value={pictureMode} onChange={(event) => {
        setPictureMode(event.target.checked)
      }} />

      {card.content.chess.getComments().find((c) => c.fen == card.content.fens()[move])?.comment}

      <Chessboard id="LiveBoard"
        boardOrientation={
          (!card.content.name().includes("player") || card.content.name().startsWith("player")) ? "white" : "black"
         }
        position={ 
        card.content.fens()[move < 0 ? 0 : move]
      }></Chessboard>

       
      <GameDisplay game={card.content} move={ move}></GameDisplay>

      <Chessboard id="BasicBoard" customSquare={(squareData, b, c) => {
        return <div style={{ width: 50, height: 50 }}>{util.icon(squareData.square) }</div>
      }} />

      <SquareSearch />

    </>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}


function GameDisplay({ game, move }) {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label="Moves" />
        <Tab label="Long Moves" />
        <Tab label="Picture Moves" />
        <Tab label="Picture Move Words" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <MovesDisplay moves={game.moves()} move={move} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <MovesDisplay moves={game.longMoves()} move={move} />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <MovesDisplay moves={game.pictureMoves()} move={move}
          wrapper={(m) => <Chip label={m} />}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <MovesDisplay moves={game.pictureMoveWords()} move={move}
          wrapper={(m) => <Chip label={m ? m.join(" ") : m} />}
        />
      </TabPanel>
    </>
  );
}

function MovesDisplay({ move, moves, wrapper }) {
  if (!wrapper) wrapper = (m) => <span>{m}</span>
  return <p>{util.groupInPairs(moves).map((pair, i) => {
    console.log("Move", move, i)
    return <div style={{ border: i == Math.floor(move/2) ? "1px solid black" : "none"}}>{i + 1}. {wrapper(pair[0])} {wrapper(pair[1])}</div>
  })}</p>
}

function SquareSearch() {
  let [selectedSquare, setSelectedSquare] = React.useState() 
  let [drawArrows, setDrawArrows] = React.useState() 

  return (<>
    <Chessboard id="StatsBoard" customSquare={(squareData, b, c) => {
      return <div onClick={() => { 
        console.log(squareData.square)
        setSelectedSquare(squareData.square)
    } }  style={{ width: 50, height: 50 }}>{(util.counts[squareData.square]||[]).length}</div> }} />
    {selectedSquare && util.counts[selectedSquare] && util.counts[selectedSquare].map((s,i) => {
      return <div style={{width: 300, height: 300, display: "inline-block"}}>
        <Chessboard id={"Result" + s.fen + i}
          position={s.fen}
          customArrows={[[s.from, s.to, "red"]]}
          boardWidth={300}
        />
      </div>
    })}
  </>)
}

export default App;
