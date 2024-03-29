// Sample Input
var classList = [
  "Joe",
  "Jack",
  "John",
  "Fred",
  "Frank",
  "Barry",
  "Larry",
  "Mary",
  "Harry",
  "Farrell",
  "Susan",
  "Monica",
  "Keira",
  "Caroline",
  "Harriet",
  "Erica",
  "Luann",
  "Cheryl",
  "Beth",
  "Rupa",
  "Linda",
  "Allison",
  "Nancy",
  "Dora",
]

// Sample Output
var classListWithAges = [
  { name: "Joe", age: 11 },
  { name: "Jack", age: 10 },
  { name: "John", age: 11 },
  { name: "Fred", age: 11 },
  { name: "Frank", age: 11 },
  { name: "Barry", age: 11 },
  { name: "Larry", age: 11 },
  { name: "Mary", age: 11 },
  { name: "Harry", age: 11 },
  { name: "Farrell", age: 10 },
  { name: "Susan", age: 10 },
  { name: "Monica", age: 11 },
  { name: "Keira", age: 10 },
  { name: "Caroline", age: 10 },
  { name: "Harriet", age: 11 },
  { name: "Erica", age: 11 },
  { name: "Luann", age: 10 },
  { name: "Cheryl", age: 11 },
  { name: "Beth", age: 10 },
  { name: "Rupa", age: 11 },
  { name: "Linda", age: 10 },
  { name: "Allison", age: 10 },
  { name: "Nancy", age: 10 },
  { name: "Dora", age: 10 },
]

// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
  let arrWithAges = []
  for (let student of classList) {
    let studentObj = {}
    studentObj["name"] = student
    studentObj["age"] = getRandomIntInclusive(10, 11)
    arrWithAges.push(studentObj)
  }
  return arrWithAges
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  let sameLength = actual.length === expected.length
  let sameItems = true

  for (let i in expected) {
    if (actual[i].name !== expected[i].name) {
      console.log("Incorrect name at index: " + i)
      sameItems = false
      break
    }

    if (!assertWithinRange((low = 10), (high = 11), actual[i].age)) {
      console.log(actual[i])
      sameItems = false
      console.log(
        `error: age "${actual[i].age}" not within range "${low} - ${high}"`
      )
      break
    }
  }

  sameLength && sameItems
    ? console.log("passed")
    : console.log(
        `Failed [${testName}] Expected "${expected}" but got "${actual}"`
      )
}

function assertWithinRange(low, high, actual) {
  return actual >= low && actual <= high ? true : false
}

// TESTS CASES
let actual = decorateClassListWithAges(classList)
let expected = classListWithAges
assertArraysEqual(actual, expected, "class list")
