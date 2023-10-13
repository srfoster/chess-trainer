
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

let stephenVsOscar1 = new Game(`
[Event "Vs. Computer"]
[Site "Chess.com"]
[Date "2023-10-01"]
[White "stephenrfoster"]
[Black "Oscar"]
[Result "1-0"]
[TimeControl "-"]
[Termination "stephenrfoster won by checkmate"]
[UTCDate "2023.10.02"]
[UTCTime "15:19:03"]
[Variant "Standard"]
[ECO "B27"]
[Opening "Pterodactyl Defense: Sicilian, Rhamphorhynchus"]
[Annotator "https://lichess.org/@/stephenfoster"]

{ My first win against Oscar. I played it over a few days while at the Celebration of Life for my Grandma Jody. Finished it Oct 1, 2023. I've lost many games against this bot before, and I did a few things differently this time:

* Try to leave nothing to chance
* Treat each move seriously
* Always evaluate all checks, captures, and forcing moves -- for myself, for my opponent, and recursively in each move of a variation.
* Relentlessly search for plans, and never move aimlessly

Doing all of this was tiring, which is why I could only manage a few moves each day. But I hope that by playing more such games against the computer, I can put my tactical abilities into practice and eventually speed the whole process up. }
1. d4 { [%eval 0.0] } 1... g6?! { [%eval 0.68] } { Inaccuracy. Nf6 was best. } (1... Nf6 2. c4 e6 3. Nf3 d5 4. cxd5 exd5 5. Bf4 c6 6. Nc3) 2. e4 { [%eval 0.68] } 2... Bg7 { [%eval 0.73] } 3. Nf3 { [%eval 0.61] } 3... c5 { [%eval 0.72] } 4. dxc5 { [%eval 0.63] } 4... Qa5+ { [%eval 1.18] } 5. Nc3? { [%eval -0.05] } { Mistake. c3 was best. } (5. c3 Qxc5 6. Na3 Nf6 7. Nb5 O-O 8. Be3 Qc6 9. Nfd4 Qxe4) 5... Qxc5?! { [%eval 0.86] } { Inaccuracy. Bxc3+ was best. } (5... Bxc3+ 6. bxc3 Qxc3+ 7. Bd2 Qxc5 8. Bd3 d6 9. O-O Nf6 10. Bh6) 6. Bd2 { [%eval 0.52] } (6. Nd5 Nf6) 6... d6?! { [%eval 1.12] } { Inaccuracy. Nf6 was best. } (6... Nf6 7. Be3 Qa5 8. Nd2 Nc6 9. Nb3 Qc7 10. Nd5 Qd8 11. Nxf6+) 7. Bd3?! { [%eval 0.3] } { Inaccuracy. Nd5 was best. } (7. Nd5 Bd7 8. h4 Qc8 9. h5 Nc6 10. Qc1 gxh5 11. c4 Qd8) 7... Qb6 { [%eval 0.81] } 8. Rb1 { [%eval 0.41] } 8... Nf6 { [%eval 0.35] } 9. O-O { [%eval 0.38] } 9... Nc6 { [%eval 0.69] } 10. Re1 { [%eval 0.3] } 10... O-O { [%eval 0.57] } 11. h3 { [%eval 0.53] } 11... Qa5 { [%eval 0.8] } 12. a3 { [%eval 0.64] } 12... Bd7 { [%eval 0.91] } 13. Nb5 { [%eval 0.81] } 13... Qd8 { [%eval 0.89] } 14. Bc3?! { [%eval -0.01] } { Inaccuracy. c4 was best. } (14. c4 Bc8 15. Bf1 Nd7 16. b4 b6 17. Qc1 Nde5 18. Nxe5 Nxe5 19. Bh6 Bd7 20. Bxg7 Kxg7) 14... a6 { [%eval 0.02] } 15. Nbd4 { [%eval 0.03] } 15... e5 { [%eval 0.07] } 16. Ne2 { [%eval -0.23] } 16... h6 { [%eval -0.02] } 17. Bd2 { [%eval -0.18] } 17... b5 { [%eval -0.02] } 18. c3 { [%eval -0.48] } 18... Be6 { [%eval -0.33] } 19. Ng3 { [%eval -0.41] } 19... Qd7 { [%eval -0.22] } 20. Qe2 { [%eval -0.46] } 20... Ba2 { [%eval 0.08] } 21. Rbc1 { [%eval 0.0] } 21... Rab8 { [%eval 0.33] } 22. b4 { [%eval 0.25] } 22... Rfe8 { [%eval 0.74] } 23. Be3 { [%eval 0.52] } 23... Bb3 { [%eval 0.7] } 24. Nd2 { [%eval 0.35] } 24... Be6 { [%eval 0.26] } 25. a4 { [%eval 0.29] } 25... Qb7 { [%eval 0.33] } 26. Nb1 { [%eval 0.07] } 26... d5 { [%eval 0.4] } 27. Na3?! { [%eval -0.29] } { Inaccuracy. axb5 was best. } (27. axb5 axb5) 27... Ne7?! { [%eval 0.63] } { Inaccuracy. bxa4 was best. } (27... bxa4 28. Bxa6) 28. Bc5 { [%eval 0.46] } 28... Nxe4 { [%eval 0.86] } 29. Bxe4?! { [%eval 0.27] } { Inaccuracy. Nxe4 was best. } (29. Nxe4 dxe4) 29... dxe4 { [%eval 0.3] } 30. Nxe4 { [%eval 0.38] } 30... Red8? { [%eval 1.84] } { Mistake. Nf5 was best. } (30... Nf5) 31. Bd6?! { [%eval 0.97] } { Inaccuracy. axb5 was best. } (31. axb5 axb5 32. Bd6 Bd5 33. Bxb8 Rxb8 34. Nc5 Qc6 35. f3 Nf5 36. Rcd1 Nh4 37. Rf1 Nf5) 31... Rbc8? { [%eval 2.63] } { Mistake. Rxd6 was best. } (31... Rxd6 32. Nxd6 Qc6 33. Ne4 Nd5 34. Qf3 f5 35. Nc5 Bf7 36. axb5 axb5 37. Qg3 Nf4 38. Nd3) 32. Nc5 { [%eval 2.28] } 32... Qa7 { [%eval 2.38] } 33. Nxe6 { [%eval 2.35] } 33... Rxd6 { [%eval 2.61] } 34. Nxg7 { [%eval 2.82] } 34... f6 { [%eval 3.22] } 35. Nh5 { [%eval 3.05] } 35... gxh5 { [%eval 2.89] } 36. axb5 { [%eval 3.15] } 36... Kg7 { [%eval 3.64] } 37. c4 { [%eval 3.77] } 37... Rd4 { [%eval 3.47] } 38. bxa6 { [%eval 3.72] } 38... Qxa6 { [%eval 3.56] } 39. Nb5 { [%eval 3.82] } 39... Rh4 { [%eval 3.69] } 40. Red1 { [%eval 3.86] } 40... Rhxc4? { [%eval 6.28] } { Mistake. Qe6 was best. } (40... Qe6 41. Rd6 Qf5 42. Rd3 Qf4 43. Rcd1 Nf5 44. c5 Qxb4 45. Nd6 Nxd6 46. cxd6 Qc4 47. Rg3+) 41. Rxc4 { [%eval 6.38] } 41... Qxb5 { [%eval 6.33] } 42. Rg4+ { [%eval 6.35] }  1-0 `)

