///generate all the subsequence array of an input array


const generateSubsequences = (arr, index) => {
    
    //base case
    //when array have only last element
    if(index === arr.length-1) {
        let t = [];
        t.push(arr[index]);
        t.push([]);
        return t;
    }

    let res = generateSubsequences(arr, index+1);
    let tempArr = [];
    for(i in res) {
        tempArr.push(res[i]);
        let v  = Object.assign([],res[i]);
        v.unshift(arr[index]);
        tempArr.push(v);
    }
    return tempArr;
}


const inputArr = [1,2,3];
const result = generateSubsequences(inputArr, 0);

console.log(result)