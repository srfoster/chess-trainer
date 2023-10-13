
/*
let diagonals = 
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
]
*/

import { Game } from "./util"

let moreGames = require("./db.js").default
let moreGamesHash = {}

for (let i = 0; i < moreGames.length; i++) {
  let header = moreGames[i].header()
  let title = header.White + " vs " + header.Black + " " + header.Result
  moreGamesHash[title] = moreGames[i]
}

console.log("more", moreGamesHash, moreGames)

export default { /*diagonals,*/
    ...moreGamesHash, 
}