let stephenVsOscar2 = new Game(`

[Event "vs Computer"]
[Site "Chess.com"]
[Date "2023.10.06"]
[Round "-"]
[White "stephenrfoster"]
[Black "Oscar-BOT"]
[Result "0-1"]
[WhiteElo "1819"]
[BlackElo "2100"]
[TimeControl "1/0"]
[Termination "Oscar-BOT won by resignation"]
[UTCDate "2023.10.07"]
[UTCTime "00:15:36"]
[Variant "Standard"]
[ECO "B06"]
[Opening "Pterodactyl Defense: Eastern, Pterodactyl"]
[Annotator "https://lichess.org/@/stephenfoster"]

{ Material imbalance, but equal game. Caught a new Pokemon.

Also, how should we have proceeded then?? }
1. d4 { [%eval 0.0] } 1... g6?! { [%eval 0.68] } { Inaccuracy. Nf6 was best. } (1... Nf6 2. c4 e6 3. Nf3 d5 4. cxd5 exd5 5. Bf4 c6 6. Nc3) 2. e4 { [%eval 0.68] } 2... Bg7 { [%eval 0.73] } 3. Nc3 { [%eval 0.47] } 3... c5 { [%eval 0.79] } 4. dxc5 { [%eval 0.66] } 4... Qa5 { [%eval 0.48] } 5. Bd2 { [%eval 0.63] } 5... Qxc5 { [%eval 0.92] } 6. Nf3? { [%eval 0.52] } (6. Nd5 Na6 (6... Nf6 7. Bb4 Qc6 8. Bb5) (6... b6) 7. Nf3 e6 8. Bc3 Bxc3+ 9. Nxc3 d6 (9... Nf6 10. Qd2 O-O 11. O-O-O) 10. Qd2 Nf6 11. O-O-O O-O 12. Qxd6 Qxf2 13. Qf4 Kg7 14. Bxa6 bxa6 15. Qe5 Qb6 16. Rhf1 Qb8 17. Qd4 Qb6 18. Qe5 Qb8 19. Rd6 Kg8 20. Qd4 Ne8 21. Rd8 Qb6 22. Qxb6 axb6 23. Ne5 Bb7 24. Rxa8 Bxa8 25. Nd7 Nd6 26. Rd1 Nb7 27. Nxf8 Kxf8 28. Rd7 Ke8 29. Rc7 Nd8 30. a4 h5 31. h4 f5 32. exf5 gxf5 33. g3 e5 34. Kd2 f4 35. gxf4 exf4 36. Rc4 f3 37. Ke3 Kd7 38. Rd4+ Ke8 39. Rb4 Kd7 40. Rxb6 Nf7 41. Rxa6 Bc6 42. Ra7+ Ke6 43. Nb5 Kd5 { Ponkratov, Pavel - Pridorozhni, Aleksei, 1-0, Wch Rapid, 2013, https://lichess.org/uMCQj8vR }) 6... d6?! { [%eval 1.12] } { Inaccuracy. Nf6 was best. } (6... Nf6 7. Bd3 (7. Be3 Qa5 8. Nd2 Nc6 9. Nb3 Qc7 10. Nd5 Qd8 11. Nxf6+) 7... d6) 7. Bd3?! { [%eval 0.3] } { Inaccuracy. Nd5 was best. } (7. Nd5 Bd7 8. h4 Qc8 9. h5 Nc6 10. Qc1 gxh5 11. c4 Qd8) 7... Nc6?? { [%eval 3.98] } { Blunder. Nf6 was best. } (7... Nf6 8. O-O O-O 9. a4 Bg4 10. h3 Bxf3 11. Qxf3 Qc7 12. Nb5) 8. O-O?? { [%eval 0.47] } { Blunder. Nd5 was best. } (8. Nd5 Bg4 9. b4 Bxf3 10. gxf3 Qd4 11. Rb1 Rc8 12. f4 e6) 8... Be6?! { [%eval 0.97] } 9. Nb5?! { [%eval 0.66] } 9... Ne5?! { [%eval 1.67] } { Inaccuracy. Qb6 was best. } (9... Qb6 10. Be3) 10. Be3 { [%eval 1.76] } 10... Qc8?! { [%eval 1.76] } 11. Nxa7 { [%eval 1.76] } 11... Nxf3+ { [%eval 1.85] } 12. Qxf3 { [%eval 1.73] } 12... Qb8 { [%eval 1.85] } 13. Nb5 { [%eval 1.86] } 13... Bxb2 { [%eval 1.89] } 14. Rab1 { [%eval 1.9] } 14... Be5 { [%eval 2.1] } 15. Bb6 { [%eval 2.31] } 15... Bxa2?! { [%eval 3.26] } { Inaccuracy. Kf8 was best. } (15... Kf8 16. Nc7 Nf6 17. Nxe6+ fxe6 18. Qh3 g5 19. Qxe6 Qc8 20. Qxc8+ Rxc8 21. Be3 Ng4 22. Bxg5) 16. Nc7+ { [%eval 2.9] } 16... Kf8 { [%eval 3.07] } 17. Bb5?! { [%eval 1.96] } { Inaccuracy. Ra1 was best. } (17. Ra1 Bxa1 18. Rxa1 Ra6 19. Rxa2 Rxb6 20. Ra8 Qxa8 21. Nxa8 Rb1+ 22. Bf1 Nf6 23. Nc7 h5) 17... Ra7?! { [%eval 2.83] } { Inaccuracy. Nf6 was best. } (17... Nf6 18. Rb4 d5 19. Nxa8 dxe4 20. Qa3 Bxh2+ 21. Kh1 Bd6 22. c4 Bxb4 23. Qxb4 Qxa8 24. Ra1) 18. c4 { [%eval 2.25] } 18... Nf6 { [%eval 2.19] } 19. Bxa7?? { [%eval 0.29] } { Blunder. Rb4 was best. } (19. Rb4 Kg7 20. Qe3 Ng4 21. Qh3 Bxh2+ 22. Kh1 h5 23. f4 Rc8 24. Qc3+ e5 25. Nd5 Ra8) 19... Qxa7 { [%eval 0.38] } 20. Rb4?! { [%eval 0.0] } 20... Qc5 { [%eval 0.0] } 21. Ra4 { [%eval 0.0] } 21... Qxc7 { [%eval 0.0] } 22. Rxa2 { [%eval 0.0] } 22... Kg7 { [%eval 0.0] } 23. h3 { [%eval -0.02] } 23... Qc5 { [%eval -0.06] } 24. Qd3 { [%eval -0.32] } 24... Qd4?! { [%eval 0.0] } 25. Qxd4 { [%eval 0.0] } 25... Bxd4 { [%eval 0.0] } 26. Re1 { [%eval 0.0] } 26... Rc8 { [%eval 0.0] } 27. Kh1 { [%eval 0.0] } 27... e5?! { [%eval 0.35] } 28. f3 { [%eval 0.47] } 28... h5 { [%eval 0.48] } 29. Rb1? { [%eval -1.16] } { Mistake. h4 was best. } (29. h4 g5) 29... h4! { [%eval -0.98] } 30. Rd1 { [%eval -1.23] } 30... Nh5 { [%eval -1.16] } 31. Kh2? { [%eval -1.14] } 31... Nf4?! { [%eval -0.2] } { Inaccuracy. Ng3 was best. } (31... Ng3 32. Rd3 Bc5 33. Rb3 Kh6 34. Ba4 b6 35. Bd7 Rc7 36. Bb5 f5 37. exf5 gxf5 38. Ra8) 32. g3 { [%eval -0.21] } 32... hxg3+ { [%eval -0.35] } 33. Kxg3 { [%eval -0.15] } 33... Rh8?! { [%eval -0.06] } 34. h4 { [%eval -0.16] } 34... f5 { [%eval 0.0] } 35. Rb1 { [%eval -0.2] } 35... g5 { [%eval 0.0] } 36. Rh1 { [%eval 0.0] } 36... Kf7 { [%eval 0.0] } 37. Rah2?? { [%eval -5.52] } { Blunder. exf5 was best. } (37. exf5 Nh5+ 38. Kg4 Nf6+ 39. Kg3 Nh5+) 37... gxh4+ { [%eval -5.34] } 38. Rxh4 { [%eval -5.29] } 38... Rg8+! { [%eval -5.34] } 39. Rg4 { [%eval -5.29] } 39... Ne2+ { [%eval -5.29] } 40. Kg2 { [%eval -5.26] } 40... Nf4+ { [%eval -5.32] } 41. Kg3 { [%eval -5.23] } 41... fxg4 { [%eval -4.69] } 42. fxg4 { [%eval -5.7] } 42... Kf6 { [%eval -5.3] } { <br /><br
/>Game may have continued... } (43. Rh7 Ra8 44. g5+ Kxg5 45. Rg7+ Kf6 46. Rxb7 Bc5 { -5.02 }) 0-1


`)

