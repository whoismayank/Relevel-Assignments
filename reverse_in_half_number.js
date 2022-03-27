//reverse in half
// example : 123456->321654
const reverseInHalf = (n) => {
    let count = 0 ;
    let temp = n;
    while(temp) {
        temp = parseInt(temp/10);
        count++;
    }
    let second_half = 0;
    let first_half = 0;
    let half = count/2;
    while(count){
        if(count > half) {
            second_half = second_half*10 + n%10;
        } else {
            first_half = first_half*10+n%10;
        }
        n = parseInt(n/10);
        count--;
    }
    return Number(first_half.toString()+second_half.toString());
}

console.log(reverseInHalf(123456));