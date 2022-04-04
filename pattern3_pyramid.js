/*
n=5
    *       spaces=4 stars=1
   ***      spaces=3 stars=3
  *****     spaces=2 stars=5
 *******    spaces=1 stars=7
*********   spaces=0 stars=9

n=4
   * 				spaces = 3 			stars = 1
  ***				spaces = 2          stars = 3
 *****              spaces = 1          stars = 5
*******             spaces = 0          stars = 7

*/


const printPattern = (n) =>{
    let nr = n;
    let count_of_stars = 1;
    let count_of_spaces = n-1;   
    let pattern = '';
    for(let row=1; row<=nr; row++){
            //print spaces
            for(let sp=1; sp<=count_of_spaces; sp++){
                pattern += ' ';
            }
        //print stars
            for(let star=1; star<=count_of_stars; star++){
                pattern += '*';
            }
        
        //decrease space, increase stars
        count_of_spaces--;
        count_of_stars+=2;
        //print lines break
        pattern += "\n";
    }
    return pattern

}


const result = printPattern(5);
console.log(result);