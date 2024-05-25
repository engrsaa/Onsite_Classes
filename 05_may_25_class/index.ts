// null data type
let a:null|number=null;//used to intentionaly set empty value
if(a!=null){console.log(a);}else{console.log('a have some value');}

// narrowing in ts
let pass:string|number;//before assigning its value is union
pass='abc';
// console.log(pass.toUpperCase());//hover pass in this line and check type and built-in functioins
pass=123;
// console.log(pass.toFixed());//hover pass in this line and check type and built-in functions
let newAge = Math.random()<0.5?'Pathan':60;
if(typeof newAge==='string'){
    newAge=newAge.toUpperCase();
}
// console.log(newAge);

// Interface approx same as type alias
type Person ={
    name: string
}
interface IPerson{
    name: string
}
let person: IPerson = {
    name: "malinga"
}

// structural typing - step 05c in Sir Zia repo
interface Deal1{
    food:string
}
interface Deal2{
    food:string,
    drink:string
}

let wahidOrder:Deal1={
    food:'Pulao'
}
let tahaOrder:Deal2={
    food:'biryani',
    drink:'pepsi'
}

let wahidTable:Deal1=tahaOrder;//stale object don't give error
// let tahaTable:Deal2=wahidOrder;//gives error
let wahidTable2:Deal1={//fresh object 
    food:'Anday wala burger'
    // drink:'cola'//can't give error property
}