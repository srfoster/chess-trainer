import logo from './logo.svg';
import './App.css';
import React from 'react';

import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';


const COLS  = [
  "a", "b", "c", "d", "e", "f", "g", "h"
]

const ROWS  = [
  "1", "2", "3", "4", "5", "6", "7", "8"
]

function clarifySounds(square) {
  return square.replace(/(\d)/, ",$1")
}

function randomSquare() {
  return COLS[Math.floor(Math.random() * COLS.length)] + ROWS[Math.floor(Math.random() * ROWS.length)]
}

let count = -1
function tester(sequence) {
  return function ()
  {
    return sequence[(count++) % sequence.length]
  }
  //return ["a1", "h1"][count++ % 2]
}

//https://www.chess.com/games/view/15776247
//1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Bg5 Be7 7. Nxf6+ Nxf6 8. Bd3 O-O 9. Qe2 c6 10. O-O-O Qc7 11. h4 b6 12. Ne5 Bb7 13. Rh3 Rad8 14. Rg3 Kh8 15. Bxf6 Bxf6 16. Qh5 h6 17. Rg6 fxg6 18. Qxg6 1-0
let fischerVkurz =  tester(['e4', 'e6', 'd4', 'd5', 'c3', 'e4', 'e4', 'd7', 'f3', 'f6', 'g5', 'e7', 'f6', 'f6', 'd3', 'e2', 'c6', 'c7', 'h4', 'b6', 'e5', 'b7', 'h3', 'd8', 'g3', 'h8', 'f6', 'f6', 'h5', 'h6', 'g6', 'g6', 'g6'])

function App() {
  return (
    <Container maxWidth="sm">
      <h1>
        Welcome to Stephen R. Foster's Chess Trainers apps
      </h1>
      <AuditoryTrainer generators={
        [
          { name: "random", func: randomSquare },
          { name: "fischer vs kurz", func: fischerVkurz },
        ]} />
    </Container>
  );
}


//TODO: These should not be out here.  Use refs.
let utterance = new SpeechSynthesisUtterance()
let timeout
function AuditoryTrainer({ generators}) {
  let [generatorIndex, setGeneratorIndex] = React.useState(0)
  let [rate, setRate] = React.useState(2)
  let [square, setSquare] = React.useState()
  let [lastSquareChange, setLastSquareChange] = React.useState()

  let generator = generators[generatorIndex].func

  const handleChange = (event, newValue) => {
    console.log(event)
    setRate(newValue)
  };

  React.useEffect(() => {
    //Speak the current one
    if(square === undefined) return
    utterance.text = clarifySounds(square)
    utterance.lang = 'en-US'
    utterance.voice = window.speechSynthesis.getVoices()[0]
    utterance.rate = 2
    window.speechSynthesis.speak(utterance)
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

  return (
    <>
      <p>Auditory Trainer, every {rate} seconds</p>
      <select onChange={(e) => setGeneratorIndex(generators.findIndex(g => g.name === e.target.value))}>
        {generators.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
      </select>
      <p>Current Square: {square}</p>
      <Slider value={rate} onChange={handleChange}
        valueLabelDisplay='off'
        marks={[{value: 1, label: '1s'}, {value: 2, label: '2s'}, {value: 3, label: '3s'}, {value: 4, label: '4s'}, {value: 5, label: '5s'}, {value: 6, label: '6s'}, {value: 7, label: '7s'}, {value: 8, label: '8s'}, {value: 9, label: '9s'}, {value: 10, label: '10s'}]}
        min={1}
        max={10}
      />
    </>
  )
}

export default App;
