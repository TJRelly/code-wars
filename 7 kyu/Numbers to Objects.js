function numObj(s){
    //Loop through arr 
    let objs = s.map(num => {
      let obj = {}
      obj[num] = String.fromCharCode(num)
      return obj
    })
    return objs
  }