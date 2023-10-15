import { Game } from "../util";

let myGames = `

[Event "Vs. Computer"]
[Site "Chess.com"]
[Date "2023-10-01"]
[White "player"]
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
1. d4 { [%eval 0.0] } 1... g6?! { [%eval 0.68] } { Inaccuracy. Nf6 was best. } (1... Nf6 2. c4 e6 3. Nf3 d5 4. cxd5 exd5 5. Bf4 c6 6. Nc3) 2. e4 { [%eval 0.68] } 2... Bg7 { [%eval 0.73] } 3. Nf3 { [%eval 0.61] } 3... c5 { [%eval 0.72] } 4. dxc5 { [%eval 0.63] } 4... Qa5+ { [%eval 1.18] } 5. Nc3? { [%eval -0.05] } { Mistake. c3 was best. } (5. c3 Qxc5 6. Na3 Nf6 7. Nb5 O-O 8. Be3 Qc6 9. Nfd4 Qxe4) 5... Qxc5?! { [%eval 0.86] } { Inaccuracy. Bxc3+ was best. } (5... Bxc3+ 6. bxc3 Qxc3+ 7. Bd2 Qxc5 8. Bd3 d6 9. O-O Nf6 10. Bh6) 6. Bd2 { [%eval 0.52] } (6. Nd5 Nf6) 6... d6?! { [%eval 1.12] } { Inaccuracy. Nf6 was best. } (6... Nf6 7. Be3 Qa5 8. Nd2 Nc6 9. Nb3 Qc7 10. Nd5 Qd8 11. Nxf6+) 7. Bd3?! { [%eval 0.3] } { Inaccuracy. Nd5 was best. } (7. Nd5 Bd7 8. h4 Qc8 9. h5 Nc6 10. Qc1 gxh5 11. c4 Qd8) 7... Qb6 { [%eval 0.81] } 8. Rb1 { [%eval 0.41] } 8... Nf6 { [%eval 0.35] } 9. O-O { [%eval 0.38] } 9... Nc6 { [%eval 0.69] } 10. Re1 { [%eval 0.3] } 10... O-O { [%eval 0.57] } 11. h3 { [%eval 0.53] } 11... Qa5 { [%eval 0.8] } 12. a3 { [%eval 0.64] } 12... Bd7 { [%eval 0.91] } 13. Nb5 { [%eval 0.81] } 13... Qd8 { [%eval 0.89] } 14. Bc3?! { [%eval -0.01] } { Inaccuracy. c4 was best. } (14. c4 Bc8 15. Bf1 Nd7 16. b4 b6 17. Qc1 Nde5 18. Nxe5 Nxe5 19. Bh6 Bd7 20. Bxg7 Kxg7) 14... a6 { [%eval 0.02] } 15. Nbd4 { [%eval 0.03] } 15... e5 { [%eval 0.07] } 16. Ne2 { [%eval -0.23] } 16... h6 { [%eval -0.02] } 17. Bd2 { [%eval -0.18] } 17... b5 { [%eval -0.02] } 18. c3 { [%eval -0.48] } 18... Be6 { [%eval -0.33] } 19. Ng3 { [%eval -0.41] } 19... Qd7 { [%eval -0.22] } 20. Qe2 { [%eval -0.46] } 20... Ba2 { [%eval 0.08] } 21. Rbc1 { [%eval 0.0] } 21... Rab8 { [%eval 0.33] } 22. b4 { [%eval 0.25] } 22... Rfe8 { [%eval 0.74] } 23. Be3 { [%eval 0.52] } 23... Bb3 { [%eval 0.7] } 24. Nd2 { [%eval 0.35] } 24... Be6 { [%eval 0.26] } 25. a4 { [%eval 0.29] } 25... Qb7 { [%eval 0.33] } 26. Nb1 { [%eval 0.07] } 26... d5 { [%eval 0.4] } 27. Na3?! { [%eval -0.29] } { Inaccuracy. axb5 was best. } (27. axb5 axb5) 27... Ne7?! { [%eval 0.63] } { Inaccuracy. bxa4 was best. } (27... bxa4 28. Bxa6) 28. Bc5 { [%eval 0.46] } 28... Nxe4 { [%eval 0.86] } 29. Bxe4?! { [%eval 0.27] } { Inaccuracy. Nxe4 was best. } (29. Nxe4 dxe4) 29... dxe4 { [%eval 0.3] } 30. Nxe4 { [%eval 0.38] } 30... Red8? { [%eval 1.84] } { Mistake. Nf5 was best. } (30... Nf5) 31. Bd6?! { [%eval 0.97] } { Inaccuracy. axb5 was best. } (31. axb5 axb5 32. Bd6 Bd5 33. Bxb8 Rxb8 34. Nc5 Qc6 35. f3 Nf5 36. Rcd1 Nh4 37. Rf1 Nf5) 31... Rbc8? { [%eval 2.63] } { Mistake. Rxd6 was best. } (31... Rxd6 32. Nxd6 Qc6 33. Ne4 Nd5 34. Qf3 f5 35. Nc5 Bf7 36. axb5 axb5 37. Qg3 Nf4 38. Nd3) 32. Nc5 { [%eval 2.28] } 32... Qa7 { [%eval 2.38] } 33. Nxe6 { [%eval 2.35] } 33... Rxd6 { [%eval 2.61] } 34. Nxg7 { [%eval 2.82] } 34... f6 { [%eval 3.22] } 35. Nh5 { [%eval 3.05] } 35... gxh5 { [%eval 2.89] } 36. axb5 { [%eval 3.15] } 36... Kg7 { [%eval 3.64] } 37. c4 { [%eval 3.77] } 37... Rd4 { [%eval 3.47] } 38. bxa6 { [%eval 3.72] } 38... Qxa6 { [%eval 3.56] } 39. Nb5 { [%eval 3.82] } 39... Rh4 { [%eval 3.69] } 40. Red1 { [%eval 3.86] } 40... Rhxc4? { [%eval 6.28] } { Mistake. Qe6 was best. } (40... Qe6 41. Rd6 Qf5 42. Rd3 Qf4 43. Rcd1 Nf5 44. c5 Qxb4 45. Nd6 Nxd6 46. cxd6 Qc4 47. Rg3+) 41. Rxc4 { [%eval 6.38] } 41... Qxb5 { [%eval 6.33] } 42. Rg4+ { [%eval 6.35] }  1-0

---

[Event "vs Computer"]
[Site "Chess.com"]
[Date "2023.10.06"]
[Round "-"]
[White "player"]
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

---

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2023.10.14"]
[Round "-"]
[White "player"]
[Black "reimerzambrano"]
[Result "0-1"]
[WhiteElo "1811"]
[BlackElo "1854"]
[TimeControl "900+10"]
[Termination "reimerzambrano won by checkmate"]
[UTCDate "2023.10.14"]
[UTCTime "17:34:50"]
[Variant "Standard"]
[ECO "D31"]
[Opening "Queen's Gambit Declined: Queen's Knight Variation"]
[Annotator "https://lichess.org/@/stephenfoster"]

1. d4 { [%eval 0.0] } 1... d5 { [%eval 0.27] } 2. c4 { [%eval 0.29] } 2... e6 { [%eval 0.3] } 3. Nc3 { [%eval 0.39] } 3... h6 { [%eval 0.45] } 4. cxd5 { [%eval 0.44] } (4. Nf3 Nf6 5. Bf4 Bd6 6. Bxd6 Qxd6 7. e3 O-O 8. Rc1 (8. c5 Qe7 9. Be2 c6 10. b4 Nfd7 11. e4 b6 12. O-O Bb7) 8... a6) 4... exd5 { [%eval 0.37] } 5. Nf3 { [%eval 0.15] } 5... Nf6 { [%eval 0.4] } 6. g3?! { [%eval -0.28] } { Inaccuracy. Bf4 was best. } (6. Bf4 c6 (6... Bd6 7. Bxd6 Qxd6 8. e3 O-O 9. Bd3 Bg4 10. h3 Bxf3 11. Qxf3 Re8 12. O-O c6) 7. Qb3 Nh5 8. Be5 Nd7 9. e3 Be7 10. Bd3 Nhf6) 6... Bb4 { [%eval -0.06] } 7. Bg2 { [%eval -0.2] } 7... O-O { [%eval -0.25] } 8. O-O { [%eval -0.16] } 8... Bg4?! { [%eval 0.63] } { Inaccuracy. Re8 was best. } (8... Re8 9. Ne5) 9. Qb3 { [%eval 0.32] } (9. Ne5 Be6 10. Qb3 a5 11. a3 Bxc3 12. bxc3 Qc8 13. Rb1) 9... Nc6 { [%eval 0.2] } 10. Ne5 { [%eval 0.32] } 10... Bxc3 { [%eval 0.29] } 11. Nxg4 { [%eval 0.24] } 11... Bxd4 { [%eval 0.35] } 12. Nxf6+ { [%eval 0.35] } 12... Qxf6 { [%eval 0.22] } 13. e3 { [%eval 0.22] } 13... Bb6 { [%eval 0.28] } 14. Bd2?! { [%eval -0.75] } { Inaccuracy. Qxd5 was best. } (14. Qxd5 Rad8 15. Qf3 Qg6 16. Qe4 Qh5 (16... Qf6 17. Qc2 Ne5 18. Rb1 Nf3+ 19. Kh1 Qg6 20. Qxg6 fxg6 21. b3 c6 22. Rb2 g5 23. h3 Kh7 24. Re2 Rd3 25. Rc2 Rd7 26. Ba3 Rff7 27. Bb4 h5 28. g4) 17. Bf3 Qc5 18. b4 Qxb4 19. Qxb4 Nxb4 20. Bxb7 c6) 14... d4 { [%eval -0.59] } 15. e4?! { [%eval -1.21] } { Inaccuracy. Rac1 was best. } (15. Rac1) 15... Rad8 { [%eval -0.97] } 16. Rac1?! { [%eval -1.14] } 16... Rfe8 { [%eval -0.97] } 17. Kh1 { [%eval -1.02] } 17... d3 { [%eval -0.89] } 18. f4 { [%eval -0.89] } 18... Nd4?! { [%eval -0.53] } 19. Qxd3 { [%eval -0.48] } 19... Qg6?! { [%eval 0.0] } 20. Qb1?? { [%eval -4.54] } { Blunder. Rcd1 was best. } (20. Rcd1 Qe6 21. Qb1 c6 22. Be3 Rd7 23. Bg1 Red8 24. Rde1 Qg4 25. f5 Qh5 26. Bxd4 Rxd4) 20... Qg4?? { [%eval 0.0] } { Blunder. Ne2 was best. } (20... Ne2 21. Be1 Nxc1 22. Qxc1 Rxe4 23. Bc3 Re3 24. Be5 c6 25. f5 Qg4 26. Bc7 Rde8 27. Bxb6) 21. Bc3 { [%eval -0.01] } 21... Ne2 { [%eval 0.0] } 22. Bf3! { [%eval 0.0] } 22... Nxg3+?? { [%eval 3.11] } { Blunder. Nxc3 was best. } (23. Kg2 { +3.27 }) (22... Nxc3 23. bxc3 Qe6 24. Rcd1 c6 25. e5 g6 26. Kg2 Rxd1 27. Bxd1 Qc4 28. Bb3 Qe2+ 29. Kh3) 23. hxg3?? { [%eval #-1] } { Checkmate is now unavoidable. Kg2 was best. } (23. Kg2 Qxf4 24. hxg3 Qg5 25. Rcd1 Be3 26. Qc2 Bf4 27. Qf2 Be5 28. Be2 Rxd1 29. Bxd1 f6) 23... Qh3# { 0-1 Black wins. } 0-1






`


