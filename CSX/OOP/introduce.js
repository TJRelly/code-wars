const personStore = {
    greet: function() {
      console.log('hello');
    },
    introduce: function() {
        console.log(`Hi, my name is ${this.name}`)
      }
  }
  
  function personFromPersonStore(name, age) {
      const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // add code here
  
  
  // Uncomment this line to check your work!
  sandra.introduce(); // -> Logs 'Hi, my name is Sandra'