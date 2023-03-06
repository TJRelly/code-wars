function toCamelCase(str){
    if (str.includes('_') || str.includes('-')){
      let cleanStr = str.replace(/[_-]/g, ' ')
      let words = cleanStr.split(' ')
      return words.map((word, i) => i > 0 
                       ? word.charAt(0)
                       .toUpperCase() 
                       + words[i].slice(1) 
                       : word).join('')
    } 
    return ''
  }