let myPuzzles = `

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "9306"]
[SetUp "1"]
[FEN "8/5b1p/5P2/p7/6P1/3R2kP/8/r4BK1 b - - 0 1"]

1...Kf4 1.Rd7 ( { +3.92 } 1.Rd7 Bc4 2.Rd4+ Ke5 3.Rxc4 Kxf6 4.Rc6+ Kg5 5.Kf2 Ra3 6.Rc5+ Kf4 7.Rf5+ Ke4 8.Bg2+ Kd4 9.Rd5+ Kc4 10.Rh5 ) ( { +0.30 } 1.Kf2 Ra2+ 2.Be2 Kg5 3.Rd6 a4 4.Ke3 Ra3+ 5.Bd3 Rb3 6.h4+ Kxh4 7.Rd7 Bg6 8.f7 Bxf7 9.Rxf7 Kxg4 10.Rf4+ ) ( { +0.22 } 1.h4 Kxg4 2.Rd7 Bg6 3.f7 Bxf7 4.Rxf7 Kxh4 5.Rxh7+ Kg3 6.Rh3+ Kg4 7.Rh6 a4 8.Kf2 a3 9.Ra6 Kf4 ) ( { +0.15 } 1.Rc3 Kg5 2.Rc6 a4 3.h4+ Kxh4 4.Rc7 Bg6 5.f7 Bxf7 6.Rxf7 Kxg4 7.Rxh7 Kg3 8.Rh3+ Kg4 9.Rc3 a3 ) ( { +0.03 } 1.Kg2 Ra2+ 2.Kh1 Ra1 3.Kg1 Ke5 4.Kf2 Kxf6 5.Rd6+ Kg5 6.Bg2 h5 7.gxh5 Bxh5 8.Rd5+ Kh6 9.Be4 a4 ) 1...Bc4 ( { -3.98 } 1...Bc4 2.Rd4+ Ke5 3.Rxc4 Kxf6 4.Rc6+ Kg7 5.Rc7+ Kg6 6.Kf2 h6 7.Bd3+ Kf6 8.Rc6+ Kg7 9.Rg6+ Kh7 10.h4 a4 11.Rd6+ ) ( { -4.91 } 1...h6 2.Rxf7 Ke5 3.Kf2 Ra4 4.Bd3 Ra2+ 5.Be2 Ra4 6.Rf8 Rf4+ 7.Ke3 Rxf6 8.Ra8 a4 9.Rxa4 Rc6 10.Ra6 Rxa6 11.Bxa6 ) ( { -4.92 } 1...Ke5 2.Rxf7 h6 3.Kf2 Ra4 4.Bd3 Ra2+ 5.Be2 Ra4 6.Rf8 Rb4 7.Ke3 a4 8.Bd3 a3 9.Ra8 Kxf6 10.Rxa3 Rb6 11.Ra5 ) ( { -4.92 } 1...Bb3 2.f7 Bxf7 3.Rxf7+ Kg5 4.Rxh7 a4 5.Kf2 Ra3 6.Ra7 Kf4 7.Be2 Rxh3 8.Rxa4+ Ke5 9.g5 Rc3 10.g6 Kf6 ) ( { -4.94 } 1...Be6 2.f7 Bxf7 3.Rxf7+ Kg5 4.Rxh7 a4 5.Kf2 Ra3 6.Ra7 Kf4 7.Be2 Rxh3 8.Rxa4+ Ke5 9.g5 Rc3 10.g6 Kf6 ) 2.Rd4+ ( { +4.10 } 2.Rd4+ Ke5 3.Rxc4 Kxf6 4.Rc6+ Kg5 5.Kf2 Ra3 6.Rc5+ Kf4 7.Rf5+ Ke4 8.Bg2+ Kd4 9.Rd5+ Kc4 10.Rh5 a4 11.Rxh7 Ra2+ ) ( { 0.00 } 2.Kh2 Rxf1 3.Rd4+ Ke3 4.Rxc4 Rxf6 5.Ra4 Ra6 6.Kg3 Kd3 7.g5 Kc3 8.h4 Kb3 9.Rf4 a4 10.Rf3+ Kc4 11.Rf4+ Kb3 ) ( { -1.44 } 2.Kg2 Bxf1+ 3.Kf2 Bxh3 4.Rxh7 Ra2+ 5.Ke1 Bxg4 6.Re7 Bh5 7.f7 Bxf7 8.Rxf7+ Ke5 9.Kd1 Ke6 10.Rb7 a4 11.Kc1 ) ( { -1.51 } 2.f7 Rxf1+ 3.Kg2 Ke3 4.Rc7 Bd3 5.Re7+ Kd2 6.h4 a4 7.h5 a3 8.g5 Bc4 9.g6 hxg6 10.hxg6 a2 11.Ra7 ) ( { -1.97 } 2.Rc7 Bxf1 3.Kf2 Bd3 4.f7 Rf1+ 5.Kg2 Ke3 6.Re7+ Kd2 7.h4 a4 8.Rd7 Rf6 9.Kg3 a3 10.g5 Rf1 11.Ra7 ) 2...Ke5 ( { -3.93 } 2...Ke5 3.Rxc4 Kxf6 4.Rc6+ Kg5 5.Kf2 Ra3 6.Rc5+ Kf4 7.Rf5+ Ke4 8.Bg2+ Kd4 9.Rd5+ Kc4 10.Rh5 a4 11.Rxh7 Ra2+ ) ( { -4.16 } 2...Kg5 3.h4+ Kxf6 4.g5+ Ke5 5.Rxc4 Kd6 6.Rd4+ Ke6 7.Kf2 a4 8.Bd3 Ke5 9.Re4+ Kd6 10.Re2 Rh1 11.Kg3 Rg1+ ) ( { -10.09 } 2...Ke3 3.Rxc4 Rd1 4.Rc8 Rd7 5.Bc4 Kf4 6.f7 Rxf7 7.Bxf7 Kg3 8.Rc3+ Kh4 9.Kg2 Kg5 10.Rc5+ Kf6 11.Bb3 h6 ) ( { -17.05 } 2...Kf3 3.Rxc4 Rb1 4.f7 Rb8 5.Bg2+ Kg3 6.g5 Rb1+ 7.Bf1 Rb8 8.Rg4+ Kf3 9.Bg2+ Ke3 10.Re4+ Kd2 11.Re8 ) ( { -23.01 } 2...Kg3 3.Rxc4 Rd1 4.f7 Rd8 5.g5 Rb8 6.Rg4+ Kf3 7.Bg2+ Ke3 8.Re4+ Kd2 9.Re8 Rb1+ 10.Kf2 Rb2 11.Re2+ Kc1 12.Rxb2 Kxb2 ) 3.Rxc4 ( { +3.91 } 3.Rxc4 Kxf6 4.h4 h6 5.Kf2 Ra3 6.Rc6+ Kg7 7.Rc7+ Kf6 8.Rh7 Kg6 9.Ra7 Ra4 10.Bd3+ Kf6 11.Kf3 Ra3 ) ( { -3.73 } 3.Rd7 Kxf6 4.Kh2 Rxf1 5.Rc7 Bd3 6.Rd7 Rd1 7.Ra7 Ra1 8.Rd7 Be4 9.Rd4 Ke5 10.Rd7 a4 11.Re7+ Kd5 ) ( { -4.47 } 3.Kg2 Bxf1+ 4.Kh2 Kxf6 5.Rf4+ Ke6 6.Re4+ Kd6 7.Re8 Ra2+ 8.Kg3 Ra3+ 9.Kf4 Bxh3 10.Rd8+ Ke6 11.Re8+ Kf7 ) ( { -4.73 } 3.Rd2 Rxf1+ 4.Kg2 Rxf6 5.Rd1 Bd5+ 6.Kg1 Rf3 7.Re1+ Kd4 8.Ra1 Rxh3 9.Rxa5 Rg3+ 10.Kh2 Rxg4 11.Ra4+ Bc4 ) ( { -4.73 } 3.Rd8 Rxf1+ 4.Kg2 Rxf6 5.Re8+ Kd4 6.Re1 Bd5+ 7.Kg1 Rf3 8.Ra1 Rxh3 9.Rxa5 Rg3+ 10.Kh2 Rxg4 11.Ra4+ Bc4 ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "10617"]
[Black "player"]
[SetUp "1"]
[FEN "6k1/7p/2Bp1qp1/4b3/P1P2r2/3P4/4Q1RP/7K w - - 0 1"]

1.Be4 Rf1+ ( { +6.08 } 1...Rf1+ 2.Rg1 Rf2 3.Qxf2 Qxf2 4.Rg2 Qf1+ 5.Rg1 Qe2 6.Rg2 Qe1+ 7.Rg1 Qd2 8.Rg2 Qd1+ 9.Rg1 Qxa4 10.Rg2 ) ( { +1.12 } 1...Bd4 2.Rg1 Bxg1 3.Kxg1 Kg7 4.Kg2 Qe5 5.h3 Rf5 6.Qe3 Kh8 7.h4 Rf4 8.Qg3 Qf6 9.Kh3 Qe6+ 10.Kh2 ) ( { +1.02 } 1...Kh8 2.d4 Bxd4 3.Bd3 Qf8 4.a5 Qa8 5.a6 Rf8 6.Qe7 Re8 7.Qh4 Bc3 8.Bf1 Rf8 9.Bd3 Bf6 10.Qh6 ) ( { +0.81 } 1...Kg7 2.d4 Bxd4 3.Bd3 Rf3 4.Rg3 Rf2 5.Qe4 Ra2 6.Rf3 Ra1+ 7.Kg2 Qg5+ 8.Rg3 Rg1+ 9.Kf3 Qh5+ 10.Qg4 Rxg3+ 11.hxg3 ) ( { 0.00 } 1...d5 2.Bxd5+ Kg7 3.Rg4 Rf2 4.Qe3 Rxh2+ 5.Kg1 h5 6.d4 hxg4 7.dxe5 Qh4 8.Qa7+ Kh6 9.Qe3+ Kh7 10.Qa7+ Kh6 ) 2.Rg1 ( { -6.82 } 2.Rg1 Rf2 3.Qxf2 Qxf2 4.Rg2 Qf1+ 5.Rg1 Qe2 6.Rg2 Qd1+ 7.Rg1 Qxa4 8.Kg2 Qc2+ 9.Kf3 Qxh2 10.Rg2 Qf4+ 11.Ke2 Bd4 ) ( { -7.14 } 2.Qxf1 Qxf1+ 3.Rg1 Qe2 4.Rg2 Qd1+ 5.Rg1 Qxa4 6.Kg2 Qc2+ 7.Kf3 Qxh2 8.Rg2 Qf4+ 9.Ke2 Bd4 10.Bd5+ Kg7 11.Kd1 h5 ) 2...Rf2 ( { +6.49 } 2...Rf2 3.Qxf2 Qxf2 4.Rg2 Qf1+ 5.Rg1 Qe2 6.Rg2 Qd1+ 7.Rg1 Qxa4 8.Kg2 Qc2+ 9.Kf3 Qxh2 10.Rg2 Qf4+ 11.Ke2 ) ( { 0.00 } 2...Rxg1+ 3.Kxg1 Qg5+ 4.Kh1 Qc1+ 5.Kg2 Qg5+ 6.Kh1 ) ( { -0.09 } 2...Qf2 3.Qxf2 Rxf2 4.Rb1 Rxh2+ 5.Kg1 Rd2 6.Kf1 Kg7 7.Rb7+ Kh6 8.Rf7 Ra2 9.Bc6 Bd4 10.Re7 Rf2+ ) ( { -0.13 } 2...Rf4 3.Bg2 Kg7 4.Rf1 Rxf1+ 5.Bxf1 Qf4 6.h3 Qc1 7.Qf2 Qa1 8.Qa7+ Kh6 9.Qf7 Qxa4 10.Be2 Qa1+ ) ( { -0.94 } 2...Ra1 3.Rxa1 Bxa1 4.a5 Bd4 5.a6 Kg7 6.Bb7 Qf4 7.Qe7+ Kh6 8.Qe1 Kg7 9.Be4 Qf2 10.Qxf2 Bxf2 ) 3.Qxf2 ( { -6.44 } 3.Qxf2 Qxf2 4.Rg2 Qf1+ 5.Rg1 Qe2 6.Rg2 Qd1+ 7.Rg1 Qxa4 8.Kg2 Qc2+ 9.Kf3 Qxh2 10.Rg2 ) ( { -7.10 } 3.Qh5 Qf4 4.Rxg6+ hxg6 5.Qxg6+ Kf8 6.Qf5+ Qxf5 7.Bxf5 Rxf5 8.Kg2 Rf4 9.a5 Rd4 10.c5 ) ( { -7.24 } 3.Bd5+ Kg7 4.Qxf2 Qxf2 5.Rg2 Qf1+ 6.Rg1 Qf4 7.Rg3 Bd4 8.Rg1 Bxg1 9.Kxg1 Qd4+ 10.Kg2 ) ( { -9.06 } 3.d4 Rxe2 4.dxe5 Qxe5 5.Bg2 Qf4 6.a5 Qxc4 7.Bf3 Rf2 8.Bg2 Kg7 9.h3 Qa2 10.a6 ) ( { mate -11 } 3.Rf1 Rxf1+ 4.Kg2 Rb1 5.Bd5+ Kg7 6.Be6 Qg5+ 7.Bg4 Qf4 8.Qd1 Qxh2+ 9.Kf3 Rxd1 10.Ke4 Qg2+ 11.Bf3 Re1+ 12.Kd5 Qxf3+ 13.Ke6 Qf7# ) 3...Qxf2 ( { +6.51 } 3...Qxf2 4.Rg2 Qf1+ 5.Rg1 Qh3 6.Rg2 Bd4 7.Rg1 Bxg1 8.Kxg1 Qd7 9.Kf2 Qxa4 10.Kg3 Kg7 11.h3 Qa5 12.Kf3 Qh5+ ) ( { -9.81 } 3...Bb2 4.Qxf6 Bxf6 5.a5 Bd4 6.a6 Kf7 7.Rb1 Kf6 8.Rb7 h5 9.a7 Bxa7 10.Rxa7 g5 11.Ra5 h4 12.Rf5+ ) ( { -9.81 } 3...Bd4 4.Qxf6 Bxf6 5.a5 Bd4 6.a6 Kf7 7.Rb1 Kf6 8.Rb7 h5 9.a7 Bxa7 10.Rxa7 g5 11.Ra5 h4 12.Rf5+ ) ( { -9.83 } 3...Bc3 4.Qxf6 Bxf6 5.a5 Bd4 6.a6 Kg7 7.Rb1 Kf6 8.Rb7 g5 9.a7 Bxa7 10.Rxa7 h5 11.Ra5 h4 12.Rf5+ ) ( { -10.13 } 3...Kg7 4.Qxf6+ Kxf6 5.a5 Bd4 6.a6 g5 7.Bxh7 Bc5 8.Rf1+ Kg7 9.Be4 Bd4 10.Bd5 Kg6 11.Rf7 Bc5 12.a7 Bxa7 13.Rxa7 ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "40439"]
[SetUp "1"]
[FEN "4r1k1/P4pbp/2R5/3p1P2/Q7/N2p2P1/r3qP1P/5RK1 b - - 0 1"]

1...Bd4 1.Qxd4 ( { +4.20 } 1.Qxd4 Rxa3 2.Qf6 h6 3.Rc7 Qh5 4.Qc6 Rf8 5.Rc8 Rxc8 6.Qxc8+ Kg7 7.a8=Q Rxa8 ) ( { -3.94 } 1.Rg6+ hxg6 2.Qxd4 Rxa3 3.fxg6 Qe4 4.gxf7+ Kxf7 5.Qb6 Re7 6.Qh6 Raxa7 7.Qh5+ Kg8 ) ( { -7.44 } 1.Qd1 Bxf2+ 2.Kg2 Be1+ 3.Qxe2 Raxe2+ 4.Kh3 d2 5.Nb5 d1=Q 6.Nc3 Rxh2+ 7.Kxh2 Qc2+ 8.Kh3 Bxc3 ) ( { -9.15 } 1.Rc2 dxc2 2.Qxd4 Rxa3 3.Qf4 Qxf1+ 4.Kxf1 Ra1+ 5.Kg2 c1=Q 6.Qg4+ Kh8 7.Qd4+ f6 ) ( { -13.58 } 1.Nc2 Rxa4 2.Nxd4 Qxf1+ 3.Kxf1 d2 4.Kg2 d1=Q 5.Nc2 d4 6.Rc7 Ra2 7.h4 Rxc2 ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "43868"]
[Black "player"]
[SetUp "1"]
[FEN "5rk1/1R3pb1/3Qp3/4P1p1/5q2/5N1K/5PP1/8 w - - 0 1"]

1.Rb4 g4+ ( { +6.62 } 1...g4+ 2.Kh4 Bf6+ 3.exf6 Qxd6 4.Rxg4+ Kh7 5.Kh3 Qd3 6.Kh2 Qf5 7.Kg3 Rg8 8.Rxg8 Kxg8 9.Nh2 Qxf6 ) ( { -0.21 } 1...Bxe5 2.Nxe5 g4+ 3.Kh4 Qxf2+ 4.Kxg4 Qxg2+ 5.Kf4 Qf2+ 6.Nf3 Rc8 7.Rb8 Qc2 8.Rxc8+ Qxc8 9.Nd4 Qc1+ ) ( { -0.76 } 1...Qf5+ 2.Rg4 Ra8 3.Qd2 Bh6 4.Nxg5 Bxg5 5.Qxg5+ Qxg5 6.Rxg5+ Kf8 7.Rh5 Ra2 8.Kg3 Ke7 9.Kf3 Ra3+ ) ( { -1.17 } 1...Qc1 2.Rg4 Rc8 3.Nxg5 Qc3+ 4.Nf3 Qc7 5.Qb4 Qc2 6.Qf4 Qh7+ 7.Kg3 Kf8 8.Qb4+ Kg8 9.Qb7 Qc2 ) ( { -6.32 } 1...Qxb4 2.Qxb4 Bh6 3.Kg4 Rc8 4.Kh5 Bf8 5.Qd2 Rc5 6.Qxg5+ Bg7 7.Qf4 Rc7 8.Ng5 Ra7 9.Kg4 Bf8 ) 2.Kh4 ( { -6.77 } 2.Kh4 Bf6+ 3.exf6 Qxd6 4.Rxg4+ Kh7 5.Kh3 Qd3 6.Kh2 Qf5 7.Kg3 Rg8 8.Rxg8 Kxg8 9.Nh2 Qxf6 10.Ng4 Qd4 11.Ne3 ) 2...Bf6+ ( { +6.68 } 2...Bf6+ 3.exf6 Qxd6 4.Rxg4+ Kh7 5.Ng5+ Kh8 6.Kh3 Qd3+ 7.Kh2 Qf5 8.Rh4+ Kg8 9.Ne4 Rc8 10.Kg1 Rc1+ ) ( { -0.21 } 2...Bxe5 3.Nxe5 Qxf2+ 4.Kxg4 Qxg2+ 5.Kf4 Qf2+ 6.Nf3 Rc8 7.Qd3 Qc2 8.Qd4 Qc5 9.Rb7 Qxd4+ 10.Nxd4 ) ( { -1.08 } 2...Qh6+ 3.Kxg4 Kh8 4.Kg3 Rg8 5.Rg4 Bf8 6.Qd8 Rxg4+ 7.Kxg4 Qg6+ 8.Qg5 Qe4+ 9.Kg3 Qd3 10.Qh4+ Kg8 11.Qd4 Qg6+ 12.Qg4 Qxg4+ ) ( { -1.20 } 2...Qf5 3.Rxg4 Rc8 4.Kg3 Kh8 5.Qd4 Bh6 6.Qe4 Qxe4 7.Rxe4 Kg7 8.Ra4 Rc7 9.Ra8 Kg6 10.Nd4 ) ( { -1.27 } 2...Qc1 3.Rxg4 Rc8 4.Qe7 Qh1+ 5.Kg3 Qh5 6.Qd7 Ra8 7.Qd3 Re8 8.Rg5 Qh1 9.Qd7 Ra8 10.Qe7 ) 3.exf6 ( { -6.74 } 3.exf6 Qxd6 4.Rxg4+ Kh7 5.Kh5 Rg8 6.Rxg8 Kxg8 7.Kg4 Qb4+ 8.Kg3 Qc5 9.Nh2 Qc3+ ) ( { -19.37 } 3.Ng5 Qxg5+ 4.Kg3 Qh4+ 5.Kf4 Bg5+ 6.Ke4 Qxf2 7.Qxf8+ Kxf8 8.Rb8+ Kg7 9.Kd3 ) ( { mate -2 } 3.Kh5 Qf5+ 4.Kh6 Qg6# ) 3...Qxd6 ( { +6.78 } 3...Qxd6 4.Rxg4+ Kh7 5.Kh3 Qd3 6.Kh4 Qf5 7.Ng5+ Kh8 8.Ne4 Rg8 9.Rxg8+ Kxg8 10.f3 Qf4+ 11.Kh3 e5 ) ( { -4.97 } 3...Qxf6+ 4.Kg3 gxf3 5.Rg4+ Qg7 6.Rxg7+ Kxg7 7.Kxf3 Ra8 8.Qe5+ Kg8 9.g4 Ra3+ 10.Kf4 Rd3 11.Qg5+ ) ( { -8.85 } 3...Qh6+ 4.Kxg4 Qxf6 5.Kh3 Ra8 6.Rg4+ Kh8 7.Qh2 Qf5 8.Kg3+ Qh7 9.Rh4 Rg8+ 10.Kf4 Rg7 11.Ke3 Qxh4 12.Qxh4+ ) ( { mate -6 } 3...Qxb4 4.Qxb4 Ra8 5.Ng5 Rc8 6.Qxg4 Kf8 7.Nxe6+ fxe6 8.Qg7+ Ke8 9.Qe7# ) ( { mate -5 } 3...Kh7 4.Qxf4 Rg8 5.Qe5 Rg6 6.Qh5+ Rh6 7.Ng5+ Kg8 8.Rb8# ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "47816"]
[SetUp "1"]
[FEN "r1b2k1r/1pb2ppp/4p3/p1qn4/5B2/P3N3/1P1Q1PPP/2R1KB1R b K - 0 1"]

1...Qe7 1.Rxc7 ( { +4.84 } 1.Rxc7 Bd7 2.Nxd5 exd5+ 3.Be2 Re8 4.Be3 Qd8 5.Rxb7 Bc6 6.Ra7 d4 7.Qxd4 Qxd4 8.Bxd4 a4 9.f4 ) ( { +0.77 } 1.Bxc7 Nxc7 2.Be2 Nd5 3.O-O g6 4.Nxd5 exd5 5.Bf3 Be6 6.Bxd5 Bxd5 7.Qxd5 Kg7 8.Rfe1 Rhc8 9.Rcd1 ) ( { +0.22 } 1.Nxd5 exd5+ 2.Be3 Kg8 3.Be2 Be5 4.O-O Bd7 5.Qxd5 Bc6 6.Qd2 h6 7.Rfd1 Qf6 8.Bd4 Re8 9.Bxe5 ) ( { -0.10 } 1.Bg3 Bxg3 2.fxg3 Bd7 3.Be2 Bc6 4.Nxd5 Bxd5 5.O-O f6 6.Qd4 Kg8 7.Qb6 Bc6 8.Bf3 Bxf3 ) ( { -1.07 } 1.Bg5 Qxg5 2.Nxd5 Qxd2+ 3.Kxd2 Bd6 4.Nb6 Bf4+ 5.Kc2 Bxc1 6.Nxa8 Bf4 7.Nb6 Ke7 8.Bb5 Bc7 ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "50200"]
[SetUp "1"]
[FEN "1r3r1k/p3qp2/7p/2p4Q/2Pp4/P2BR3/1P4PP/1R5K b - - 0 1"]

1...Qxe3 1.Qf5 ( { +6.24 } 1.Qf5 Kg7 2.Rf1 Qxd3 3.Qxd3 Rxb2 4.Qf5 Rd2 5.Qxc5 f5 6.Qa5 Rd3 7.Qxa7+ Rf7 8.Qc5 Kg8 9.Kg1 f4 ) ( { -2.23 } 1.Bf1 Qg5 2.Qd1 Rfe8 3.b4 Re3 4.Rc1 Rxa3 5.bxc5 Qxc5 6.Qd2 Re3 7.Rd1 Kg8 8.Qxd4 Qxd4 9.Rxd4 ) ( { -2.30 } 1.Qd1 a5 2.Qf1 f5 3.Re1 Qd2 4.Rd1 Qxb2 5.Qf4 Rf6 6.Qe5 Qb6 7.Bxf5 Qd6 8.Qe4 Rb2 9.Qe8+ ) ( { -2.36 } 1.Rd1 Qg5 2.Qe2 Rb3 3.Qe4 f5 4.Qe5+ Kg8 5.Qe6+ Kh7 6.Qe2 Qe3 7.Qc2 Rfb8 8.Bf1 Kg6 9.Bd3 Rxd3 ) ( { -3.10 } 1.Be2 d3 2.Bf1 Rb3 3.Re1 Qg5 4.Qxg5 hxg5 5.Rd1 Rd8 6.Rd2 Kg7 7.Kg1 f5 8.Kf2 Rd4 9.g3 ) 1...Kg7 ( { -6.23 } 1...Kg7 2.Rf1 Qxd3 3.Qxd3 Rxb2 4.Qf5 Kg8 5.Qxc5 d3 6.Qxa7 d2 7.c5 f5 8.c6 Rc2 9.Qe3 Kh7 10.Qe7+ ) ( { -6.70 } 1...Qxd3 2.Qxd3 Rb6 3.b4 Rd8 4.Rf1 Rd7 5.Qf5 Re6 6.Qxc5 Kg7 7.Qb5 Ree7 8.c5 d3 9.c6 Rd8 10.Qa5 ) ( { mate -4 } 1...Qc1+ 2.Rxc1 Kg7 3.Rf1 Rg8 4.Qxf7+ Kh8 5.Qh7# ) ( { mate -4 } 1...Qe4 2.Bxe4 Kg7 3.Rf1 Rfd8 4.Qxf7+ Kh8 5.Qh7# ) ( { mate -4 } 1...Qg1+ 2.Rxg1 Kg7 3.Rf1 Rg8 4.Qxf7+ Kh8 5.Qh7# ) 2.Rf1 ( { +6.28 } 2.Rf1 Qxd3 3.Qxd3 Rxb2 4.Qg3+ Kh7 5.Qe5 Kg8 6.Qxc5 d3 7.Qxa7 f5 8.Qd4 Rb3 9.c5 Rf7 ) ( { +0.74 } 2.Qh7+ Kf6 3.Rf1+ Ke7 4.Qf5 Qg5 5.Qe4+ Kd7 6.Rf5 Qc1+ 7.Bf1 Rb6 8.b4 Qe3 9.Qd5+ ) ( { 0.00 } 2.Rd1 Rg8 3.Rf1 Rb7 4.Qf6+ Kf8 5.Qd8+ Kg7 6.Qf6+ ) ( { 0.00 } 2.b3 Rg8 3.Rf1 Rb7 4.Qf6+ Kf8 5.Qd8+ Kg7 6.Qf6+ ) ( { 0.00 } 2.b4 Rg8 3.Rf1 Rb7 4.Qf6+ Kf8 5.bxc5 Qxd3 6.Qxh6+ Rg7 7.Qd6+ Kg8 8.Qd8+ Kh7 9.Qh4+ Kg8 10.Qd8+ ) 2...Qxd3 ( { -6.76 } 2...Qxd3 3.Qxd3 Rxb2 4.Qg3+ Kh7 5.Qc7 Kg8 6.Qxc5 Rfb8 7.Qxd4 Rb1 8.Kg1 Rxf1+ 9.Kxf1 Rb1+ 10.Ke2 Rb6 11.c5 ) ( { mate -3 } 2...Qe4 3.Bxe4 Rfe8 4.Qxf7+ Kh8 5.Qh7# ) ( { mate -3 } 2...Qf2 3.Rxf2 Rg8 4.Qxf7+ Kh8 5.Qh7# ) ( { mate -3 } 2...Qf3 3.Rxf3 Rfc8 4.Qxf7+ Kh8 5.Qh7# ) ( { mate -3 } 2...Qf4 3.Rxf4 Rg8 4.Qxf7+ Kh8 5.Qh7# ) 3.Qxd3 ( { +6.67 } 3.Qxd3 Rxb2 4.Qg3+ Kh7 5.Qc7 Kg7 6.Qxc5 Rd2 7.Qe5+ f6 8.Qg3+ Kh7 9.Qe1 Rb2 10.Qe4+ f5 ) ( { -7.07 } 3.Qf6+ Kh7 4.b4 cxb4 5.axb4 Rxb4 6.h3 Rxc4 7.Rf3 Qg6 8.Qf4 Rc2 9.Rg3 Rc1+ 10.Qxc1 Qxg3 ) ( { -7.18 } 3.Qf4 Rxb2 4.h3 Qxc4 5.Qf6+ Kh7 6.Qf5+ Kg8 7.Rf3 Rfb8 8.Rg3+ Kf8 9.Kh2 a5 10.Qe5 R8b6 ) ( { -7.70 } 3.Qg4+ Kh7 4.Rd1 Qc2 5.Rg1 Rxb2 6.Qf4 Qg6 7.Qe5 Rg8 8.Qd5 Re8 9.h3 Ree2 10.Kh2 d3 ) ( { -7.76 } 3.Qe5+ Kh7 4.Qf4 Rxb2 5.h4 Rg8 6.Qxf7+ Rg7 7.Qf3 Qxf3 8.gxf3 Rgg2 9.Rd1 Rgf2 10.Re1 Rxf3 ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "53570"]
[SetUp "1"]
[FEN "6rk/6pp/3Q4/1qp2pN1/8/3n4/5PPP/5RK1 b - - 0 1"]

1...h6 1.Qg6 ( { mate 2 } 1.Qg6 hxg5 2.Qh5# ) ( { 0.00 } 1.Nf7+ Kh7 2.Qd5 Rb8 3.Qxf5+ Kg8 4.Rd1 c4 5.Qg6 Rb6 6.Nxh6+ Kh8 7.Nf7+ Kg8 8.Nh6+ ) ( { -0.14 } 1.Rd1 hxg5 2.Rxd3 Qb1+ 3.Rd1 Qc2 4.Re1 Ra8 5.Qg6 Qe2 6.Rf1 Qg4 7.Qc6 Ra5 8.Re1 Kh7 9.Qc7 Qb4 ) ( { -0.98 } 1.Ne6 c4 2.Nd4 Qb4 3.Qc6 f4 4.Ne6 Qc3 5.Qe4 Re8 6.Qc6 Rb8 7.Qc7 Rb2 8.Qc8+ Kh7 9.Nf8+ ) ( { -1.39 } 1.Nf3 Re8 2.h3 c4 3.Nd4 Qe5 4.Qd7 f4 5.Qf7 Rc8 6.Qd7 Rf8 7.Rd1 Rb8 8.Ne6 f3 9.gxf3 ) 1...hxg5 ( { mate -1 } 1...hxg5 2.Qh5# ) ( { mate -1 } 1...Nb2 2.Qh7# ) ( { mate -1 } 1...Nb4 2.Qh7# ) ( { mate -1 } 1...Nc1 2.Qh7# ) ( { mate -1 } 1...Ne1 2.Qh7# ) 2.Qh5# ( { mate 1 } 2.Qh5# ) ( { -3.07 } 2.Qxf5 Nf4 3.g3 Ne2+ 4.Kg2 Qc6+ 5.f3 Re8 6.Qxg5 Nd4 7.Rf2 Kg8 8.Qg4 Re3 9.Qf4 Ra3 10.Qb8+ Kh7 ) ( { -4.04 } 2.h4 Rf8 3.Qd6 Kg8 4.hxg5 c4 5.Qd4 Qc6 6.f3 Rc8 7.Ra1 Qc5 8.Qxc5 Nxc5 9.Ra3 Kf7 10.Kf1 Kg6 ) ( { -4.15 } 2.Qf7 g6 3.Qf6+ Kh7 4.Qxg5 Re8 5.h4 Qb4 6.Kh2 Re2 7.h5 Qf4+ 8.Qxf4 Nxf4 9.hxg6+ Kxg6 10.Kg3 ) ( { -4.31 } 2.Qxg5 Rf8 3.Qh4+ Kg8 4.h3 c4 5.Qd4 Rc8 6.Qe3 Re8 7.Qd4 Re4 8.Qd8+ Kf7 9.Qd6 Qc5 10.Qxc5 Nxc5 ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "55035"]
[Black "player"]
[SetUp "1"]
[FEN "2rq2k1/1Q3pp1/5n1p/p3nP2/1p1p4/1B5P/PP3PP1/4R1K1 w - - 0 1"]

1.Rxe5 Rc1+ ( { +7.07 } 1...Rc1+ 2.Kh2 Ng4+ 3.Kg3 Nxe5 4.Qe4 Nc4 5.Qf4 Qg5+ 6.Qxg5 hxg5 7.Bxc4 Rxc4 8.Kf3 Rc2 9.b3 d3 ) ( { +1.25 } 1...Rc7 2.Qf3 d3 3.Kh2 Rd7 4.g3 d2 5.Bd1 Re7 6.Qe3 Rxe5 7.Qxe5 Kh7 8.Kg2 Qa8+ 9.f3 Qd8 ) ( { +0.52 } 1...Kh8 2.g3 d3 3.Kg2 Rc7 4.Qb6 Qa8+ 5.f3 Qc8 6.Re1 Rc1 7.Rxc1 Qxc1 8.Qd4 Kg8 9.Qxd3 Qxb2+ ) ( { +0.40 } 1...Kh7 2.Re7 Rc1+ 3.Kh2 Rf1 4.g4 Rxf2+ 5.Kg3 Rd2 6.Bxf7 Kh8 7.Qc7 Qf8 8.b3 Rxa2 9.Bc4 ) ( { -0.28 } 1...Nd7 2.Rd5 Rc7 3.Qb5 Qh4 4.Bc4 Nf8 5.b3 Qf4 6.g3 Qd2 7.Qxa5 Re7 8.Re5 Rxe5 9.Qxe5 ) 2.Kh2 ( { -6.72 } 2.Kh2 Ng4+ 3.Kg3 Nxe5 4.Qe4 Nc4 5.Qf4 Qg5+ 6.Qxg5 hxg5 7.Bxc4 Rxc4 8.Kf3 Rc2 9.b3 d3 10.Ke3 ) ( { -10.15 } 2.Re1 Rxe1+ 3.Kh2 Kh7 4.Qf3 d3 5.g4 d2 6.Kg2 d1=Q 7.Bxd1 Rxd1 8.a3 Rd2 9.axb4 axb4 ) ( { -17.15 } 2.Bd1 Rxd1+ 3.Kh2 Ng4+ 4.Kg3 Nxe5 5.Qe4 d3 6.Qxe5 Rc1 7.Qf4 d2 8.b3 d1=Q 9.h4 Ra1 ) 2...Ng4+ ( { +6.85 } 2...Ng4+ 3.Kg3 Nxe5 4.Qe4 Nc4 5.Qf4 Qg5+ 6.Qxg5 hxg5 7.Bxc4 Rxc4 8.Kf3 Rc2 9.b3 Rxa2 10.Ke4 ) ( { +0.52 } 2...Rc7 3.Qf3 Ra7 4.Kg1 d3 5.Qe3 Rd7 6.Qd2 Rd6 7.f4 Rd4 8.Bd1 Nd5 9.g3 Qd7 10.Bf3 ) ( { +0.40 } 2...Kh7 3.Re7 Rf1 4.f4 Qd6 5.Qc7 Qxf4+ 6.Qxf4 Rxf4 7.Kg3 Nh5+ 8.Kh2 d3 9.Bxf7 Rxf5 10.Bxh5 Rxh5 ) ( { 0.00 } 2...Kh8 3.Re7 d3 4.Rxf7 Ng4+ 5.Kg3 Nf6 6.Kh2 ) ( { -0.70 } 2...Qc7 3.Qxc7 Rxc7 4.Rxa5 Kf8 5.Rb5 d3 6.Kg3 Rc2 7.Rb8+ Ke7 8.Rb7+ Kd6 9.Rxb4 Rxb2 10.Rd4+ ) 3.Kg3 ( { -7.95 } 3.Kg3 Nxe5 4.Qe4 Nc4 5.Qf4 Qg5+ 6.Qxg5 hxg5 7.Bxc4 Rxc4 8.Kf3 Rc2 9.b3 Rxa2 10.Ke4 Rxf2 11.Kxd4 Rxg2 ) ( { mate -1 } 3.hxg4 Qh4# ) 3...Nxe5 ( { +7.95 } 3...Nxe5 4.Qe4 Nc4 5.Qf4 Qg5+ 6.Qxg5 hxg5 7.Bxc4 Rxc4 8.Kf3 Rc2 9.b3 Rxa2 10.Ke4 Rxf2 11.Kxd4 ) ( { -0.60 } 3...Rc3+ 4.bxc3 Nxe5 5.Qe4 Nc4 6.cxd4 Nd2 7.Qe5 Qg5+ 8.Kh2 Nf1+ 9.Kg1 Qc1 10.Qc5 Qe1 11.Bxf7+ Kxf7 ) ( { -3.12 } 3...Nf6 4.Qxf7+ Kh8 5.Re7 Qd6+ 6.Kf3 Qc6+ 7.Ke2 Qxg2 8.Qf8+ Kh7 9.Qxf6 d3+ 10.Kxd3 Qf3+ ) ( { -4.29 } 3...Rc7 4.Rd5 Qe7 5.Qb8+ Kh7 6.hxg4 Rb7 7.f6 gxf6 8.Qf4 Qc7 9.Rxd4 Qxf4+ 10.Kxf4 Re7 ) ( { -4.35 } 3...Kh7 4.hxg4 Rc7 5.Rd5 Qe7 6.Qb8 Rb7 7.f6 gxf6 8.Qf4 Qc7 9.Rxd4 Qxf4+ 10.Kxf4 Re7 ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "62177"]
[SetUp "1"]
[FEN "7r/Rk3pp1/4p2p/3q2b1/1P1r1n2/7P/1PQ2P2/4R1K1 b - - 0 1"]

1...Kxa7 1.Qc7+ ( { mate 4 } 1.Qc7+ Ka6 2.Ra1+ Kb5 3.Ra5+ Kxb4 4.Qc3# ) ( { -15.01 } 1.Qc5+ Kb7 2.Qxd5+ exd5 3.Kh2 Rxb4 4.Rb1 Rb3 5.Ra1 Nxh3 6.Rd1 Nf4 7.Rb1 ) ( { mate -8 } 1.f3 Rc8 2.Ra1+ Kb8 3.Qf2 Nxh3+ 4.Kh2 Nxf2 5.Ra7 Rh4+ 6.Kg1 Nh3+ 7.Kg2 Qd2+ 8.Kg3 Qf2# ) ( { mate -7 } 1.Ra1+ Kb8 2.f3 Qxf3 3.Kh2 Rd3 4.Ra8+ Qxa8 5.b3 Rxh3+ 6.Kg1 Qh1+ 7.Kf2 Bh4# ) ( { mate -7 } 1.Re4 Rxe4 2.Qc7+ Ka8 3.Qa5+ Qxa5 4.bxa5 Rd8 5.h4 Rd3 6.hxg5 Re1+ 7.Kh2 Rh3# ) 1...Ka6 ( { mate -3 } 1...Ka6 2.Ra1+ Kb5 3.Ra5+ Kxb4 4.Qc3# ) ( { mate -2 } 1...Ka8 2.Ra1+ Qa5 3.Rxa5# ) ( { mate -1 } 1...Qb7 2.Ra1# ) 2.Ra1+ ( { mate 3 } 2.Ra1+ Kb5 3.Ra5+ Kxb4 4.Qc3# ) ( { -16.16 } 2.Qa5+ Qxa5 3.bxa5 Nxh3+ 4.Kg2 Nf4+ 5.Kg1 Rc8 6.Rf1 Rc2 7.b4 Rxb4 8.Kh1 Kxa5 9.Kg1 ) ( { -16.37 } 2.b5+ Kxb5 3.Qe5 Nxh3+ 4.Kf1 Rd2 5.Qxd5+ exd5 6.Kg2 Nxf2 7.Rf1 Ne4+ 8.Kh3 Bf6 ) ( { mate -7 } 2.Qd6+ Qxd6 3.Ra1+ Kb7 4.Kh2 Ng6+ 5.Kh1 Rd1+ 6.Rxd1 Qxd1+ 7.Kh2 Bf4+ 8.Kg2 Nh4# ) ( { mate -7 } 2.Qxf4 Bxf4 3.b5+ Kb7 4.Rb1 Rd1+ 5.Rxd1 Qxd1+ 6.Kg2 Rc8 7.b3 Rc1 8.f3 Qd2# ) 2...Kb5 ( { mate -2 } 2...Kb5 3.Ra5+ Kxb4 4.Qc3# ) ( { mate -2 } 2...Qa2 3.Rxa2+ Kb5 4.Qc5# ) ( { mate -1 } 2...Qa5 3.Rxa5# ) 3.Ra5+ ( { mate 2 } 3.Ra5+ Kxb4 4.Qc3# ) ( { -14.12 } 3.Qa5+ Kc6 4.Qa6+ Kd7 5.Qa7+ Kd6 6.Qc5+ Qxc5 7.bxc5+ Kxc5 8.Ra7 Nxh3+ 9.Kh2 Nxf2 10.Rc7+ Kb6 11.Rxf7 Rf4 12.Rxf4 ) ( { -16.09 } 3.Qc5+ Qxc5 4.bxc5 Nxh3+ 5.Kg2 Nf4+ 6.Kg1 Rhd8 7.Kh2 Rd2 8.Rf1 Rxb2 9.Kh1 Kxc5 ) ( { mate -8 } 3.Qe5 Rd1+ 4.Rxd1 Qxe5 5.Ra1 Qe4 6.Ra5+ Kxb4 7.Ra4+ Kxa4 8.b3+ Kxb3 9.f3 Qxf3 10.Kh2 Qg2# ) ( { mate -7 } 3.Qb8+ Rxb8 4.Ra5+ Kxb4 5.Rxd5 Rxd5 6.Kh2 Rd3 7.Kg1 Ra8 8.f3 Rd2 9.b3 Ra1# ) 3...Kxb4 ( { mate -1 } 3...Kxb4 4.Qc3# ) 4.Qc3# ( { mate 1 } 4.Qc3# ) ( { -7.76 } 4.Rxd5 exd5 5.Qxf7 Bf6 6.Qb7+ Kc4 7.Kh2 Re4 8.Kg3 Rhe8 9.Qb6 R8e6 10.Qb7 g6 11.b3+ ) ( { -8.54 } 4.Qb6+ Kc4 5.Qa6+ Kb3 6.Rxd5 exd5 7.Kh2 Rd3 8.h4 Kxb2 9.Qb6+ Kc2 10.Qa6 Rh3+ 11.Kg1 ) ( { mate -8 } 4.Qxf4 Kxa5 5.Qc7+ Kb5 6.Qc2 Rd1+ 7.Qxd1 Qxd1+ 8.Kg2 Bf4 9.h4 Rd8 10.f3 Qe2+ 11.Kh3 Qxf3# ) ( { mate -7 } 4.Qc5+ Qxc5 5.Rxc5 Kxc5 6.Kh1 Rd1+ 7.Kh2 Bh4 8.b4+ Kb6 9.f3 Rc8 10.b5 Rc2# ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "60908"]
[SetUp "1"]
[FEN "4r3/p2Q2k1/1p4qp/6N1/7P/1P4P1/P4PK1/8 b - - 0 1"]

1...Kg8 1.h5 ( { +3.29 } 1.h5 Qxg5 2.Qxe8+ Kg7 3.Qd7+ Kf6 4.Qxa7 Qd5+ 5.f3 Qd2+ 6.Kh3 Qe3 7.Qb8 Qe6+ 8.Kh4 Kf7 ) ( { +0.33 } 1.Nh3 Qe6 2.Qd2 Rc8 3.Kh2 Qf6 4.Qd3 Rd8 5.Qe2 Qf5 6.Nf4 Kh8 7.Kg2 Rg8 8.Qc4 Rg7 ) ( { +0.24 } 1.Qd5+ Kg7 2.Nf3 Qe4 3.Qd4+ Kg8 4.a4 Qxd4 5.Nxd4 Rd8 6.Nc6 Rd3 7.Nxa7 Rxb3 8.Nc6 ) ( { +0.13 } 1.Nf3 Qe4 2.Qd4 Qxd4 3.Nxd4 Rd8 4.Nc6 Rd2 5.Nxa7 Rxa2 6.Nc8 b5 7.Nd6 b4 8.Kf3 ) ( { -2.63 } 1.a3 hxg5 2.Qd5+ Kg7 3.hxg5 Qf7 4.Qd4+ Kg6 5.f4 Qf5 6.b4 Re6 7.Qd2 Qe4+ 8.Kf2 ) 1...Qxg5 ( { -3.31 } 1...Qxg5 2.Qxe8+ Kg7 3.Qd7+ Kf6 4.Qxa7 Qd5+ 5.f3 Qd2+ 6.Kh3 Qe3 7.Qb8 Qe6+ 8.Kh4 Kf7 9.Qc7+ Kf8 10.f4 Kg8 11.Qe5 Qxe5 ) ( { -6.78 } 1...Qxh5 2.Qd5+ Kg7 3.Ne6+ Rxe6 4.Qxh5 a5 5.f4 Kf8 6.Qf5+ Ke7 7.Kf3 Rd6 8.Qe4+ Kd8 9.g4 ) ( { -7.72 } 1...Qf6 2.Qxe8+ Kg7 3.Qd7+ Kg8 4.Qd5+ Kg7 5.Qb7+ Kg8 6.Qa8+ Qf8 7.Qd5+ Kh8 8.Qe5+ Qg7 9.Qb8+ Qg8 10.Nf7+ Kg7 11.Qxg8+ ) ( { -9.87 } 1...Re7 2.Qd5+ Qf7 3.Nxf7 Rxf7 4.Qe6 b5 5.Qxh6 b4 6.Qg5+ Kh8 7.Qb5 Kg7 8.Qxb4 Kh6 ) ( { mate -10 } 1...Qg7 2.Qxe8+ Qf8 3.Qg6+ Qg7 4.Ne6 Qxg6 5.hxg6 a5 6.f4 Kh8 7.f5 h5 8.f6 h4 9.f7 h3+ 10.Kxh3 a4 11.f8=Q# ) 2.Qxe8+ ( { +3.35 } 2.Qxe8+ Kg7 3.Qd7+ Kg8 4.Qxa7 b5 5.Qb8+ Kf7 6.Qc7+ Ke6 7.Qc6+ Ke7 8.Qe4+ Kd8 9.Qd4+ Kc8 ) ( { -4.04 } 2.g4 Rd8 3.Qe6+ Kg7 4.Kg3 Rd4 5.Kh3 Rd2 6.Kg2 Rxa2 7.Qd7+ Kf8 8.Qc8+ Kf7 9.Qc4+ ) ( { -4.19 } 2.Qd1 Rd8 3.Qe1 Rd2 4.Kg1 Rxa2 5.Qe8+ Kh7 6.Qe4+ Kg7 7.Qb7+ Kg8 8.Qc8+ Kh7 9.Qd7+ ) ( { -4.27 } 2.Qb7 Qxh5 3.Qc6 Re2 4.Qc8+ Qe8 5.Qg4+ Kh8 6.Qd4+ Kh7 7.Qd3+ Kg7 8.Qd4+ Kf7 9.Qf4+ ) ( { -4.27 } 2.Qd6 Qxh5 3.Qd3 Qf7 4.b4 Rf8 5.Kh3 h5 6.a4 Qe6+ 7.Kg2 Kg7 8.Qd4+ Kh7 9.Qd3+ ) *

---

[Result "*"]
[Event "CT Problem"]
[Site "Chesstempo.com"]
[Date "????.??.??"]
[Round "-"]
[White "player"]
[Black "99153697"]
[SetUp "1"]
[FEN "5k2/3b4/R5K1/R7/p4r1P/8/8/8 b - - 0 1"]

1...Rxh4 1.Rf6+ ( { +4.35 } 1.Rf6+ Ke8 2.Ra8+ Ke7 3.Rf7+ Kd6 4.Ra6+ Kc5 5.Rxd7 Kb4 6.Rb6+ Ka3 7.Kf5 Rc4 8.Rd3+ Ka2 9.Ke5 Rc5+ 10.Ke4 Rh5 ) ( { +0.16 } 1.Ra7 Be8+ 2.Kf6 Rh6+ 3.Ke5 Rh5+ 4.Kd4 Rh4+ 5.Ke3 Rh3+ 6.Kf2 Rh2+ 7.Kg3 Rd2 8.Rf5+ Kg8 9.Rc5 Rd7 10.Rxd7 Bxd7 ) ( { +0.14 } 1.Rd5 Rg4+ 2.Kf6 Rf4+ 3.Ke5 Rf5+ 4.Kd4 Rf7 5.Kc5 Kg7 6.Rg5+ Kh7 7.Ra8 Rf4 8.Rd5 Rf7 9.Kd6 Kg7 10.Rg5+ ) ( { +0.14 } 1.Kf6 Rh6+ 2.Ke5 Rh7 3.Ra7 Ke8 4.Rd5 Re7+ 5.Kd6 Re6+ 6.Kc5 Re7 7.Rd4 Re5+ 8.Kb4 Re7 9.Rh4 Rf7 10.Re4+ ) ( { +0.14 } 1.Kg5 Rh2 2.Ra7 Rg2+ 3.Kf6 Rf2+ 4.Ke5 Ke8 5.Rd5 Rf5+ 6.Kd6 Rf6+ 7.Kc5 Rf7 8.Rd4 Rf5+ 9.Kb4 Rf7 10.Rb7 ) 1...Ke7 ( { -5.16 } 1...Ke7 2.Rf7+ Kd6 3.Ra6+ Kc5 4.Rxd7 Kb4 5.Rb6+ Kc3 6.Rd1 Rg4+ 7.Kf5 Rg8 8.Rc1+ Kd2 9.Ra1 Rf8+ 10.Ke5 Re8+ 11.Kd4 Rd8+ 12.Kc5 ) ( { -5.16 } 1...Ke8 2.Ra8+ Ke7 3.Rf7+ Kd6 4.Ra6+ Kc5 5.Rxd7 Kb4 6.Rb6+ Kc3 7.Rd1 Rg4+ 8.Kf5 Rg8 9.Rc1+ Kd2 10.Ra1 Rf8+ 11.Ke5 Re8+ 12.Kd4 Rd8+ ) ( { mate -2 } 1...Kg8 2.Ra8+ Be8+ 3.Rxe8# ) 2.Rf7+ ( { +5.06 } 2.Rf7+ Kd6 3.Ra6+ Kc5 4.Rxd7 Kb4 5.Rb6+ Kc3 6.Rd1 Rg4+ 7.Kf5 Rg8 8.Rc1+ Kd2 9.Ra1 Rf8+ 10.Ke5 Re8+ ) ( { +0.08 } 2.Re5+ Kd8 3.Rd5 Rg4+ 4.Kh5 Rc4 5.Rf3 Rc7 6.Kg5 Ra7 7.Ra3 Kc7 8.Rc3+ Bc6 9.Rf5 Kb6 10.Rf6 Rc7 ) ( { +0.05 } 2.Rfa6 Rg4+ 3.Rg5 Be8+ 4.Kh6 Rh4+ 5.Kg7 Re4 6.Rg3 Bb5 7.Rb6 Re5 8.Rb7+ Ke6 9.Rg6+ Kf5 10.Rc7 Ke4 ) ( { +0.04 } 2.Kg7 Rh7+ 3.Kxh7 Kxf6 4.Kh6 Be8 5.Ra7 Ke6 6.Ra8 Bd7 7.Kg5 Kd5 8.Kf4 Bb5 9.Ke3 Bc6 10.Ra7 Kc5 ) ( { +0.04 } 2.Raa6 Rg4+ 3.Kh5 Re4 4.Rfb6 Be6 5.Ra5 Kf7 6.Rba6 Bd7 7.Ra7 Rd4 8.Rf5+ Ke7 9.Kg6 Rg4+ 10.Rg5 ) 2...Kd6 ( { -5.14 } 2...Kd6 3.Ra6+ Kc5 4.Rxd7 Kb4 5.Rb6+ Kc3 6.Rd1 Rg4+ 7.Kf5 Rg8 8.Rc1+ Kd2 9.Ra1 Rf8+ 10.Ke5 Re8+ 11.Kd4 Rd8+ 12.Kc5 Ra8 13.Kb4 Kd3 14.Rxa4 Rxa4+ ) ( { -5.42 } 2...Ke6 3.Ra6+ Ke5 4.Rxd7 Rg4+ 5.Kf7 Rf4+ 6.Ke7 Rb4 7.Rda7 Kd5 8.Rxa4 Rb3 9.R4a5+ Kc6 10.R7a6+ Kb7 11.Kd7 Rc3 12.Rd6 ) ( { -5.42 } 2...Kd8 3.Rd5 Kc7 4.Rfxd7+ Kb6 5.R7d6+ Kc7 6.Ra6 Rh3 7.Re5 Kd8 8.Rxa4 Kd7 9.Rd4+ Kc6 10.Kf5 Rh1 11.Rd2 Rc1 ) ( { mate -2 } 2...Ke8 3.Ra8+ Bc8 4.Rxc8# ) 3.Ra6+ ( { +5.06 } 3.Ra6+ Kc5 4.Rxd7 Kb4 5.Rb6+ Kc3 6.Rd1 Rg4+ 7.Kf5 Rg8 8.Rc1+ Kd2 9.Ra1 Rf8+ 10.Ke5 Re8+ 11.Kd4 ) ( { +0.09 } 3.Rf6+ Ke7 4.Re5+ Kd8 5.Rd5 Rg4+ 6.Kh5 Rg7 7.Kh6 Re7 8.Ra6 Kc8 9.Ra7 Bc6 10.Rxe7 Bxd5 11.Ra7 ) ( { +0.06 } 3.Rf3 Rg4+ 4.Kf7 Be6+ 5.Kf6 Bb3 6.Rd3+ Kc6 7.Rc3+ Kd6 8.Rh3 Rf4+ 9.Kg5 Re4 10.Rh6+ Be6 11.Ra6+ ) ( { +0.06 } 3.Rf1 Re4 4.Rf6+ Be6 5.Rf3 Bb3 6.Kg5 Re5+ 7.Rf5 Rxa5 8.Rxa5 Kc7 9.Kf5 Kb6 10.Ra8 Kb5 ) ( { +0.06 } 3.Rf2 Re4 4.Rd2+ Kc6 5.Rd3 Rg4+ 6.Kf6 Rf4+ 7.Kg5 Rg4+ 8.Kh5 Rf4 9.Ra7 Bf5 10.Kg5 Bxd3 11.Kxf4 ) 3...Kc5 ( { -5.14 } 3...Kc5 4.Rxd7 Kb4 5.Rb6+ Kc3 6.Rd1 Rg4+ 7.Kf5 Rg8 8.Rc1+ Kd2 9.Ra1 Rf8+ 10.Ke5 Re8+ 11.Kd4 Rd8+ 12.Kc5 Ra8 13.Kb4 Kd3 14.Rxa4 Rxa4+ 15.Kxa4 ) ( { -5.31 } 3...Kc7 4.Ra7+ Kb6 5.Rfxd7 Kc5 6.Rdb7 Rb4 7.Rc7+ Kd6 8.Rh7 Rf4 9.Ra6+ Kc5 10.Rha7 Rf8 11.Rxa4 Kd5 12.R7a5+ Kc6 ) ( { -5.31 } 3...Bc6 4.Rf6+ Kd5 5.Rfxc6 Rg4+ 6.Kf5 Rg1 7.Rc7 Rf1+ 8.Kg4 Rg1+ 9.Kf3 Rf1+ 10.Kg2 Rf4 11.Rca7 Rf8 12.Rxa4 Kc5 ) ( { -5.44 } 3...Ke5 4.Rxd7 Rg4+ 5.Kf7 Rf4+ 6.Ke7 Rb4 7.Rda7 Kd5 8.Rxa4 Rb2 9.R4a5+ Ke4 10.Rh5 Kf4 11.Ra4+ Kg3 12.Rg5+ Kf3 ) ( { -5.47 } 3...Kd5 4.Rxd7+ Kc5 5.Rda7 Rh2 6.Rxa4 Kc6 7.R4a6+ Kd5 8.Ra5+ Kc4 9.Rf7 Rg2+ 10.Rg5 Rd2 11.Rf4+ Rd4 12.Rxd4+ Kxd4 ) 4.Rxd7 ( { +5.06 } 4.Rxd7 Kb4 5.Rb6+ Kc3 6.Rd1 Rg4+ 7.Kf5 Rg8 8.Rc1+ Kd2 9.Ra1 Rf8+ 10.Ke5 Re8+ 11.Kd4 Rd8+ 12.Kc5 Ra8 13.Kb4 Kd3 14.Rxa4 Rxa4+ ) ( { +0.04 } 4.Re7 Rg4+ 5.Kf6 Rf4+ 6.Ke5 Rd4 7.Ra5+ Kc4 8.Rh7 Rd3 9.Ra7 Bc6 10.Rh6 Kc5 11.Rc7 Rd5+ 12.Kf4 ) ( { +0.03 } 4.Rf3 Kb5 5.Raf6 Rg4+ 6.Kh5 Re4 7.Rd3 Be6 8.Rf8 Kc5 9.Rg3 Bd5 10.Kg5 Re5+ 11.Kf4 Kd4 ) ( { +0.01 } 4.Ra5+ Kb4 5.Ra8 Rg4+ 6.Kh5 Rd4 7.Rf1 Rd3 8.Rb8+ Kc5 9.Rc1+ Kd5 10.Ra8 Ke5 11.Re1+ Kd5 ) ( { +0.01 } 4.Ra8 Rg4+ 5.Kh5 Rd4 6.Kg5 Rd5+ 7.Kf4 Bc6 8.Ra6 Bb5 9.Raa7 Kb4 10.Ke4 Rh5 11.Rh7 Bc6+ ) *

---

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

---

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

`

