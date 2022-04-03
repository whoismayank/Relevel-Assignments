
//remove duplicate values from array and sort in ascending
const removeDuplicate = (inputArr) =>{
    let newArr = []
    for(val of inputArr){
        if(newArr.findIndex((vall)=> vall == val) === -1) {
            newArr.push(parseInt(val))
        }
    }
    return newArr.sort((a,b)=>a-b)
}
var inputArr = [2, 2, 1, 8, 5, 2, 6];
op = removeDuplicate('2 3 5 3 9 7 5'.split(' '))
console.log(op.join(' '))