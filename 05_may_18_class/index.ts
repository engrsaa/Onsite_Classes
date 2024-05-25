// H.W
// interfaces
// structral typing in ts
// TIP-first quiz includes just fist 10 steps

// difference between any and unknown data types
// explicit type casting step06 in panaverse repo
let num1 : any = '18';
let result :number = num1;
let num2 : unknown = 18;//it requires explicit type casting
// let result2 :number = Number(num2);
let result3 :number = num2 as number;//explicit type casting which is ts feature only
let result4 :number = <number>num2;//another way of explicit type casting
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(String(num1));
let value :unknown='55';
// console.log(value);//print as string
// console.log(value as number);//also print as string becase explicit type casting is ts feature

// rest parameter in functions
// it uses spread operator for declaration and 
// it must be the last parameter of function
// if needs to use two rest parameters in one function it is possible with array of two rest parameters
function invitation(host:string='Ali',...guest:string[]){
    // console.log(guest.join(' | '));
}
invitation(undefined,'Asad','Husnain','Zartaj','Hamza');

// function overloading
// overloads gives us type-checked call
// all overload functions must have same name as the main function
// main function have body
// use-case like multiple login opitons like sometimes only requires just emaid ID
function add(argmnt1:string,argmnt2:string):string;
function add(argmnt1:number,argmnt2:number):number;
function add(argmnt1:number,argmnt2:string):void;
function add(argmnt1:boolean,argmnt2:boolean):void;
function add(argmnt1:unknown,argmnt2:any){
    return argmnt1 + argmnt2;
}
// console.log(add(true,false));

// Class tasks
let firstName = 'HaMza';
// console.log(firstName);
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(firstName.length);
let price = 18;
console.log(price.toFixed(2));
let price1 = 18.24;
console.log(price1.toFixed(2));
