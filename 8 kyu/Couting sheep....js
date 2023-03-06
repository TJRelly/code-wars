function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep === true).length;
  }

  function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
  }