/*
let dubovVNakamura = new Game("1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2 b5 8. a4 Bb7 9. axb5 a6 10. Nc3 axb5 11. Rxa8 Bxa8 12. Nxb5 Bd5 13. Bf4 c5 14. dxc5 Qa5 15. Nc3 Qxc5 16. e4 Bc6 17. Be3 Qa5 18. Nd4 Rc8 19. h3 Be8 20. f4 Na6 21. e5 Nb4 22. Qd2 Nd7 23. Kh2 Qa6 24. Qe2 Nd3 25. f5 N7xe5 26. fxe6 fxe6 27. Nxe6 Bc6 28. Nd4 Bxg2 29. Qxg2 Rb8 30. Nf5 Bf6 31. Qd5+ Kh8 32. Ne4 Rxb2+ 33. Kh1 Rb5 34. Bc5 Qb7 35. Nxf6 Qxd5+ 36. Nxd5 Rxc5 37. Nd4 h6 38. Ne7 Rc7 39. Rf8+ Kh7 40. Re8 Ng6 0-1")

let fischerVkurz = new Game("1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Bg5 Be7 7. Nxf6+ Nxf6 8. Bd3 O-O 9. Qe2 c6 10. O-O-O Qc7 11. h4 b6 12. Ne5 Bb7 13. Rh3 Rad8 14. Rg3 Kh8 15. Bxf6 Bxf6 16. Qh5 h6 17. Rg6 fxg6 18. Qxg6 1-0")

let capablancaVbenito =  new Game("1. d4 d5 2. Nf3 Nf6 3. e3 c6 4. Bd3 Bg4 5. c4 e6 6. Nbd2 Nbd7 7. O-O Be7 8. Qc2 Bh5 9. b3 Bg6 10. Bb2 Bxd3 11. Qxd3 O-O 12. Rae1 Qc7 13. e4 dxe4 14. Nxe4 Nxe4 15. Rxe4 Bf6 16. Qe3 c5 17. Ne5 cxd4 18. Nxd7 Qxd7 19. Bxd4 Bxd4 20. Rxd4 Qc7 21. Rfd1 Rad8 22. b4 Rxd4 23. Qxd4 b6 24. g3 Rc8 25. Rc1 Rd8 26. Qe3 Kf8 27. c5 bxc5 28. Qe4 Rd5 29. bxc5 g6 30. c6 Kg7 31. a4 Rd6 32. Qe5+ Kf8 33. Qxd6+ 1-0 ")

let capablancaVbergsten = new Game("1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 Bf5 5. cxd5 cxd5 6. Qb3 Qc7 7. Nc3 e6 8. Bd2 Nc6 9. Rc1 Be7 10. Be2 O-O 11. O-O Rfc8 12. Nh4 Ng4 13. Nf3 Be4 14. g3 Bf5 15.  Na4 h6 16. h3 Nf6 17. Kh2 Ne4 18. Be1 Bd6 19. Nd2 Qe7 20. Nxe4 dxe4 21. Kg2 e5 22. d5 Nb4 23. Bxb4 Bxb4 24. Rfd1 Rxc1 25. Rxc1 Bd6 26. Nc3 Qd7 27. g4 Bg6 28.  Nb5 Bb8 29. Qc3 Bd6 30. Nxd6 Qxd6 31. Qc5 Qd8 32. d6 f6 33. Bc4+ Kh7 34. Qc7 Rc8 35. Be6 Rb8 36. Qxd8 Rxd8 37. d7 Be8 38. Bf5+ g6 39. dxe8=Q Rxe8 40. Rc7+ 1-0")

let capablancaVforsberg =  new Game("1. e3 g6 2. d4 Bg7 3. Nf3 d5 4. c4 e6 5. Nc3 Nf6 6. Be2 O-O 7. O-O b6 8. cxd5 exd5 9. Ne5 c5 10. b3 Ba6 11. Ba3 Re8 12. Bxa6 Nxa6 13. f4 cxd4 14. exd4 Nc7 15.  Rc1 a6 16. f5 Nb5 17. fxg6 hxg6 18. Bb4 Nxd4 19. Qxd4 Nd7 20. Nxd5 Rxe5 21. Qf2 f5 22. Rfd1 Re4 23. Bc3 Rc8 24. Bxg7 Rxc1 25. Rxc1 Kxg7 26. Rc7 Kf8 27. Qd2 Qe8 28. Nf6 Re1+ 29. Kf2 Re2+ 30. Qxe2 Qxe2+ 31. Kxe2 Nxf6 32. Rc6 Nd5 33. Rd6 1-0")

*/

