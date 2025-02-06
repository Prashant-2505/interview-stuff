function info() {
  let name = "tom";
  let age = 90;
  return function print() {
    console.log("Name: " + name);
    console.log("Age: " + age);
  };
}

var person = info();
person()
