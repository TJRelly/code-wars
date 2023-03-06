function persistence(num) {
  count = 0
  let numArr = [...num.toString()]
  if (numArr.length > 1) {
    let multiplied = numArr.reduce((a, c) => a * c)
    persistence(multiplied)
    count++
  }
  return count
}