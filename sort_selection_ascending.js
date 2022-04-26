//selectionSort: ascending order 
const selectionSort = (arr) => {
    let n = arr.length
    for(let i = 0; i < n - 1; i++) {
        let minIndx = i;
        for(let j = i+1; j < n; j++) {
            if(arr[j] < arr[minIndx]) {
                minIndx = j;
            }
        }
        [arr[minIndx],arr[i]] = [arr[i], arr[minIndx]]
    }
    return arr;
}
const res = selectionSort([1,5,2]);
console.log(res);
