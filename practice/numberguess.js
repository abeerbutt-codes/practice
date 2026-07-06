/*number guessing game (for taking input we use require readline ),creteInterface that 
// connect to terminal.
//(.question) it will ask the user and wait for answere until u enter it,made 2 functions 
// here.
// answere in checkguess funtion will go like a string then convert into number by 
// let guess=Number(answere).
//at the r1.close will end connection  to terminal*/







const readline=require("readline");
let r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let secret=Math.floor(Math.random()*100)+1
    
;
function askguess() {
    r1.question("enter your guess",checkguess)
};
function checkguess(answere) {
    let guess=Number(answere);
    if(guess>secret){
        console.log(answere +" is greater than secret number")
       askguess();
    }
    else if(guess<secret){
        console.log(answere +" is shorter than secret number")
        askguess();
    }
    else{
        console.log(answere +"is match to secret number" )
        r1.close();
    }

 }
 askguess()