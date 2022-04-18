const AmstrongNumber = (inp) => {
	let op = 0;
	// use process.stdout.write("hello") to print the output
  	 //implement your  logic here - you dont have to return anything, print the output here
	let inpNum = parseInt(inp)
    while(inpNum) {
        let remain = inpNum%10;
        op+= remain**3;
        inpNum = parseInt(inpNum/10)
    }
	if (inp == op) {
		console.log(inp + " is an Armstrong number");
	}
	else {
		console.log(inp + " is not an Armstrong number");
	}
}

const inp = "153";
AmstrongNumber(inp);