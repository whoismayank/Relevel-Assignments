// Program to check if a number is odd or even (Submittable assignment)"
const checkOddEven = (num) => { 
    if(Number(num) % 2 === 0 ){
        return `Number is Even`;
    } 
    return `Number is Odd`;
}

const result = checkOddEven(2);
console.log(result);