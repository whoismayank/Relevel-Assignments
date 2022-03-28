///remove duplicate from an array without using new Set
const arr = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
const removeDuplicateFromArray = (arr) => {
    let obj ={}; 
    for(val of arr) {
        if(obj[val]) {
            obj[val]+=1
        } else {
            obj[val]=1
        }
    }
    return Object.keys(obj); ///return array of keys 
}
console.log(removeDuplicateFromArray(arr));