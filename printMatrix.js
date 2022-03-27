
const printMatrix = (n) => {
    let matrix='';
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            matrix += '*'
        }
        matrix+= '\n';
    }

    return matrix;
}
console.log(printMatrix(5));