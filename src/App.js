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


import logo from './logo.svg';
import './App.css';
import React from 'react';

import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import { Chessboard } from "react-chessboard";
import Switch from '@mui/material/Switch';
import { Chess } from 'chess.js'

const COLS  = [
  "a", "b", "c", "d", "e", "f", "g", "h"
]

const ROWS  = [
  "1", "2", "3", "4", "5", "6", "7", "8"
]

  let mappings = {
    a1: "toast",
    b1: "sand",
    c1: "mud",
    d1: "rat",
    e1: "belt",
    f1: "sheet",
    g1: "cat",
    h1: "foot",

    a2: "tank",
    b2: "nun",
    c2: "moon",
    d2: "rune",
    e2: "plane",
    f2: "jeans",
    g2: "candy",
    h2: "fin",

    a3: "tomb",
    b3: "nymph",
    c3: "mime",
    d3: "worm",
    e3: "plum",
    f3: "gem",
    g3: "kimono",
    h3: "foam",

    a4: "torch",
    b4: "snare",
    c4: "mir",
    d4: "roar",
    e4: "lore",
    f4: "cherry",
    g4: "cream",
    h4: "frog",

    a5: "stool",
    b5: "snail",
    c5: "mole",
    d5: "pearl",
    e5: "lolli",
    f5: "chalk",
    g5: "coal",
    h5: "waffle",
    
    a6: "dish",
    b6: "hinge",
    c6: "match",
    d6: "brush",
    e6: "bleach",
    f6: "judge",
    g6: "quiche",
    h6: "fudge",

    a7: "dig",
    b7: "snake",
    c7: "mask",
    d7: "ring",
    e7: "hulk",
    f7: "chick",
    g7: "cock",
    h7: "fog",

    a8: "dove",
    b8: "knife",
    c8: "muffin",
    d8: "raft",
    e8: "wolf",
    f8: "java",
    g8: "gift",
    h8: "fife",
  }


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

let dubovVNakamura = generate(pgnToSquares("1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2 b5 8. a4 Bb7 9. axb5 a6 10. Nc3 axb5 11. Rxa8 Bxa8 12. Nxb5 Bd5 13. Bf4 c5 14. dxc5 Qa5 15. Nc3 Qxc5 16. e4 Bc6 17. Be3 Qa5 18. Nd4 Rc8 19. h3 Be8 20. f4 Na6 21. e5 Nb4 22. Qd2 Nd7 23. Kh2 Qa6 24. Qe2 Nd3 25. f5 N7xe5 26. fxe6 fxe6 27. Nxe6 Bc6 28. Nd4 Bxg2 29. Qxg2 Rb8 30. Nf5 Bf6 31. Qd5+ Kh8 32. Ne4 Rxb2+ 33. Kh1 Rb5 34. Bc5 Qb7 35. Nxf6 Qxd5+ 36. Nxd5 Rxc5 37. Nd4 h6 38. Ne7 Rc7 39. Rf8+ Kh7 40. Re8 Ng6 0-1"))

//https://www.chess.com/games/view/15776247
//

let fischerVkurz = generate( pgnToSquares("1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Bg5 Be7 7. Nxf6+ Nxf6 8. Bd3 O-O 9. Qe2 c6 10. O-O-O Qc7 11. h4 b6 12. Ne5 Bb7 13. Rh3 Rad8 14. Rg3 Kh8 15. Bxf6 Bxf6 16. Qh5 h6 17. Rg6 fxg6 18. Qxg6 1-0"))

let capablancaVbenito = generate(pgnToSquares( 
"1. d4 d5 2. Nf3 Nf6 3. e3 c6 4. Bd3 Bg4 5. c4 e6 6. Nbd2 Nbd7 7. O-O Be7 8. Qc2 Bh5 9. b3 Bg6 10. Bb2 Bxd3 11. Qxd3 O-O 12. Rae1 Qc7 13. e4 dxe4 14. Nxe4 Nxe4 15. Rxe4 Bf6 16. Qe3 c5 17. Ne5 cxd4 18. Nxd7 Qxd7 19. Bxd4 Bxd4 20. Rxd4 Qc7 21. Rfd1 Rad8 22. b4 Rxd4 23. Qxd4 b6 24. g3 Rc8 25. Rc1 Rd8 26. Qe3 Kf8 27. c5 bxc5 28. Qe4 Rd5 29. bxc5 g6 30. c6 Kg7 31. a4 Rd6 32. Qe5+ Kf8 33. Qxd6+ 1-0 "))

