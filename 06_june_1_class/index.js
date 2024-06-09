// sync - single task performance at a time
// async - step09e_async in Sir Zia repo - 
// in async approach we are doing multiple tasks at a time
// google all of the following terms to understand science behind async programming
// call stack, event loop, callback que
// H.W
// hamzah syed async search videos on youtube
// first video end questions are important for quiz
// let j=0;//intended to delay code output
// console.log('i');
// console.log('eat');
// setTimeout(() => {//this built in function runs asynchronously
// console.log('like to eat');
// setTimeout(() => {
//     console.log('mango');
// }, 1000);
// }, 1000);//if time is zero than it also print time out console lastly
// for(let i=0;i<1000000000;i++){j=j+1;}
// console.log('icecream');
// const orderPizza = (preparedCb:any) => {
//     console.log('Placing order!');
//     setTimeout(() => {
//         console.log('Order placed');
//         preparedCb(delivery);//this is a callback function
//     }, 3000);
// }
// orderPizza(preparePizza);
// function preparePizza(deliveryCb:any){
//     console.log('Preparing Pizza');
//     setTimeout(() => {
//         console.log('Pizza is being prepared');
//         deliveryCb();
//     }, 3000);
// }
// function delivery(){
//     console.log('Order dispatched!');
//     setTimeout(() => {
//         console.log('Pizza is delivered');
//     }, 5000);
// }
// preparePizza();
// to avoid calback hell we use promises
function preparePizza() {
    return new Promise((resolve) => {
        console.log('Preparing Pizza');
        setTimeout(() => {
            console.log('Pizza is being prepared');
            resolve('');
        }, 3000);
    });
}
function orderPizzaProm() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Order Placed!');
            resolve('');
        }, 1000);
    });
}
// orderPizzaProm().then(preparePizza)//resolve function
let result = await orderPizzaProm();
let result1 = await preparePizza();
export {};
