//^ Prototype-based inheritance.


//* Objects inherit directly from other objects.
//& More flexible: Objects can inherit from any object.
// ! syntax :   Uses Object.create() or __proto__.

const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

const dog = Object.create(animal); 

dog.barks = true;

console.log(dog.eats); // true (inherited from animal)
console.log(dog.barks); // true (own property)
dog.walk(); // Animal walks (inherited method)


