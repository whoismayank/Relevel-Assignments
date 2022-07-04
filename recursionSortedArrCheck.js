const checkArrayIsSorted = function(arr, i = 0) {
    // Base case
    if(i === arr.length -1) return true;

    // recursive call
    const result = checkArrayIsSorted(arr, i+1);

    // self work
    if(result && arr[i] < arr[i+1]) {
        return true;
    } else {
        return false;
    }
}

const result = checkArrayIsSorted([1,2,10,4,5,6,7,8,9,10]);
console.log(result);
