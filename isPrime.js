const isPrime = (n) => {
    let prime = true;
    for(let i=2; i <= (n/2); i++) {
        if(n%i === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
console.log(isPrime(8));