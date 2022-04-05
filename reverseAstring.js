/* 
Program to reverse a string
Example: 
input: Mahendra
output: ardnehaM ​​​

*/
const reverseAstring = (str) => {
    let reverse = '';
    for(let i=str.length-1; i >= 0; i--) {
        reverse+= str.charAt(i);
    }    
    return reverse;
}
const input = 'Mahendra'
console.log(reverseAstring(input))