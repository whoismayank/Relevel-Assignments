
// function composition
// const mult = (a,b) =>{
//         return a*b;
// }
// const sum = (a,b) =>{
//     return a+b;
// }
// console.log(4, mult(3,2));


//currying in javascript

// const add = (a) => {
//         return (b) => {
//             return (c) => {
//                 return a+b+c;
//             }
//         }
// }
// console.log(add(1)(4)(5))


//infinite currying in javascript
// const add = (a) => {
//     return (b) => {
//         if(b) return add(a+b)
//         return a;
//     }
// }
// console.log(add(5)(5)(5)())
//immediately/anonymous invoked function in javascript

(function(txt){
    console.log(txt)
}('Hello anonymous function'))