let ct96386 = new Game(`
[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "96386"]
[SetUp "1"]
[FEN "4r2k/1Q3pbp/3p4/7P/4BqbR/2P1N3/1P3P2/4K3 b - - 0 1"]

1... f5 1.h6 ( { +3.65 } 1.h6 Bxh6 2.Rxg4 Qe5 3.Nxf5 Qxf5 4.Kf1 Rxe4 5.Qa8+ Re8 6.Qxe8+ Bf8 7.Qe4 Qxe4 8.Rxe4 ) ( { -0.02 } 1.Bc6 Rxe3+ 2.fxe3 Qxe3+ 3.Kf1 Be2+ 4.Kg2 Qg5+ 5.Kf2 Qxh4+ 6.Kxe2 Qxh5+ 7.Bf3 Qe8+ ) ( { -0.68 } 1.Bb1 Bh6 2.Kf1 Be2+ 3.Ke1 Qxh4 4.Bxf5 Re7 5.Qa8+ Kg7 6.Kxe2 Qh2 7.Kf1 Bxe3 8.fxe3 ) ( { -0.72 } 1.Bd5 Qg5 2.Rh2 f4 3.h6 Bxc3+ 4.bxc3 fxe3 5.Qg7+ Qxg7 6.hxg7+ Kxg7 7.fxe3 Rxe3+ ) ( { -1.69 } 1.Bh1 Bf6 2.Rxg4 fxg4 3.Bc6 Rf8 4.Be4 Bg7 5.h6 Qxf2+ 6.Kd1 Qg1+ 7.Kc2 Qh2+ ) 1...Bxh6 ( { -3.87 } 1...Bxh6 2.Rxg4 Qe5 3.Nxf5 Qxf5 4.Kf1 Rxe4 5.Qxe4 Qxe4 6.Rxe4 d5 7.Re7 Bc1 8.b4 Bg5 9.Ra7 Bf6 ) ( { -5.18 } 1...Qe5 2.hxg7+ Qxg7 3.Qxg7+ Kxg7 4.Bc6 Re7 5.Kd2 Rc7 6.Bd5 Kg6 7.f3 Kg5 8.Rh1 Bh5 9.f4+ Kg6 10.Be6 Bg4 11.Bxf5+ Bxf5 ) ( { -5.18 } 1...Qg5 2.hxg7+ Qxg7 3.Qxg7+ Kxg7 4.Bc6 Re7 5.Kd2 Rc7 6.Bd5 Kg6 7.f3 Kg5 8.Rh1 Bh5 9.f4+ Kg6 10.Be6 Bg4 11.Bxf5+ Bxf5 ) ( { -6.60 } 1...Bf8 2.Rxg4 Qxh6 3.Nxf5 Qe6 4.Kf1 d5 5.Qxd5 Qxd5 6.Bxd5 h6 7.Bf7 Rd8 8.b4 Kh7 9.Ke2 Rd7 ) ( { -7.05 } 1...Bf6 2.Qf7 Qe5 3.Rxg4 Qe7 4.Qxe7 Bxe7 5.Nxf5 d5 6.Bxd5 Bf6+ 7.Re4 Rxe4+ 8.Bxe4 Be5 9.Ke2 Kg8 ) 2.Rxg4 ( { +3.77 } 2.Rxg4 Qe5 3.Nxf5 Qxf5 4.Kf1 Rxe4 5.Qa8+ Bf8 6.Qxe4 Qxe4 7.Rxe4 Kg7 8.Ke2 Kg6 9.Rg4+ Kf5 ) ( { -0.93 } 2.Rxh6 Qxh6 3.Bc6 Rxe3+ 4.fxe3 Qxe3+ 5.Kf1 f4 6.Kg2 Qe2+ 7.Kg1 Qe1+ 8.Kg2 Qd2+ 9.Kg1 ) ( { -1.06 } 2.Kf1 Rxe4 3.Nxg4 Qc1+ 4.Kg2 Rxg4+ 5.Rxg4 fxg4 6.Qc8+ Kg7 7.Qd7+ Kf6 8.Qxd6+ Kf5 9.Qd5+ ) ( { -2.65 } 2.Nxg4 Qxe4+ 3.Qxe4 Rxe4+ 4.Kd1 Bg5 5.Rh5 Rxg4 6.b4 Kg7 7.b5 Rg1+ 8.Kc2 Rg2 9.b6 ) ( { -3.31 } 2.Bf3 Rxe3+ 3.fxe3 Qxe3+ 4.Kf1 Bxf3 5.Qc8+ Kg7 6.Qd7+ Kg8 7.Qb5 Bf8 8.Rd4 Qg5 9.Kf2 ) *
`)

