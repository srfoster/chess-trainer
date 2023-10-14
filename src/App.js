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

function App() {
  let [thingIndex, setThingIndex] = React.useState(0)

  let app
  if (thingIndex == 0) {
    app = <ChessTrainer games={ games } />
  } 
  if (thingIndex == 1) {
    app = <SpanishTrainer texts={ spanishParas } />
  } 

  return (
    <Container maxWidth="sm">
      <h1>
        Welcome to Stephen R. Foster's Chess apps
      </h1>

      {app}
      
      <Chessboard id="BasicBoard" customSquare={(squareData, b, c) => {
        return <div style={{ width: 50, height: 50 }}>{util.icon(squareData.square) }</div>
      }} />

      <SquareSearch />

    </Container>
  );
}


//TODO: These should not be out here.  Use refs.
let spanishUtterance = new SpeechSynthesisUtterance()
let spanishTimeout
function SpanishTrainer({ texts }) {
  let [rate, setRate] = React.useState(1)
  let [selectedText, setSelectedText] = React.useState(0)
  let [lastTextChange, setLastTextChange] = React.useState()

  let currentText = texts[Object.keys(texts)[selectedText]]

  let nextText = () => {
    let keys = Object.keys(texts)
    let index = keys.indexOf(selectedText)
    return keys[(index + 1) % keys.length]
  }

  React.useEffect(() => {
    //Speak the current one
    spanishUtterance.lang = 'es-MX'
    spanishUtterance.voice = window.speechSynthesis.getVoices().find((v)=>v.lang.startsWith("es"))
    spanishUtterance.rate = 1
    spanishUtterance.text = currentText
    window.speechSynthesis.speak(spanishUtterance)
    spanishUtterance.onend = () => {
      setLastTextChange(new Date())
      setSelectedText((s) => { return (s + 1) % Object.keys(texts).length})
    }
    console.log("speak", spanishUtterance) 
  }, [lastTextChange]);


  return (texts[Object.keys(texts)[selectedText]])
}


//TODO: These should not be out here.  Use refs.
let utterance = new SpeechSynthesisUtterance()
let timeout
function ChessTrainer({ games }) {
  let [rate, setRate] = React.useState(2)
  let [selectedGame, setSelectedGame] = React.useState(Object.keys(games)[0])
  let [move, setMove] = React.useState(0)
  let [lastSquareChange, setLastSquareChange] = React.useState()
  let [pictureMode, setPictureMode] = React.useState(false)

  let nextGame = () => {
    let keys = Object.keys(games)
    let index = keys.indexOf(selectedGame)
    return keys[(index + 1) % keys.length]
  }

  const handleChange = (event, newValue) => {
    setRate(newValue)
  };

  let currentMove
    
  if(pictureMode)
    currentMove = games[selectedGame].pictureMoveWords()[move]
  else
    currentMove = games[selectedGame].moves()[move]


  React.useEffect(() => {
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
  }, [lastSquareChange]);

  React.useEffect(() => {
    //Set a timeout to chang the move
    if(timeout) clearInterval(timeout)
    let firstTime = true;
    timeout = setInterval(() => {
      if (firstTime) {
        firstTime = false
        return
      }
      setLastSquareChange(new Date())
      setMove((s) => {
        if(s >= games[selectedGame].moves().length) {
          console.log(games[selectedGame].timesPlayed, games[selectedGame].moves().length ) 
          if (games[selectedGame].timesPlayed * games[selectedGame].moves().length < 10) {
            games[selectedGame].timesPlayed++
          } else {
            games[selectedGame].timesPlayed = 0 //Gross stateful stuff
            setSelectedGame(nextGame())
          }

          return -1
        } else {
          return s+1
        }
      })
    }, rate*1000);
    return () => clearInterval(timeout);
  }, [rate,selectedGame]);

  return (
    <>
      <p>Auditory Trainer, every {rate} seconds</p>
      <select value={selectedGame} onChange={(e) => {
        setSelectedGame(e.target.value)
        setMove(-1)
      }}>
        {Object.keys(games).map(k => <option key={k} value={k}>({ rate * (games[k].moves().length + 2) }s) {k}</option>)}
      </select>

      <p>Current Square: {pictureMode ? util.pictureNotation(move) : currentMove}</p>
      <Button onClick={ ()=>setMove(-1)}>Restart</Button>
      <Button onClick={() => { setMove(-1); setSelectedGame(nextGame()) }}>Next</Button>
      <Slider value={rate} onChange={handleChange}
        valueLabelDisplay='off'
        marks={[{value: 1, label: '1s'}, {value: 2, label: '2s'}, {value: 3, label: '3s'}, {value: 4, label: '4s'}, {value: 5, label: '5s'}, {value: 6, label: '6s'}, {value: 7, label: '7s'}, {value: 8, label: '8s'}, {value: 9, label: '9s'}, {value: 10, label: '10s'}]}
        min={1}
        max={10}
      />
      Picture Mode {pictureMode}: <Switch value={pictureMode} onChange={(event) => {
        setPictureMode(event.target.checked)
      }} />

      {games[selectedGame].chess.getComments().find((c) => c.fen == games[selectedGame].fens()[move])?.comment}

      <Chessboard id="LiveBoard"
        boardOrientation={
          (!selectedGame.includes("player") || selectedGame.startsWith("player")) ? "white" : "black"
         }
        position={ 
        games[selectedGame].fens()[move < 0 ? 0 : move]
      }></Chessboard>

       
      <GameDisplay game={games[selectedGame]} move={ move}></GameDisplay>

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
