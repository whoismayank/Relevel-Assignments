const sumOfAllDigit = (n) => {
    let output = 0;
    while(n) {
        output = output + (n%10);
        n = Number(n/10);
    }
    return output;
}
console.log(sumOfAllDigit(123));