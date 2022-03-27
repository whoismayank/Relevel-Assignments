const findGCD = (n,n1) => {
    let gcd
    for(let i=0; i<=n && i<=n1; i++) {
        if(n%i === 0 && n1%i === 0) {
            gcd = i;
        }
    }
    return gcd;
}
const result = findGCD(36,72);