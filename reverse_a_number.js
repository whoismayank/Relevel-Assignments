const reverse_a_number = (n) =>{
    let reverse = 0;
    while(n) {
        let remainder = n % 10;
        reverse  = (reverse*10) + remainder;
        n = parseInt(n/10);
    }    
}
reverse_a_number(12345678);