// let animal = {
//     eats: true,
// };

// let rabbit = {
//     jumps: true,
// };

// it's like a hashmap

// rabbit.__proto__ = animal; //sets rabbit.[[prototype]] = animal

// -------- JS uses prototype based OOP -------------- //
// that means object comes from another object



// | Classical OOP   | JavaScript                        |
// | --------------- | --------------------------------- |
// | Class           | Prototype object                  |
// | Object instance | Object linked to prototype        |
// | Inheritance     | Prototype chain                   |
// | Method lookup   | Property lookup through prototype |


class Animal {
    constructor(name) {
        this.name = name;
        console.log("New animal is created...");
    }

    eats() {
        console.log("Eating...");
    }

    jumps() {
        console.log("Jumping....");
    }
}

//inheritence
class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("A new Lion is created....");
    }

    roar() {
        console.log("Roaring.....");
    }

    //method overriding
    eats() { 
        super.eats(); //calling super's(here Animal) method
        console.log("Lion Eating...");
    }

    static callByClass() {
        console.log("This method is called by class not object. So object creation not necessary.");
    }

    //there is also getters and setters in js
}

let rabbit = new Animal();
rabbit.jumps();

let lion = new Lion("Rohan");
console.log(lion.name);
lion.roar();
lion.eats();

console.log(lion instanceof Lion);
console.log(lion instanceof Animal);
console.log(rabbit instanceof Lion);

Lion.callByClass();


// only necessary concepts: Prototype, class, constructors, static(only for knowledge)

// Internally JS don't have class. Only objects and prototypes. In JS functions are also Object
//internally this 
// class Car {
//   constructor(speed) {
//     this.speed = speed;
//   }

//   drive() {
//     console.log(this.speed);
//   }
// }

//is converted to 
// function Car(speed) {
//   this.speed = speed;
// }

// Car.prototype.drive = function () {
//   console.log(this.speed);
// };


// | C++                | JavaScript           |
// | ------------------ | -------------------- |
// | vtable pointer     | `[[Prototype]]`      |
// | Method dispatch    | Property lookup      |
// | Fixed layout       | Dynamic object       |
// | Compile-time class | Runtime object graph |
