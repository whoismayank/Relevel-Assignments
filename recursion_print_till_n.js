//print sequence
/*
ex: n=5;
output: 1 2 3 4 5
*/
const printTillN = (num) => {
    if(num === 0) {
        return 1;
    }
    printTillN(num-1);
    console.log(num)
}
printTillN(5)