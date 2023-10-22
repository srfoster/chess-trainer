/*
TODO:

Pivot to using spectacle slideshow
- Autoplay
  - Need to make it not trigger multiple utterance events, is throwing off the nextStep
  - Rate slider seems not to be working.  Possibly because of the above.
- Convert spanish cards to slideshow
- Fix UX
- Fix UX on mobile



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

function rightArrow() {
  var event = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      code: 'ArrowRight', 
      which: 39, 
      keyCode: 39,
      bubbles: true, 
      cancelable: true 
  });

  document.dispatchEvent(event);
}

function App() {
  console.log("App render")

  let decks = [chessCards, spanishCards]

  let [rate, setRate] = React.useState(2)
  let [pictureMode, setPictureMode] = React.useState(true)

  const handleChange = (event, newValue) => {
    setRate(newValue)
  };

  let nextStep = React.useCallback(() => {
    setTimeout(rightArrow , rate * 1000)
  },[rate])

  return (
    <Container maxWidth="sm">
      <div style={{ width: "100%", height: 500, position: "relative"}}>
        <Deck template={<>
          <DefaultTemplate />
        </>}>
          {chessCards.map((c) => {
            return <Slide id={ c.content.name() }>
              <Slider value={rate} onChange={handleChange}
                valueLabelDisplay='off'
                marks={[{ value: 1, label: '1s' }, { value: 2, label: '2s' }, { value: 3, label: '3s' }, { value: 4, label: '4s' }, { value: 5, label: '5s' }, { value: 6, label: '6s' }, { value: 7, label: '7s' }, { value: 8, label: '8s' }, { value: 9, label: '9s' }, { value: 10, label: '10s' }]}
                min={1}
                max={10}
              />

              Picture Mode: <Switch checked={ pictureMode } value={pictureMode} onChange={(event) => {
                setPictureMode(event.target.checked)
              }} />
              {c.renderer({ card: c, onComplete: nextStep, pictureMode: pictureMode /* TODO: Not needed for spanish trainer! */})}
            </Slide>
          })}

        </Deck>
      </div>


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

let speak = (say, voiceIndex, onComplete) => {
  //Speak the current one
  utterance.lang = 'en-US'
  utterance.voice = window.speechSynthesis.getVoices()[voiceIndex || 0]
  utterance.rate = 2
  utterance.text = say
  utterance.onend = () => {
     onComplete()
  }
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
            {isActive && <Speak
              say={pictureMode ? currentMove.join(" ") : util.clarifySounds(currentMove)} voiceIndex={move % 2}
              onComplete={ onComplete }
            />}
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


let Speak = ({ say, voiceIndex, onComplete }) => {
  React.useEffect(() => {
    console.log("Speak", say, voiceIndex)
    speak(say, voiceIndex, onComplete)
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
