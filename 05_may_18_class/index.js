// H.W
// interfaces
// structral typing in ts
// TIP-first quiz includes just fist 10 steps
// difference between any and unknown data types
// explicit type casting step06 in panaverse repo
var num1 = '18';
var result = num1;
var num2 = 18; //it requires explicit type casting
var result2 = Number(num2);
var result3 = num2; //explicit type casting which is ts feature only
var result4 = num2; //another way of explicit type casting
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(String(num1));
var value = '55';
// console.log(value);//print as string
// console.log(value as number);//also print as string becase explicit type casting is ts feature
// rest parameter in functions
// it uses spread operator for declaration and 
// it must be the last parameter of function
// if needs to use two rest parameters in one function it is possible with array of two rest parameters
function invitation(host) {
    if (host === void 0) { host = 'Ali'; }
    var guest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        guest[_i - 1] = arguments[_i];
    }
    // console.log(guest.join(' | '));
}
invitation(undefined, 'Asad', 'Husnain', 'Zartaj', 'Hamza');
function add(argmnt1, argmnt2) {
    return argmnt1 + argmnt2;
}
// console.log(add(true,false));
// Class tasks
var firstName = 'HaMza';
// console.log(firstName);
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(firstName.length);
var price = 18;
console.log(price.toFixed(2));
var price1 = 18.24;
console.log(price1.toFixed(2));
