"use strict";
// keywords learned - class, this, readonly, constructor, super, extends, variableNameWith"!"
// oop - objects & classes based coding style
// oop has four pillars abbraction, encapsulation, inheritance and polymorphism
// class is used to create object with either property or function
// H.W university management system shared on discord class channel
class House {
    constructor(no, name, cnic) {
        this.houseOwner = name; // this refers to current object
        this.ownerCnic = cnic;
    }
    // function in class
    walk() {
        console.log(this.houseOwner, 'walking . . .');
    }
}
let h1 = new House(12, 'Ali', 20202);
let h2 = new House(34, 'Ibrahim', 10101);
// console.log(h1);
h2.houseOwner = 'Ahsan';
// console.log(h1.houseOwner);
// h1.walk();//function declared in class called
// h2.walk();
// inheritance - done with "extends" keyword
class Animal {
    constructor(name) {
        this.animalName = name;
    }
    walk() {
        console.log('walking. . . ');
    }
    eat() {
        console.log('eating. . . ');
    }
    sleep() {
        console.log('sleeping. . . ');
    }
}
class Dog extends Animal {
    // walk(){
    //     console.log('walking . . .');
    // }
    constructor(anotherName) {
        super(anotherName); //this is a built-in function
        // to use "this" keyword for parent class we must call "super()" first
        // this.animalName='Tinko' ;
    }
    woof() {
        console.log(this.animalName, 'is barking');
    }
}
class Cat extends Animal {
    // walk(){// same function as Dog Class so we create parent class to inherit
    //     console.log('walking . . .');
    // }
    meow() {
        console.log(this.animalName, 'meow meow');
    }
}
let pet = new Dog('Tommy');
pet.woof();
