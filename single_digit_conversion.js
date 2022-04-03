/*
Single Digit Conversion

Problem Statement
Seetha is attending interview for an ABC company and in the logical round they ask to write a program to convert the double or triple digit number by adding number itself until the number changed to single digit.

Explanation
For the below sample input the series is 1 2 3 5 12 15 19
12  => 1 + 2 = 3
15 => 1 + 5 = 6
19 => 1 + 9 = 10 => 1 + 0 = 1
Output is 1 2 3 5 3 6 1

Input Format
Input should be series of number

 

Output Format
    Missing number from the series    

 

Sample Input 1 :
1
1 2 3 5 12 15 19
  
output :  

1 2 3 5 3 6 1

Sample Input 2 :
2
2 3 48 68 75 87
1 2 73 4 5 86 88

output :  

2 3 3 5 3 6
1 2 1 4 5 5 7
*/


const add = (arr) =>{
    return arr.reduce((acc, val)=> {
        return acc+=Number(val);
    }, 0);
}
const makeSingleDigit = (str) =>{
    const arr = str.split(' ');
    const result_arr =[];
    for(val of arr){
        let temp = val;
        while(temp>9){
            temp = add((temp.toString()).split(''))
        }
        result_arr.push(temp.toString())
    }
    return result_arr;
}
const result = makeSingleDigit('1 2 73 4 5 86 88');
console.log(result)