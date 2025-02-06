const obj = {
    name: 'John',
    age: 25,
    city: 'New York',
    display: function () {
      console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    },
    greet: function () {
        console.log(`"hiiii" , ${name2} and ${age}`)
    }
  };
  
  const obj2 = {
    name: 'Jane',
    age: 30,
    city: 'Los Angeles',
  };
  
  let name2 = 'John';
  let age = 25;
  // Use call to borrow the display method
  obj.display.call(obj2);
  obj.greet.apply(obj2,[name2,age])
  let bindFun = obj.greet.bind(obj2,[name2,age])
  bindFun()
  