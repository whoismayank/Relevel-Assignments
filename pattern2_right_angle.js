//pattern 1
/* 
1. n=5
    *              
    * * 
    * * *
    * * * * 
    * * * * *
    
2. n=3
    * 
    * * 
    * * * 
*/



const printPattern = (n) =>{
    let pattern = '';
    let nr = n; //nr: number of rows in the pattern
    let nc = 1; //nc: number of columns in the pattern
    for(let row=1; row<= nr; row++) {
        for(let column=nc; column<= row; column++) {
            pattern += '* ';
        }
        pattern += '\n';
    }
    return pattern;
}
const result = printPattern(5);
console.log(result);