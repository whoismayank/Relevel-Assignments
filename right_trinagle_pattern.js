const rightTriangle = (n) => {
    let trinagle = ''
    for(let row=0; row<n; row++) {
        for(let col=0; col<row; col++) {
            trinagle += '*'
        }
        trinagle += '\n'
    }    
    return trinagle;
}
console.log(rightTriangle(5))