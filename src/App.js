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
  square = square.replace(/(\d)/, ",$1")

  square = square.replace(/a/, "ALPHA ")
  square = square.replace(/b/, "brAVO ")
  square = square.replace(/c/, "CHArLIE ")
  square = square.replace(/d/, "DELTA ")
  square = square.replace(/e/, "ECHO ")
  square = square.replace(/f/, "FOXTrOT ")
  square = square.replace(/g/, "GOLF ")
  square = square.replace(/h/, "HOTEL ")

  square = square.replace(/\+/, " check ")
  square = square.replace(/x/, " takes ")
  square = square.replace(/K/, "king ")
  square = square.replace(/Q/, "queen ")
  square = square.replace(/R/, "rook ")
  square = square.replace(/B/, "bishop ")
  square = square.replace(/N/, "knight ")

  square = square.replace(/O-O-O/, "castle long")
  square = square.replace(/O-O/, "castle short")
  square = square.replace(/1-0/, "white wins")
  square = square.replace(/0-1/, "black wins")
  square = square.replace(/1\/2-1\/2/, "draw")

  return square
}

window.clarifySounds = clarifySounds

function randomSquare() {
  return COLS[Math.floor(Math.random() * COLS.length)] + ROWS[Math.floor(Math.random() * ROWS.length)]
}

function generate(sequence) {
  let count = -1
  return function ()
  {
    return sequence[(count++) % sequence.length]
  }
  //return ["a1", "h1"][count++ % 2]
}

let pgnToSquares = (pgn) => pgn.replace(/\d+\./g, "").split(/ +/)

//https://www.chess.com/games/view/15776247
//
let fischerVkurz = generate( pgnToSquares("1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Bg5 Be7 7. Nxf6+ Nxf6 8. Bd3 O-O 9. Qe2 c6 10. O-O-O Qc7 11. h4 b6 12. Ne5 Bb7 13. Rh3 Rad8 14. Rg3 Kh8 15. Bxf6 Bxf6 16. Qh5 h6 17. Rg6 fxg6 18. Qxg6 1-0"))

let capablancaVbenito = generate(pgnToSquares( 
"1. d4 d5 2. Nf3 Nf6 3. e3 c6 4. Bd3 Bg4 5. c4 e6 6. Nbd2 Nbd7 7. O-O Be7 8. Qc2 Bh5 9. b3 Bg6 10. Bb2 Bxd3 11. Qxd3 O-O 12. Rae1 Qc7 13. e4 dxe4 14. Nxe4 Nxe4 15. Rxe4 Bf6 16. Qe3 c5 17. Ne5 cxd4 18. Nxd7 Qxd7 19. Bxd4 Bxd4 20. Rxd4 Qc7 21. Rfd1 Rad8 22. b4 Rxd4 23. Qxd4 b6 24. g3 Rc8 25. Rc1 Rd8 26. Qe3 Kf8 27. c5 bxc5 28. Qe4 Rd5 29. bxc5 g6 30. c6 Kg7 31. a4 Rd6 32. Qe5+ Kf8 33. Qxd6+ 1-0 "))

let capablancaVbergsten = generate(pgnToSquares(
  "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. cxd5 cxd5 6. Qb3 Qc7 7. Nc3 e6 8. Bd2 Nc6 9. Rc1 Be7 10. Be2 O-O 11. O-O Rfc8 12. Nh4 Ng4 13. Nf3 Be4 14. g3 Bf5 15.  Na4 h6 16. h3 Nf6 17. Kh2 Ne4 18. Be1 Bd6 19. Nd2 Qe7 20. Nxe4 dxe4 21. Kg2 e5 22. d5 Nb4 23. Bxb4 Bxb4 24. Rfd1 Rxc1 25. Rxc1 Bd6 26. Nc3 Qd7 27. g4 Bg6 28.  Nb5 Bb8 29. Qc3 Bd6 30. Nxd6 Qxd6 31. Qc5 Qd8 32. d6 f6 33. Bc4+ Kh7 34. Qc7 Rc8 35. Be6 Rb8 36. Qxd8 Rxd8 37. d7 Be8 38. Bf5+ g6 39. dxe8=Q Rxe8 40. Rc7+ 1-0"))

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
          { name: "capablanca vs benito", func: capablancaVbenito },
          { name: "capablanca vs bergsten", func: capablancaVbergsten}
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
  let [pastSquares, setPastSquares] = React.useState([])

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

  return (
    <>
      <p>Auditory Trainer, every {rate} seconds</p>
      <select onChange={(e) => setGeneratorIndex(generators.findIndex(g => g.name === e.target.value))}>
        {generators.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
      </select>
      <p>Current Square: {square} ({square && clarifySounds(square)})</p>
      <Slider value={rate} onChange={handleChange}
        valueLabelDisplay='off'
        marks={[{value: 1, label: '1s'}, {value: 2, label: '2s'}, {value: 3, label: '3s'}, {value: 4, label: '4s'}, {value: 5, label: '5s'}, {value: 6, label: '6s'}, {value: 7, label: '7s'}, {value: 8, label: '8s'}, {value: 9, label: '9s'}, {value: 10, label: '10s'}]}
        min={1}
        max={10}
      />
      {pastSquares.length > 0 && <p>Past Squares: {pastSquares.join(", ")}</p>}
    </>
  )
}

export default App;
