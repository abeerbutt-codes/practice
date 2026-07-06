//password taking and chheck wheter t is valid or not
 const readline = require("readline");
 let r1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 })
 function askpass() {
     r1.question("enter password: ", check)

 }
 function check(password) {
     let hasUpper = false;
     let hasLower = false;
     let hasNumber = false;
     if (password.length<8){
         console.log("password must contain 8 characters")
         return askpass();

     }
     for(let i=0;i<password.length;i++){
         let ch= password[i];
         if (ch>="A"&&ch<="Z"){
             hasUpper=true; 
         }
         else if(ch>="a"&&ch<="z"){
             hasLower=true;
         }
         else if(ch>="0"&&ch<="9"){
             hasNumber=true;
         }
     }
     if (hasLower&&hasUpper&&hasNumber){
         console.log("password is valid")
     }
     else{
         console.log("password is  not valid")
         if (!hasUpper){
             console.log ("upper letter is missing")
         }
           if (!hasLower){
             console.log ("lower letter is missing")
         }
           if (!hasNumber){
             console.log ("number is missing")
         }

     }
 r1.close();
 }
 askpass();