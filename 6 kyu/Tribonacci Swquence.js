//6 kyu Tribonacci Sequence

function tribonacci(signature,n){
    for (let i = 0; i < n; i++){
      signature.push(signature[i] + signature[i + 1] + signature[i + 2])
    }
    return signature.slice(0 , n)
  }