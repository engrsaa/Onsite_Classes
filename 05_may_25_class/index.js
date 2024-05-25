// null data type
var a = null; //used to intentionaly set empty value
if (a != null) {
    console.log(a);
}
else {
    console.log('a have some value');
}
// narrowing in ts
var pass; //before assigning its value is union
pass = 'abc';
// console.log(pass.toUpperCase());//hover pass in this line and check type and built-in functioins
pass = 123;
// console.log(pass.toFixed());//hover pass in this line and check type and built-in functions
var newAge = Math.random() < 0.5 ? 'Pathan' : 60;
if (typeof newAge === 'string') {
    newAge = newAge.toUpperCase();
}
console.log(newAge);
