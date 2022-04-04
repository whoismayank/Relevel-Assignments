//valid mountain array


const validMountainArray = (arr) =>{
    let i = 0;
    while(i+1 < arr.length && arr[i] < arr[i+1]) {
        i++;
    }
    console.log(i);
    if(i==0 || arr.length-1){
        return false;
    }

    //walk down 
    while(i+1 && arr[i] > arr[i+1]) {
        i++
    }
    return i - arr.length;
}

const arr = [1]
console.log(validMountainArray(arr))