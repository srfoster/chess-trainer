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
  return square.replace(/(\d)/, "-$1")
}

function randomSquare() {
  return COLS[Math.floor(Math.random() * COLS.length)] + ROWS[Math.floor(Math.random() * ROWS.length)]
}

function App() {
  return (
    <Container maxWidth="sm">
      <h1>
        Welcome to Stephen R. Foster's Chess Trainers apps
      </h1>
      <AuditoryTrainer />
    </Container>
  );
}


//TODO: These should not be out here.  Use refs.
let utterance = new SpeechSynthesisUtterance()
let timeout
function AuditoryTrainer() {
  let [rate, setRate] = React.useState(2)
  let [square, setSquare] = React.useState(randomSquare())

  const handleChange = (event, newValue) => {
    console.log(event)
    setRate(newValue)
  };

  React.useEffect(() => {
    //Speak the current one
    utterance.text = clarifySounds(square)
    utterance.lang = 'en-US'
    utterance.voice = window.speechSynthesis.getVoices()[0]
    utterance.rate = 2
    window.speechSynthesis.speak(utterance)
  }, [square]);

  React.useEffect(() => {
    //Set a timeout to chang the square
    if(timeout) clearInterval(timeout)
    timeout = setInterval(() => {
      setSquare(randomSquare())
    }, rate*1000);
    return () => clearInterval(timeout);
  }, [rate]);

  return (
    <>
      <p>Auditory Trainer, every {rate} seconds</p>
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
