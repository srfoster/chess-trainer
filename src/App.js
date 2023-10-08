/*
TODO:

* Picture mode has made everything a mess with audio trainer.
  - Need to do big refactoring.  
     - The generators need to get rethunk
     - Preprocess games with chess.js to get the verbose notation.  Dont do it on the fly. 
  - Can KINDA get a game to work -- one time through
  - Random squares are broken (interpreted as moves breaks things)
* Add a button to start/stop the audio trainer


*/

import './App.css';
import React from 'react';

import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
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

  /*
  let [square, setSquare] = React.useState()
  let [lastSquareChange, setLastSquareChange] = React.useState()
  let [pastSquares, setPastSquares] = React.useState([])
  let [pastSquaresVerbose, setPastSquaresVerbose] = React.useState([])
  let [pictureMode, setPictureMode] = React.useState(false)

  let generator = generators[generatorIndex].func

  const handleChange = (event, newValue) => {
    console.log(event)
    setRate(newValue)
  };

  React.useEffect(() => {
    //Speak the current one
    if (square === undefined) return
    utterance.lang = 'en-US'
    utterance.voice = window.speechSynthesis.getVoices()[pastSquares.length % 2 + 1]
    utterance.rate = pictureMode ? 1 : 2
    if (!pictureMode) {
      utterance.text = clarifySounds(square)
      window.speechSynthesis.speak(utterance)
    } 
    try {
      chess.move(square)
    } catch (e) {
      console.error(e)
      if (pictureMode) {
        utterance.text = mappings[square]
        window.speechSynthesis.speak(utterance)
      } 
    }
    let history = chess.history({ verbose: true });
    var verboseMove = history.pop()
    if (verboseMove) {
      let s = verboseMove.from + "-" +  verboseMove.to
      setPastSquaresVerbose([s, ...pastSquaresVerbose])
      if (pictureMode) {
        utterance.text = mappings[verboseMove.from] + " " + mappings[verboseMove.to]
        window.speechSynthesis.speak(utterance)
      } 
    }
    setPastSquares([square, ...pastSquares])
  }, [lastSquareChange]);

  React.useEffect(() => {
    //Set a timeout to chang the square
    if(timeout) clearInterval(timeout)
    timeout = setInterval(() => {
      if(generator === undefined) return
      setSquare(generator())
      setLastSquareChange(new Date())
    }, rate*1000);
    return () => clearInterval(timeout);
  }, [rate, generator]);
  */

  return (
    <>
      <p>Auditory Trainer, every {rate} seconds</p>
      <select onChange={(e) => setSelectedGame(e.target.value)}>
        {Object.keys(games).map(k => <option key={k} value={k}>{k}</option>)}
      </select>
      <GameDisplay game={ games[selectedGame]}></GameDisplay>

      {/*
       <p>Current Square: {pictureMode ? pictureNotation(square) : square}</p>
      <Slider value={rate} onChange={handleChange}
        valueLabelDisplay='off'
        marks={[{value: 1, label: '1s'}, {value: 2, label: '2s'}, {value: 3, label: '3s'}, {value: 4, label: '4s'}, {value: 5, label: '5s'}, {value: 6, label: '6s'}, {value: 7, label: '7s'}, {value: 8, label: '8s'}, {value: 9, label: '9s'}, {value: 10, label: '10s'}]}
        min={1}
        max={10}
      />
      Picture Mode {pictureMode}: <Switch value={pictureMode} onChange={(event) => {
        setPictureMode(event.target.checked)
      }} />
      {pastSquares.length > 0 && <p>Past Squares: {pastSquares.map((s,i) => { 
        return <span key={i}>{pictureMode ? pictureNotation(s) : " " + s + " "}</span>
      })}</p>} */}

    </>
  )
}

function GameDisplay({ game }) {
  return (
    <>
      <p>{game.moves()}</p>  
      <p>{game.longMoves()}</p>  
      <p>{game.pictureMoves()}</p>
    </>
  )
}

export default App;
