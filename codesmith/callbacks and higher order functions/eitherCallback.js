function eitherCallback(callback1, callback2) {
  // return a function
  return (element, i, array) => {
    // return the boolean representing whether either callback returns true
    return callback1(element, i, array) || callback2(element, i, array);
  };
}

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
const over100 = (n) => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(intSqRtOrOver100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]
