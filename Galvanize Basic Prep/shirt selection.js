function selectShirtSize(choice) {
  // if shirt is greater than or equal 20 and less than 30
  // return 'You should select a size S'
  if (choice >= 20 && choice < 30) return "You should select a size S"
  // otherwise if shirt is greater than or equal to 30 and less than 40
  // return 'You should select a size M'
  else if (choice >= 30 && choice < 40) return "You should select a size M"
  // otherwise if shirt is greater than or equal to 40 and less than 50
  // return 'You should select a size L'
  else if (choice >= 40 && choice < 50) return "You should select a size L"
  // otherwise
  // return 'You should select a different shirt'
  else return "You should select a different shirt"
}

var result1 = selectShirtSize(25)
console.log('should log "You should select a size S":', result1)

var result2 = selectShirtSize(32)
console.log('should log "You should select a size M":', result2)

var result3 = selectShirtSize(47)
console.log('should log "You should select a size L":', result3)

var result4 = selectShirtSize(12)
console.log('should log "You should select a different shirt":', result4)

var result5 = selectShirtSize(67)
console.log('should log "You should select a different shirt":', result5)