let capablancaVbergsten = generate(pgnToSquares(
  "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. cxd5 cxd5 6. Qb3 Qc7 7. Nc3 e6 8. Bd2 Nc6 9. Rc1 Be7 10. Be2 O-O 11. O-O Rfc8 12. Nh4 Ng4 13. Nf3 Be4 14. g3 Bf5 15.  Na4 h6 16. h3 Nf6 17. Kh2 Ne4 18. Be1 Bd6 19. Nd2 Qe7 20. Nxe4 dxe4 21. Kg2 e5 22. d5 Nb4 23. Bxb4 Bxb4 24. Rfd1 Rxc1 25. Rxc1 Bd6 26. Nc3 Qd7 27. g4 Bg6 28.  Nb5 Bb8 29. Qc3 Bd6 30. Nxd6 Qxd6 31. Qc5 Qd8 32. d6 f6 33. Bc4+ Kh7 34. Qc7 Rc8 35. Be6 Rb8 36. Qxd8 Rxd8 37. d7 Be8 38. Bf5+ g6 39. dxe8=Q Rxe8 40. Rc7+ 1-0"))

let capablancaVforsberg = generate(pgnToSquares( "1. e3 g6 2. d4 Bg7 3. Nf3 d5 4. c4 e6 5. Nc3 Nf6 6. Be2 O-O 7. O-O b6 8. cxd5 exd5 9. Ne5 c5 10. b3 Ba6 11. Ba3 Re8 12. Bxa6 Nxa6 13. f4 cxd4 14. exd4 Nc7 15.  Rc1 a6 16. f5 Nb5 17. fxg6 hxg6 18. Bb4 Nxd4 19. Qxd4 Nd7 20. Nxd5 Rxe5 21. Qf2 f5 22. Rfd1 Re4 23. Bc3 Rc8 24. Bxg7 Rxc1 25. Rxc1 Kxg7 26. Rc7 Kf8 27. Qd2 Qe8 28. Nf6 Re1+ 29. Kf2 Re2+ 30. Qxe2 Qxe2+ 31. Kxe2 Nxf6 32. Rc6 Nd5 33. Rd6 1-0"))

let diagonals = generate(
  ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8",
   "a2", "b3", "c4", "d5", "e6", "f7", "g8",
   "b1", "c2", "d3", "e4", "f5", "g6", "h7",
   "a3", "b4", "c5", "d6", "e7", "f8",
   "c1", "d2", "e3", "f4", "g5", "h6",
    "a4", "b5", "c6", "d7", "e8", 
    "d1", "e2", "f3", "g4", "h5",
    "a5", "b6", "c7", "d8",
    "e1", "f2", "g3", "h4",
    "a6", "b7", "c8",
    "f1", "g2", "h3",
    "a7", "b8",
    "g1", "h2",
    "a8", "b7", "c6", "d5", "e4", "f3", "g2", "h1",
    "a7", "b6", "c5", "d4", "e3", "f2", "g1",
    "b8", "c7", "d6", "e5", "f4", "g3", "h2",
    "a6", "b5", "c4", "d3", "e2", "f1",
    "c8", "d7", "e6", "f5", "g4", "h3",
    "a5", "b4", "c3", "d2", "e1",
    "d8", "e7", "f6", "g5", "h4",
    "a4", "b3", "c2", "d1",
    "e8", "f7", "g6", "h5",
    "a3", "b2", "c1",
    "f8", "g7", "h6",
    "a2", "b1",
])

function icon(square) {
  if (mappings[square])
    return <img width="100%" src={`/chess-trainer/icons/${mappings[square]}.svg`} />
  else
    return square
}

function pictureNotation(square, justPicture=true) {
  return <span>{!justPicture && mappings[square]}<div style={{verticalAlign: "middle", display: "inline-block",width: 30, height: 30}}>{icon(square)}</div></span>
}

function App() {
  return (
    <Container maxWidth="sm">
      <h1>
        Welcome to Stephen R. Foster's Chess apps
      </h1>
      <AuditoryTrainer generators={
        [
          { name: "random", func: randomSquare },
          { name: "diagonals", func: diagonals },
          { name: "fischer vs kurz", func: fischerVkurz },
          { name: "capablanca vs benito", func: capablancaVbenito },
          { name: "capablanca vs bergsten", func: capablancaVbergsten},
          { name: "capablanca vs forsberg", func: capablancaVforsberg},
          { name: "dubov vs nakamura", func: dubovVNakamura}
        ]} />
      
      <Chessboard id="BasicBoard" customSquare={(squareData, b, c) => {  return <div style={{ width: 50, height: 50 }}>{ icon(squareData.square)}</div>}} />
    </Container>
  );
}


//TODO: These should not be out here.  Use refs.
let chess = new Chess();
let utterance = new SpeechSynthesisUtterance()
let timeout
function AuditoryTrainer({ generators}) {
  let [generatorIndex, setGeneratorIndex] = React.useState(0)
  let [rate, setRate] = React.useState(2)
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

  return (
    <>
      <p>Auditory Trainer, every {rate} seconds</p>
      <select onChange={(e) => setGeneratorIndex(generators.findIndex(g => g.name === e.target.value))}>
        {generators.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
      </select>
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
      })}</p>}
    </>
  )
}

export default App;
