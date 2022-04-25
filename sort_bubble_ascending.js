//bubule sort

const arr = [12,2,3,4,5,6,7,8,9,10,11];


for(let i = 0; i<arr.length; i++) {
    let swap = false;
    for(let j = 0; j<arr.length; j++) {
        if(arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            swap = true
        }
    }
    if(!swap) {
        break;
    }
    console.log(arr)
}

console.log(arr)