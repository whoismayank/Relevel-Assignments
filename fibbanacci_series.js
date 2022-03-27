const fibbnacciTillN = (n) => {
    let current = 0;
    let next = 1;
    for (let i = 0; i < n; i++) {
        let n3 = current + next;
        current = next;
        next = n3;
        //fibbnacci series
        console.log(next)
    }
}
fibbnacciTillN(10)