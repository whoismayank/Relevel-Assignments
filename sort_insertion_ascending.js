//insertion sort
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let ele = arr[i];
        let j = i-1;
        while((j>=0) && (ele < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = ele;
    }
    return arr;
}
const input = [5,4,1,6,8,2];
const result = insertionSort(input);
console.log(result);