// keywords learned - class, this, readonly, constructor, super, extends, variableNameWith"!"
// oop - objects & classes based coding style
// oop has four pillars abbraction, encapsulation, inheritance and polymorphism
// class is used to create object with either property or function
// H.W make the university management system from the following video link and understand oop concept from the diagram
// video link - https://www.youtube.com/watch?v=O3kxSB5GBWQ
// diagram link - https://drive.google.com/file/d/1xFUYd6GW5U0tSQSN8_xi5QvFKrlxYfF0/view?usp=sharing
class House {
    readonly houseNumber!:number;//needs to ignore error of initializer set it like houseNumber!:number
    houseOwner:string;
    ownerCnic:number;
    constructor(no:number,name:string,cnic:number){// called with instance by default
        this.houseOwner=name;// this refers to current object
        this.ownerCnic=cnic;
    }
    // function in class
    walk(){// function declared in class without "function" keyword
        console.log(this.houseOwner,'walking . . .');
    }
}

let h1 = new House(12,'Ali',20202);
let h2 = new House(34,'Ibrahim',10101);

// console.log(h1);
h2.houseOwner='Ahsan';
// console.log(h1.houseOwner);
// h1.walk();//function declared in class called
// h2.walk();

// inheritance - done with "extends" keyword
class Animal{// parent class of "dog and cat class"
    animalName:string;
    constructor(name:string){
        this.animalName=name;
    }
    walk(){console.log('walking. . . ');
    }
    eat(){console.log('eating. . . ');
    }
    sleep(){console.log('sleeping. . . ');
    }
}
class Dog extends Animal {// child class of "Animal Class"
    // walk(){
    //     console.log('walking . . .');
    // }
    constructor(anotherName:string){
        super(anotherName);//this is a built-in function
        // to use "this" keyword for parent class we must call "super()" first
        // this.animalName='Tinko' ;
    }
    woof(){
        console.log(this.animalName,'is barking');
    }
}
class Cat extends Animal {//child class of "Animal class"
    // walk(){// same function as Dog Class so we create parent class to inherit
    //     console.log('walking . . .');
    // }
    meow(){
        console.log(this.animalName,'meow meow');
    }
}

let pet = new Dog('Tommy');
pet.woof(); 
