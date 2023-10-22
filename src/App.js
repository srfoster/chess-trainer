/*
TODO:

Pivot to using spectacle slideshow
- Fix visuals 
- Fix visuals on mobile
- Make autoplay work, with adjustable speed 
  - Bug: Need to make it not trigger two speech events, otherwise this will not work
  - Need to figure out how to trigger the step and do so after the speech synthesis and the chess moves have finished
  - Can just dispatch a right arrow event with a callback passed into the various trainers
  - https://chat.openai.com/c/71727236-66e8-4241-85bb-0d6390fdaf33
- Convert spanish cards to slideshow
- Make audio for chess cards



----

- How to make certain cards repeat (auto calculate this?)
- Start where we left off on the next day?  Localstorage?

* Skip button
* Pause button

* Control playtime (how to find chunks that fit my workout)
  - How to calculate 
  - Might want to be able to change this dynamically so that the playtime fits my workout...


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

import { useLocalStorage } from 'usehooks-ts'

import games from './data/chess-db.js' 
import spanishParas from './data/spanish-db.js' 

import { Appear, Deck, Slide, Stepper, Heading, DefaultTemplate, useSteps } from 'spectacle';

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

let chessCards = games.map((g) => new Card(g, (props) => <ChessTrainer {...props} />))
let spanishCards = spanishParas.map((p) => new Card(p, (props) => <SpanishTrainer {...props} />))


function App() {
  console.log("App render")

  let decks = [chessCards, spanishCards]

  let [cardIndex, setCardIndex] = useLocalStorage("cardIndex", 0) //React.useState(0)
  let [beat, setBeat] = React.useState(0)
  let [rate, setRate] = React.useState(2)

  let [pictureMode, setPictureMode] = React.useState(true)


  const handleChange = (event, newValue) => {
    setRate(newValue)
  };

  let deckIndex = cardIndex % 2 

  let next = () => {
    speechSynthesis.cancel()
    setCardIndex(ci => (ci + 1)% decks.reduce((acc, val) => acc + val.length, 0))
    setBeat(0)
  }

  let restart = () => {
    setCardIndex(0)
    setBeat(0)
  }

  let currentCard = decks[deckIndex][Math.floor(cardIndex/decks.length)%decks[deckIndex].length]

  if(!currentCard)
    throw "No current card.  Card index: "  + cardIndex + " Card floored: " + Math.floor(cardIndex/decks.length)  +  " Deck index: " + deckIndex + " Decks: " + decks.length

  let onComplete = React.useCallback((card) => {
    if(card != currentCard) return

    console.log("CARD COMPLETE", card, currentCard)
    if(!card.completed)
      next()
    card.completed = true
  }, [currentCard])

  React.useEffect(() => {
    setBeat(0)
    /*
    let interval = setInterval(() => {
      setBeat((b) => b + 1)
    }, rate * 1000)

    return () => clearInterval(interval)
    */
  }, [rate])


  //let Renderer = currentCard.renderer

  return (
    <Container maxWidth="sm">
      <Deck template={<DefaultTemplate />}>
        {chessCards.map((c) => {
          return <Slide>
            <Slider value={rate} onChange={handleChange}
              valueLabelDisplay='off'
              marks={[{ value: 1, label: '1s' }, { value: 2, label: '2s' }, { value: 3, label: '3s' }, { value: 4, label: '4s' }, { value: 5, label: '5s' }, { value: 6, label: '6s' }, { value: 7, label: '7s' }, { value: 8, label: '8s' }, { value: 9, label: '9s' }, { value: 10, label: '10s' }]}
              min={1}
              max={10}
            />

            Deck: {deckIndex} Card: {cardIndex} Beat: {beat}
            <Button onClick={next}>Next</Button>
            <Button onClick={restart}>Restart</Button>
            Picture Mode {pictureMode}: <Switch value={pictureMode} onChange={(event) => {
              setPictureMode(event.target.checked)
            }} />
            {c.renderer({ card: c, pictureMode: pictureMode, onComplete, beat })}
          </Slide>
        })}

      </Deck>


    </Container>
  );
}


//TODO: These should not be out here.  Use refs.
let spanishUtterance = new SpeechSynthesisUtterance()
function SpanishTrainer({ card, onComplete, beat }) {
  console.log("SpanishTrainer", card.content)

  let speak = () => {
    spanishUtterance.lang = 'es-MX'
    spanishUtterance.voice = window.speechSynthesis.getVoices().find((v)=>v.lang.startsWith("es"))
    spanishUtterance.rate = 1
    spanishUtterance.text = card.content
    window.speechSynthesis.speak(spanishUtterance)

    let called = false //Don't know why but Speech Synthesis seems to be calling this twice
    spanishUtterance.onend = () => {
      if(called) return
      called = true
      console.log("Spanish complete", card)
      onComplete(card)
    }
  }

  React.useEffect(() => {
    console.log("Spanish speech effect")
    speak()
    /*
    return () => {
      speechSynthesis.cancel() 
    }
    */
  }, [])

  return <>
    <div>
      {card.content}
    </div>
  </>
}


//TODO: These should not be out here.  Use refs.
let utterance = new SpeechSynthesisUtterance()

let speak = (say, voiceIndex) => {
  //Speak the current one
  utterance.lang = 'en-US'
  utterance.voice = window.speechSynthesis.getVoices()[voiceIndex || 0]
  utterance.rate = 2
  utterance.text = say
  window.speechSynthesis.speak(utterance)
}

function ChessTrainer({ card, pictureMode, onComplete, beat }) {
  return (
    <>


      <Stepper tagName="div" alwaysVisible values={[...Array(card.content.moves().length).keys()]}>
        {(move, step, isActive) => {
          let currentMove
          if (pictureMode)
            currentMove = card.content.pictureMoveWords()[move]
          else
            currentMove = card.content.moves()[move]

          return <>
            {card.name()}
            {currentMove}
            {card.content.chess.getComments().find((c) => c.fen == card.content.fens()[move])?.comment}
            {isActive && <Speak say={pictureMode ? currentMove.join(" ") : currentMove} voiceIndex={move % 2} />}
            <div style={{ width: 300, height: 300, border: "1px solid black" }}>
              {isActive && <Chessboard id={"LiveBoard" + card.name()}
                boardOrientation={
                  (!card.content.name().includes("player") || card.content.name().startsWith("player")) ? "white" : "black"
                }
                position={card.content.fens()[move]}></Chessboard>}
            </div>
          </>
        }}
    </Stepper >

       
       
      {/* <GameDisplay game={card.content} move={ move}></GameDisplay>

      <Chessboard id="BasicBoard" customSquare={(squareData, b, c) => {
        return <div style={{ width: 50, height: 50 }}>{util.icon(squareData.square) }</div>
      }} />

      <SquareSearch /> */}

    </>
  )
}


let Speak = ({ say, voiceIndex }) => {
  React.useEffect(() => {
    console.log("Speak", say, voiceIndex)
    speak(say, voiceIndex)
  }, [say])


  return <>
  </>
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
    return <div style={{ border: i == Math.floor(move/2) ? "1px solid black" : "none"}}>{i + 1}. {wrapper(pair[0])} {wrapper(pair[1])}</div>
  })}</p>
}

function SquareSearch() {
  let [selectedSquare, setSelectedSquare] = React.useState() 
  let [drawArrows, setDrawArrows] = React.useState() 

  return (<>
    <Chessboard id="StatsBoard" customSquare={(squareData, b, c) => {
      return <div onClick={() => { 
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