let ct136855 = new Game(`

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "136855"]
[SetUp "1"]
[FEN "6k1/4N1p1/8/5p2/3Pp3/2p1P1P1/4K2n/8 b - - 0 1"]

1...Kf7 1.Nxf5 ( { -0.27 } 1.Nxf5 Nf1 2.Kd1 Kf6 3.Nd6 Nxg3 4.Nb5 c2+ 5.Kxc2 Nf1 6.Nd6 Nxe3+ 7.Kb3 Ke6 8.Nxe4 Kd5 9.Ng5 Nf5 10.Kc3 Nxd4 ) ( { -2.09 } 1.Nd5 c2 2.Kd2 Nf1+ 3.Kxc2 Ke6 4.Nf4+ Kd6 5.Ng2 Nxg3 6.Kd2 g5 7.Ke1 Nh5 8.Kf2 f4 9.exf4 gxf4 10.Nxf4 Nxf4 11.Ke3 Kd5 12.Kxf4 ) ( { -4.15 } 1.Nc6 Nf1 2.Nb4 Nxg3+ 3.Kd1 Ke6 4.Na6 Nf1 5.Nc7+ Kd6 6.Nb5+ Kc6 7.Nxc3 Nxe3+ 8.Ke2 Nd5 9.Na4 g5 10.Nc5 g4 ) ( { -8.54 } 1.Nc8 Nf1 2.Kd1 Nxe3+ 3.Kc1 Nc4 4.Kc2 e3 5.Nd6+ Kf6 6.Kd3 c2 7.Nxc4 c1=Q 8.Nxe3 Qg1 9.Nd5+ Kf7 10.g4 Qxg4 ) ( { -11.81 } 1.Kd1 Kxe7 2.Kc2 Ng4 3.d5 Nxe3+ 4.Kxc3 Nf1 5.Kd4 Nxg3 6.Ke3 Kd6 7.Kf2 f4 8.Kg2 Kxd5 9.Kf2 e3+ 10.Kg2 ) 1...Nf1 ( { +0.07 } 1...Nf1 2.Kd1 g6 3.Nd6+ Ke6 4.Nxe4 Nxe3+ 5.Kc1 c2 6.Nc3 Kf6 7.Kd2 Kf5 8.d5 Ke5 9.d6 Kxd6 10.Ne2 Nf5 11.Kxc2 Ke5 12.Kd2 g5 ) ( { 0.00 } 1...c2 2.Kd2 Ng4 3.Kxc2 Ke6 4.Nxg7+ Kf6 5.Ne8+ Ke7 6.Nc7 Nxe3+ 7.Kc3 Kd6 8.Nb5+ Kc6 9.Kb4 Nd5+ 10.Kc4 Ne3+ 11.Kb4 ) ( { 0.00 } 1...Ke6 2.Nxg7+ Kd5 3.Nf5 Ke6 4.Ng7+ ) ( { 0.00 } 1...Kg6 2.Ne7+ Kf7 3.Nf5 ) ( { 0.00 } 1...Ng4 2.Nd6+ Kg6 3.Nxe4 c2 4.Kd2 Nxe3 5.g4 Kf7 6.Nc3 Ke6 7.Ne2 Nxg4 8.Kxc2 g5 9.Kd3 Nf6 10.Ke3 g4 11.Kf4 Kd6 12.Kf5 Ke7 13.d5 Nxd5 14.Kxg4 Ne3+ 15.Kf3 ) 2.Kd1 ( { -0.22 } 2.Kd1 Kf6 3.g4 g6 4.Nd6 Nxe3+ 5.Kc1 Ke6 6.Nxe4 Kd5 7.Nxc3+ Kxd4 8.Ne2+ Ke5 9.g5 Kf5 10.Kd2 Nd5 11.Nd4+ ) ( { -7.30 } 2.Nd6+ Ke7 3.Kxf1 c2 4.Nxe4 c1=Q+ 5.Ke2 Qc4+ 6.Kf2 Qa2+ 7.Kf3 Qd5 8.Kf4 Qf7+ 9.Ke5 Qe6+ 10.Kf4 g6 11.g4 g5+ 12.Nxg5 Qf6+ 13.Ke4 Qxg5 ) ( { -7.43 } 2.Kxf1 c2 3.Nd6+ Ke7 4.Nxe4 c1=Q+ 5.Kf2 g5 6.Ke2 Qc4+ 7.Kd2 Qa2+ 8.Kc3 Qe2 9.Nc5 Qxe3+ 10.Kc2 Qxd4 11.Nd3 ) ( { -9.49 } 2.g4 c2 3.Ng3 c1=Q 4.Nxf1 Kg6 5.d5 Qc2+ 6.Ke1 Kg5 7.Nd2 Qd3 8.Kd1 Qxd5 9.Ke1 Qd3 10.Nf1 Kxg4 11.Kf2 ) ( { -11.35 } 2.d5 c2 3.Kxf1 c1=Q+ 4.Ke2 Qc2+ 5.Ke1 Qc3+ 6.Ke2 Qd3+ 7.Ke1 g6 8.Nh4 Qxe3+ 9.Kf1 Qxg3 10.Ng2 e3 11.Kg1 e2 12.Kh1 e1=Q+ 13.Nxe1 Qxe1+ ) *

`)

let moreGames = require("./db.js").default
let moreGamesHash = {}

for (let i = 0; i < moreGames.length; i++) {
  moreGamesHash["dynamicLoad" + i] = moreGames[i]
}

console.log("more", moreGamesHash, moreGames)

export default { /*diagonals,*/
    stephenVsOscar1, stephenVsOscar2,

    ct96386, ct136855, ...moreGamesHash, 
    //fischerVkurz, capablancaVbenito, capablancaVbergsten, capablancaVforsberg, dubovVNakamura
}