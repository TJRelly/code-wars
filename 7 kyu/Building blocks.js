class Block{
    // The constructor takes in an array [width, length, height]
    constructor(data){
      // Deconstructed the data array
      [this.w, this.l, this.h] = data
    }
    // Created methods
    getWidth() { return this.w }
    getLength() { return this.l }
    getHeight() { return this.h }
    
    getVolume() {
      //Decontructed the construtcor object
      let { w, l, h } = this
      return w * l * h
    }
    
    getSurfaceArea() {
      let { w, l, h } = this
      return 2 * (w * l + w * h + l * h)
    }
    
  }
  
  //Tested object
  let block = new Block( [2, 4, 6] )
  console.log(block.getWidth()) // 2
  console.log(block.getLength()) // 4
  console.log(block.getHeight()) // 6
  console.log(block.getVolume()) // 48
  console.log(block.getSurfaceArea()) // 88