let otherGames = `

[Event "Wch Rapid"]
[Site "Khanty-Mansiysk"]
[Date "2013.06.07"]
[Round "6"]
[White "Ponkratov, Pavel"]
[Black "Pridorozhni, Aleksei"]
[Result "1-0"]
[WhiteElo "2605"]
[BlackElo "2512"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "B06"]
[Opening "Pterodactyl Defense: Eastern, Pterodactyl"]
[Termination "Unknown"]
[Annotator "lichess.org"]

1. d4 g6 2. e4 Bg7 3. Nc3 c5 4. dxc5 Qa5 { B06 Pterodactyl Defense: Eastern, Pterodactyl } 5. Bd2 Qxc5 6. Nd5 Na6 7. Nf3 e6 8. Bc3 Bxc3+?! { (0.37 → 1.13) Inaccuracy. Kf8 was best. } (8... Kf8 9. Bxg7+ Kxg7 10. Nc3 Nf6 11. e5 Ng4 12. Qe2 d6 13. exd6 Qxd6 14. Ne4 Qe7 15. O-O-O) 9. Nxc3 d6 10. Qd2 Nf6 11. O-O-O O-O 12. Qxd6 Qxf2? { (1.83 → 3.27) Mistake. Qxd6 was best. } (12... Qxd6 13. Rxd6 Nc5 14. Rd4 Ng4 15. e5 Nh6 16. Be2 Nf5 17. Rd2 a5 18. Rhd1 b6 19. g4) 13. Qf4 Kg7 14. Bxa6 bxa6 15. Qe5 Qb6?! { (2.93 → 4.31) Inaccuracy. Qe3+ was best. } (15... Qe3+) 16. Rhf1 Qb8 17. Qd4?? { (4.34 → 1.81) Blunder. Rd6 was best. } (17. Rd6 Kg8 18. Qxf6 Qxd6 19. Nd5 Re8 20. Ne5 Qf8 21. Nxf7 Qg7 22. Nd6 exd5 23. Qxg7+ Kxg7) 17... Qb6?? { (1.81 → 4.30) Blunder. Qc7 was best. } (17... Qc7 18. g4) 18. Qe5 Qb8 19. Rd6 Kg8 20. Qd4? { (3.85 → 2.20) Mistake. Qxf6 was best. } (20. Qxf6 Qxd6 21. Nd5 Re8 22. Ne5 Qf8 23. Nxf7 Qg7 24. Nd6 exd5 25. Qxg7+ Kxg7 26. Nxe8+ Kg8) 20... Ne8 21. Rd8 Qb6?! { (1.71 → 2.40) Inaccuracy. Qf4+ was best. } (21... Qf4+) 22. Qxb6 axb6 23. Ne5 Bb7 24. Rxa8 Bxa8 25. Nd7 Nd6?? { (2.12 → 4.47) Blunder. b5 was best. } (25... b5) 26. Rd1 Nb7? { (4.07 → 6.60) Mistake. Ne8 was best. } (26... Ne8 27. Nxf8) 27. Nxf8 Kxf8 28. Rd7? { (6.44 → 3.69) Mistake. Na4 was best. } (28. Na4 b5 29. Nb6 Nc5 30. Rd8+ Ke7 31. Rxa8 Kf6 32. Ra7 h6 33. Kd2 Ke5 34. Rxf7 a5) 28... Ke8 29. Rc7 Nd8 30. a4 h5 31. h4 f5 32. exf5 gxf5 33. g3 e5 34. Kd2?! { (4.35 → 3.45) Inaccuracy. Rh7 was best. } (34. Rh7 Bf3 35. Rh6 b5 36. Rf6 Bg4 37. a5 Kd7 38. Rxa6 Nc6 39. Kd2 b4 40. Nd5 Bf3) 34... f4? { (3.45 → 5.48) Mistake. Bf3 was best. } (34... Bf3) 35. gxf4 exf4 36. Rc4 f3 37. Ke3 Kd7 38. Rd4+ Ke8 39. Rb4 Kd7 40. Rxb6 Nf7 41. Rxa6 Bc6 42. Ra7+ Ke6 43. Nb5 Kd5 { White wins. } 1-0

---

[Event "Podgorica Balkan GP final 3rd"]
[Site "Podgorica"]
[Date "2011.12.19"]
[Round "9"]
[White "Ivanisevic, Ivan"]
[Black "Stanojoski, Zvonko"]
[Result "1-0"]
[WhiteElo "2636"]
[BlackElo "2470"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "B06"]
[Opening "Pterodactyl Defense: Eastern, Pterodactyl"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. d4 g6 2. e4 Bg7 3. Nc3 c5 4. dxc5 Qa5?! { (0.66 → 1.48) Inaccuracy. Bxc3+ was best. } { B06 Pterodactyl Defense: Eastern, Pterodactyl } (4... Bxc3+ 5. bxc3 Qa5 6. Qd4 Nf6 7. Qb4 Qc7 8. f3 b6 9. cxb6) 5. Bd2 Qxc5 6. Nd5 Na6 7. Nf3 e6 8. Bc3 f6? { (0.95 → 2.27) Mistake. Kf8 was best. } (8... Kf8 9. Bxg7+ Kxg7 10. Nc3 Nc7 11. Qd2 e5 12. h4 h5 13. O-O-O Nf6 14. Ng5 b5 15. f4) 9. b4 Qf8 10. Bxa6 exd5 11. Bb5 dxe4 12. O-O exf3?! { (1.43 → 2.13) Inaccuracy. Ne7 was best. } (12... Ne7 13. Qd4) 13. Re1+ Ne7 14. Qxf3? { (2.54 → 0.80) Mistake. Qd4 was best. } (14. Qd4) 14... f5?? { (0.80 → 2.94) Blunder. Qf7 was best. } (14... Qf7 15. Qe3) 15. Rad1 h5 16. Bxd7+?! { (3.21 → 2.12) Inaccuracy. Rd6 was best. } (16. Rd6) 16... Bxd7 17. Rxd7 Kxd7 18. Qxb7+ Kd6?? { (3.81 → 8.37) Blunder. Ke8 was best. } (18... Ke8 19. Qc6+) 19. Bxg7 Qxg7 20. c4 Rac8 21. c5+ Rxc5 22. bxc5+ Kxc5 23. Qc7+ Kd5 24. Qd7+ Kc5 25. Rc1+ Kb6 26. Qc7+ Ka6 27. Rc6+?? { (Mate in 4 → 6.10) Lost forced checkmate sequence. Rb1 was best. } (27. Rb1 Qb2 28. Rxb2 Rb8 29. Qxb8 Ka5 30. Qxa7#) 27... Nxc6 28. Qxg7 Re8 29. h3 Re6 30. Qc3 { Black resigns. } 1-0

---

[Event "Stepanakert Petrosian Memorial"]
[Site "Stepanakert"]
[Date "2004.03.09"]
[Round "1"]
[White "Sveshnikov, Evgeny"]
[Black "Ghaem Maghami, Ehsan"]
[Result "1-0"]
[WhiteElo "2557"]
[BlackElo "2549"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "B06"]
[Opening "Pterodactyl Defense: Eastern, Pterodactyl"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5 Qa5 { B06 Pterodactyl Defense: Eastern, Pterodactyl } 5. Bd2 Qxc5 6. Nd5 Na6 7. Nf3 Bxb2? { (0.55 → 1.95) Mistake. e6 was best. } (7... e6 8. b4 Qf8 9. Ne3 Nf6 10. Bd3 Qe7 11. e5 Nd5 12. Nxd5) 8. Rb1 Bg7 9. Bxa6 bxa6 10. O-O a5?? { (2.14 → 4.92) Blunder. Kf8 was best. } (10... Kf8 11. Rb3) 11. Be3 Qc6 12. Bf4?! { (4.79 → 3.58) Inaccuracy. Qd2 was best. } (12. Qd2) 12... d6 13. Nd4 Bxd4 14. Qxd4 f6 15. Rb3 Kf7? { (3.22 → 5.10) Mistake. Be6 was best. } (15... Be6 16. Rc3) 16. Rc3 Qd7 17. Rc7 Qd8? { (4.14 → 8.85) Mistake. Qe6 was best. } (17... Qe6 18. Qa4 Ba6 19. Re1 Rc8 20. Rxa7 Rc5 21. Nc7 Rxc7 22. Rxc7 g5 23. Qxa5 gxf4 24. Qxa6) 18. Qc4?? { (8.85 → 2.31) Blunder. Rxe7+ was best. } (18. Rxe7+) 18... Be6 19. Qc6 Rc8 20. Bxd6 Rxc7 21. Bxc7 Qd7 22. Qxd7 Bxd7 23. Rb1 e6 24. Ne3 Bc6 25. f3 Ne7 26. Bxa5 e5 27. Nc4 Ke6 28. Rd1 Rb8 29. Rd6+ Kf7 30. Bd8 Rc8 31. Ne3 Ke8?! { (1.36 → 2.09) Inaccuracy. f5 was best. } (31... f5 32. Nc4 Bxe4 33. Nxe5+ Ke8 34. fxe4 Rxd8 35. Rxd8+ Kxd8 36. exf5 Nxf5 37. Kf2 Kc7 38. Ke2) 32. Ba5 Kf7 33. Ng4 Ng8 34. Bd8 Bb5 35. Nxf6? { (2.28 → 1.00) Mistake. a4 was best. } (35. a4 Bc4 36. Nxf6 Nxf6 37. Bxf6 Rc5 38. Bg5 Rc7 39. Bd8 Rc5 40. h4 Rc8 41. Bg5 Rc7) 35... Nxf6 36. Bxf6 Rxc2 37. Bxe5 Rc1+ 38. Kf2 Rc2+ 39. Kg3 Rxa2 40. Bd4 Rd2 41. e5 Bf1 42. Bxa7 Rxg2+ 43. Kf4 Bc4 44. Rf6+ Ke8 45. Bc5 Kd7 46. Rd6+ Ke8 47. Rb6 Kd7 48. e6+ Kc7 49. e7 Re2? { (1.57 → 3.02) Mistake. Bf7 was best. } (49... Bf7) 50. Rf6?! { (3.02 → 2.11) Inaccuracy. Rb2 was best. } (50. Rb2) 50... Bb5 51. Rf8 Bd7 52. Be3 g5+?! { (2.82 → 4.30) Inaccuracy. Rxh2 was best. } (52... Rxh2 53. e8=N+ Bxe8 54. Rxe8 Kd6 55. Rb8 Ke6 56. Rb6+ Kf7 57. Bd4 Rh1 58. Rf6+ Ke7 59. Be5) 53. Ke4 Bc6+ 54. Kd4 Rxh2 55. Bxg5 Rf2 56. Bh4?! { (5.71 → 3.95) Inaccuracy. Bf4+ was best. } (56. Bf4+) 56... Rf1 57. Ke3 { Black resigns. } 1-0

---

[Event "Pyramiden Franken Cup 3rd"]
[Site "Fuerth"]
[Date "2000.08.25"]
[Round "7"]
[White "Hector, Jonny"]
[Black "Al Modiahki, Mohamad"]
[Result "1-0"]
[WhiteElo "2509"]
[BlackElo "2499"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "B27"]
[Opening "Pterodactyl Defense: Western, Rhamphorhynchus"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ { B27 Pterodactyl Defense: Western, Rhamphorhynchus } 5. Bd2 Qxc5 6. Nc3 Nf6 7. Bd3 d6 8. h3 O-O 9. Qe2 Nbd7 10. b4 Qxb4 11. Nd5 Qa4 12. Nxe7+ Kh8 13. Ng5 Nc5 14. O-O Bd7 15. Bc3 Qa3 16. Qd2 a5 17. Rab1 Rae8 18. Bb2 Nfxe4 19. Bxg7+ Kxg7 20. Bxe4 Rxe7 21. Qxd6 Rfe8 22. Rb3 Qxa2 23. Qxc5 Rxe4 24. Nxe4 Rxe4 25. Qc3+ { Black resigns. } 1-0

---

[Event "Bucharest"]
[Site "Bucharest"]
[Date "1974.03.12"]
[Round "4"]
[White "Westerinen, Heikki MJ"]
[Black "Partos, Charles"]
[Result "1-0"]
[WhiteElo "2435"]
[BlackElo "2425"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "B27"]
[Opening "Pterodactyl Defense: Western, Rhamphorhynchus"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. e4 c5 2. Nf3 g6 3. d4 Bg7 4. dxc5 Qa5+ { B27 Pterodactyl Defense: Western, Rhamphorhynchus } 5. Bd2 Qxc5 6. Nc3 Nf6 7. Be3 Qa5 8. Qd2 Nc6 9. Bc4 O-O 10. Bb3 b5 11. Nd5 Qxd2+ 12. Nxd2 Nxd5 13. exd5 Nd4 14. O-O-O Bb7 15. Rhe1 Nxb3+ 16. Nxb3 e6 17. dxe6 dxe6 18. f3 Bd5 19. Bd4 f6 20. Nc5 Kf7 21. Na6 Rfc8 22. Nb4 Bb7 23. Bb6 Ke7 24. Ba5 Bh6+ 25. Kb1 a6 26. Rd3 Bc6 27. Bd8+ Kf7 28. Nxc6 Rxc6 29. Rd7+ Kg8 30. Bxf6 Rac8 31. c3 b4 32. Re4 bxc3 33. Bxc3 Bf8 34. Rh4 h5 35. Rf4 e5 36. Rff7 Ba3 37. f4 exf4 38. Rh7 Rxc3 39. bxc3 Rxc3 40. Rdg7+ Kf8 41. Rc7 Rxc7 42. Rxc7 a5 43. Kc2 Bd6 44. Rd7 Be7 45. Ra7 { Black resigns. } 1-0

---

[Event "Maribor"]
[Site "Maribor"]
[Date "1977.??.??"]
[Round "11"]
[White "Barle, Janez"]
[Black "Forintos, Gyozo V"]
[Result "1-0"]
[WhiteElo "2450"]
[BlackElo "2450"]
[Variant "Standard"]
[TimeControl "-"]
[ECO "B06"]
[Opening "Pterodactyl Defense: Eastern, Pterodactyl"]
[Termination "Normal"]
[Annotator "lichess.org"]

1. e4 g6 2. d4 Bg7 3. Nc3 c5 4. dxc5 Qa5 { B06 Pterodactyl Defense: Eastern, Pterodactyl } 5. Bd2 Qxc5 6. Nd5 Na6 7. Nf3 e6 8. Bc3 Bxc3+? { (0.73 → 1.91) Mistake. Kf8 was best. } (8... Kf8 9. Bxg7+ Kxg7 10. Nc3 Nc7 11. Qd4+ Qxd4 12. Nxd4 d5 13. exd5 exd5 14. O-O-O Nf6 15. Be2) 9. Nxc3 Nf6 10. Qd2 O-O 11. O-O-O Ng4 12. Bxa6 bxa6 13. Rhf1 f6 14. Qd6? { (3.10 → 1.33) Mistake. h3 was best. } (14. h3 Ne5 15. Nxe5 Qxe5 16. f4 Qc5 17. Rf3 Rb8 18. Rd3 a5 19. a3 Rb7 20. g4 Rc7) 14... Qxd6 15. Rxd6 Kf7 16. h3 Ke7 17. Rd2 Ne5?! { (0.99 → 1.67) Inaccuracy. Nh6 was best. } (17... Nh6 18. Nd4 Rb8 19. Nb3 Rb7 20. Na5 Rc7 21. Re1 Nf7 22. Nd1 g5 23. Ne3 h5 24. f3) 18. Nxe5 fxe5 19. Rfd1 Rd8 20. Na4 d6 21. b3 Bb7 22. f3 Rac8 23. Nb2 d5 24. exd5 exd5 25. Re1 Kf6 26. c4?! { (1.37 → 0.38) Inaccuracy. Rde2 was best. } (26. Rde2 Re8) 26... a5 27. Red1 Re8 28. Kb1 d4 29. Nd3 a4 30. Re1 e4 31. fxe4 Bxe4 32. Rf1+ Kg7 33. Rf4?! { (0.57 → 0.00) Inaccuracy. Kb2 was best. } (33. Kb2 a5) 33... Bxd3+?! { (0.00 → 0.78) Inaccuracy. axb3 was best. } (33... axb3 34. axb3 a5 35. Kb2 a4 36. Nc1 axb3 37. Rxd4 Bxg2 38. Rd7+ Kg8 39. Rff7 Rxc4 40. Rg7+) 34. Rxd3 Re2 35. Rfxd4 axb3 36. axb3 Rxg2 37. Rd7+ { Black resigns. } 1-0

`

let allGames = `

${myPuzzles}

---

${myGames}

---

${otherGames}

`.split("---").map((pgn) => new Game(pgn))


/*
let gamesHash = {}

for (let i = 0; i < allGames.length; i++) {
  let header = allGames[i].header()
  let title = header.White + " vs " + header.Black + " " + header.Result
  gamesHash[title] = allGames[i]
}
*/

export default allGames