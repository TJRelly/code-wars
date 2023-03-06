//Solution 1
function digPow(n, p) {
    let nums = n.toString().split('')
    let pwrPlay = nums.map((num, i) => num ** (p + i))
    let result = pwrPlay.reduce((acc, num) => acc + num)
    let k = result / n
    return !(result % n) ? k : -1
}

//Revised
function digPow(n, p) {
    let nums = n.toString().split('')
    let digPlay = nums.reduce((acc, num, i) => acc + num ** (p + i), 0)
    return digPlay % n ? -1 : digPlay / n
}