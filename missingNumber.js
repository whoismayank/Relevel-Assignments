// missing number



///way 1
const missingNumber = (arr) => {
    let n = arr.length;
    while(n > -1){
        if(arr.findIndex((val)=> val==n) < 0) {
            return n;
            break;
        }
        n--;
    }

}

//way 2 //


const nums = [0,1];
console.log(missingNumber(nums))