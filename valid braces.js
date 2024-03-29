// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces){
    while(braces.indexOf("()") !== -1 || braces.indexOf("{}") !== -1 || braces.indexOf("[]") !== -1) {
      braces = braces.replace("()", "")
      braces = braces.replace("{}", "")
      braces = braces.replace("[]", "")
    } 
    return braces.length ? false : true
  }  
  
 function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log("passed")
    } else {
        console.log(`Failed [${testName}] Expected "${expected}" but got "${actual}"`)
    }
 } 

//  Tests
let actual = validBraces("{}")
let expected = false
assertEqual(actual, expected, "should return false for empty string" )
