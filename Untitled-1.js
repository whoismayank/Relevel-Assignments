//insertion sort
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let ele = arr[i];
        let j = i-1;
        while((j>=0) && (ele.localeCompare(arr[j]) == -1)) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = ele;
    }
    return arr;
}
const input = ['India','Australia', 'China', 'Russia', 'Brazil', 'Japan'];
const result = insertionSort(input);
console.log(result);