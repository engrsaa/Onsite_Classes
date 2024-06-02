// H.W
// example of switch statement with enum
// enum - important for quiz - 2nd PDF page # 291
// examine difference of any and unknown
// const enum Color{
//     Red,// in manual setting of index no. its index remains 0
//     Yellow=4,// set index no. explicitly
//     Green
// }
// console.log('Prints Index No. ->',Color.Red);
// console.log('Prints Yellow ->',Color[1]);
// console.log('Prints Index No. ->',Color['Red']);
// let myCondition:Color = Color["Yellow"];
// switch(myCondition){
//     case Number(Color.Red):
//         console.log("Stop!");
//         break;
//     case Color['Yellow']:
//         console.log("Ready!");
//         break;
//     case Number(Color.Green):
//         console.log("Go!");
//         break;
// }
// const enum Color{
//     Red,
//     Yellow,
//     Green
// }
// console.log(Color.Green);
// console.log(Color[1]);
// console.log(Color.Green);
// -------------------
// loops - 2nd PDF page # 403
// for loop
// for(let i=0;i<=54;i=i+2){
//     console.log(i);
// }
// for(let i=10;i>0;i--){
//     console.log(`${i} hello world!`);
// }
var cars = ['Vitz', 'Corolla', 'Mehran', 'Civic', 'City'];
for (var i = 0; i < cars.length; i++) {
    console.log("".concat(cars[i]));
}
// cars.forEach(element=>console.log(element));
// any data type
// may use unknown type in replacement of any
