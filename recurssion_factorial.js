//recursion

//wap to find the factorial

//factorial using the looping
// const factorial = (num) => {
//     let fac = 1;
//     while(num){
//         fac*=num;
//         num--
//     }
//     return fac;
// }


// using the recursion
const factorial = (num) => {
    //base case
    if(num === 1) {
        return num;
    } else {
        return factorial(num-1) * num;
    }
}
console.log(factorial(5))


