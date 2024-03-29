// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  let total = 0
  for (let i = 0; i < 10; i++) {
    let x = Number(games[i][0])
    let y = Number(games[i][2])
    if (x > y) total += 3
    else if (x == y) total += 1
  }
  return total
}

function points(games) {
  return games.reduce((acc, game) => {
    const x = Number(game[0])
    const y = Number(game[2])
    if (x > y) acc += 3
    else if (x === y) acc += 1
    return acc
  }, 0)
}

function points(games) {
  return games.reduce((acc, score) => {
    const x = +score[0]
    const y = +score[2]
    x > y ? (acc += 3) : x === y ? (acc += 1) : acc
    return acc
  }, 0)
}
