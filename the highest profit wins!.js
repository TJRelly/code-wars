function minMax1(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]; // fix me!
  }

  const minMax2 = arr => {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
  }

  const minMax = arr => [Math.min(...arr), Math.max(...arr)]
  
  console.log(minMax ([1, 2, 3]))