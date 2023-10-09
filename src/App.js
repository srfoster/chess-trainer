/*
TODO:

* Picture mode has made everything a mess with audio trainer.
  - Need to do big refactoring.  
     - The generators need to get rethunk
     - Preprocess games with chess.js to get the verbose notation.  Dont do it on the fly. 
  - Can KINDA get a game to work -- one time through
  - Random squares are broken (interpreted as moves breaks things)
* Add a button to start/stop the audio trainer

* Tabs to toggle between notations 

* Display the game in real time

* Mind palace features: Show numbers on the square for each move in the "db"

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
import games from './games.js' 

function App() {
  return (
    <Container maxWidth="sm">
      <h1>
        Welcome to Stephen R. Foster's Chess apps
      </h1>
      <AuditoryTrainer games={ games } />
      
      <Chessboard id="BasicBoard" customSquare={(squareData, b, c) => {  return <div style={{ width: 50, height: 50 }}>{ util.icon(squareData.square)}</div>}} />
    </Container>
  );
}


//TODO: These should not be out here.  Use refs.
let utterance = new SpeechSynthesisUtterance()
let timeout
function AuditoryTrainer({ games }) {
  let [rate, setRate] = React.useState(2)
  let [selectedGame, setSelectedGame] = React.useState(Object.keys(games)[0])
  let [square, setSquare] = React.useState(0)
  let [lastSquareChange, setLastSquareChange] = React.useState()
  let [pictureMode, setPictureMode] = React.useState(false)

  const handleChange = (event, newValue) => {
    setRate(newValue)
  };

  let currentMove
    
  if(pictureMode)
    currentMove = games[selectedGame].pictureMoveWords()[square]
  else
    currentMove = games[selectedGame].moves()[square]


  React.useEffect(() => {
    //Speak the current one
    if (square === undefined) return
    utterance.lang = 'en-US'
    utterance.voice = window.speechSynthesis.getVoices()[square % 2 + 1]
    utterance.rate = pictureMode ? 1 : 2
    if (!pictureMode) {
      utterance.text = util.clarifySounds(currentMove)
    } else {
      utterance.text = currentMove
    }
    window.speechSynthesis.speak(utterance)
  }, [lastSquareChange]);

  React.useEffect(() => {
    //Set a timeout to chang the square
    if(timeout) clearInterval(timeout)
    timeout = setInterval(() => {
      setSquare((s)=>(s+1)%games[selectedGame].moves().length)
      setLastSquareChange(new Date())
    }, rate*1000);
    return () => clearInterval(timeout);
  }, [rate]);

  return (
    <>
      <p>Auditory Trainer, every {rate} seconds</p>
      <select onChange={(e) => setSelectedGame(e.target.value)}>
        {Object.keys(games).map(k => <option key={k} value={k}>{k}</option>)}
      </select>

      <p>Current Square: {pictureMode ? util.pictureNotation(square) : currentMove}</p>
      <Button onClick={ ()=>setSquare(0)}>Restart</Button>
      <Slider value={rate} onChange={handleChange}
        valueLabelDisplay='off'
        marks={[{value: 1, label: '1s'}, {value: 2, label: '2s'}, {value: 3, label: '3s'}, {value: 4, label: '4s'}, {value: 5, label: '5s'}, {value: 6, label: '6s'}, {value: 7, label: '7s'}, {value: 8, label: '8s'}, {value: 9, label: '9s'}, {value: 10, label: '10s'}]}
        min={1}
        max={10}
      />
      Picture Mode {pictureMode}: <Switch value={pictureMode} onChange={(event) => {
        setPictureMode(event.target.checked)
      }} />


      <Chessboard id="LiveBoard" position={ 
        games[selectedGame].fens()[square]
      }></Chessboard>

       
      <GameDisplay game={ games[selectedGame]}></GameDisplay>

    </>
  )
}

function GameDisplay({ game }) {
  return (
    <>
      <MovesDisplay moves={game.moves()} />
      <MovesDisplay moves={game.longMoves()} />
      <MovesDisplay moves={game.pictureMoves()}
        wrapper={(m) => <Chip label={m} />}
      />
      <MovesDisplay moves={game.pictureMoveWords()}
        wrapper={(m) => <Chip label={m ? m.join(" ") : m} />}
      />
    </>
  )
}

function MovesDisplay({ moves, wrapper }) {
  if (!wrapper) wrapper = (m) => <span>{m}</span>
  return <p>{util.groupInPairs(moves).map((pair, i) => <div>{i + 1}. {wrapper(pair[0])} {wrapper(pair[1])}</div>)}</p>
}

export default App;
