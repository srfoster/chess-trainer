import { Chess } from 'chess.js'

export const COLS  = [
  "a", "b", "c", "d", "e", "f", "g", "h"
]

export const ROWS  = [
  "1", "2", "3", "4", "5", "6", "7", "8"
]

export let mappings = {
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


export function clarifySounds(square) {
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

export function randomSquare() {
  return COLS[Math.floor(Math.random() * COLS.length)] + ROWS[Math.floor(Math.random() * ROWS.length)]
}

export function generate(sequence) {
  let count = -1
  return function ()
  {
    return sequence[(count++) % sequence.length]
  }
  //return ["a1", "h1"][count++ % 2]
}

export let pgnToSquares = (pgn) => pgn.replace(/\d+\./g, "").split(/ +/).filter(s => s.length > 0)

export function icon(square) {
  if (mappings[square])
    return <img width="100%" src={`/chess-trainer/icons/${mappings[square]}.svg`} />
  else
    return square
}

export function pictureNotation(square, justPicture=true) {
  return <span>{!justPicture && mappings[square]}<div style={{verticalAlign: "middle", display: "inline-block",width: 30, height: 30}}>{icon(square)}</div></span>
}

export function groupInPairs(arr) {
    var groups = [];

    for (var i = 0; i < arr.length; i += 2) {
        groups.push(arr.slice(i, i + 2));
    }

    return groups
}

export let counts = {}

export class Game {
    chess
    _moves = []
    _longMoves = []
    _fens = []
    timesPlayed = 0
    constructor(pgn) {
        //this._moves = pgnToSquares(pgn)

        this.chess = new Chess();

        /*
        for (let i = 0; i < this._moves.length; i++) {
            try {
              chess.move(this._moves[i]);
            } catch {
              console.error("Error moving", this._moves[i]) 
            }
        }
        */
        this.chess.loadPgn(pgn)
        let moveHistory = this.chess.history({ verbose: true });

        this._moves = moveHistory.map(m => m.san)
        this._longMoves = moveHistory.map(m => m.from + "-" + m.to)
        this._fens = moveHistory.map(m => m.after)

        for (let i = 0; i < this._longMoves.length; i++) {
            let move = this._longMoves[i]

            if (!counts[move]) counts[move] = []
            counts[move].push({move: move, fen: this._fens[i], index: i})

            let from = move.split("-")[0]
            let to = move.split("-")[1]

            if (!counts[to]) counts[to] = []
            counts[to].push({from: from, to: to, fen: this._fens[i], index: i})
        }
    }

    moves() {
        return this._moves
    }

    longMoves() {
        return this._longMoves
    }

    pictureMoves() {
        return this._longMoves.map(lm => {
            return lm.split("-").map((s)=>pictureNotation(s,true))
        })
    }

    pictureMoveWords() {
        return this._longMoves.map(lm => {
            return lm.split("-").map((s)=>mappings[s])
        })
    }

    fens() {
        return this._fens
    }

    header() {
        return this.chess.header()
    }

  name() {
    let header = this.header()
    let title = header.White + " vs " + header.Black + " " + header.Result
    return title
  }

}
