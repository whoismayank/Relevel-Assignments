let tempArr = [];
const flattenArr = (arr) => {
    for(val of arr) {
        if(Array.isArray(val)){
            flattenArr(val)
        } else {
            tempArr.push(val);
        }
    }    
    return tempArr;
}

const input = [[1,2],3,4,5,[[6,7],8]];
const result = flattenArr(input);
console.log(result);