//check number is armstrong
const isArmstrong = (n) => {
    let result = 0;
    let temp = n;
    while (temp) {
        result += (temp%10)**3;
        temp = parseInt(temp/10);
    }
    if(result === n) {
        return true
    }
    return false;
}
console.log(isArmstrong(153));