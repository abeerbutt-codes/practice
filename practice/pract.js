// console.log("i am doing practice")
// //age checker(if else )
// let age =61.6;
// if (age <13) {
//     console.log("he is child")

// }
// else if(age>13&&age<20){
//     console.log("he is teenager")
// }
// else if(age>=20&&age<=60){
//     console.log("he is adult")
// }
// else{
// console.log("oo budha")
// }
//_______________________________________________________

// //even or odd
// function check(number) {
//     if (number%2==0) {
//  return "it is even number"

//     }
//     else{
//        return "odd "
//     }
// }
//_________________________________________________
// console.log(check(35))
//compare of three number and gice largest 
// function largest(n1,n2,n3) {
//     if (n1>n2&&n1>n3) {
//         console.log(n1, "is largest number")
//     }
//     else if(n2>n1&&n2>n3){
//         console.log(n2, "is largest number")
//     }
//     else{
//          console.log(n3, " is largest number")
//     }
// }
// console.log(largest(23,43,40))
//__________________________________________________
//table

// imp (``) itis template literals i have used below used for using expression variables in same code without using operator like+ for add
// let  n =3;
// for(let i=1;i<=10;i++){
//     console.log(`${n}*${i}=${n*i}`)
//}
//______________________________________________
//sum of 1 to 100
// let sum=0;
// for(let i=1;i<=100;i++){
//     
// console.log(`${sum}+${i}=${sum+i}`)
// sum=sum+i;
// }
//__________________________________________________________
// fizzbuzz game (div by3 qnd 5 print fizzbuzz or only 3 divid fizz and only 5 print buzz)
// for (let i = 1; i <= 50; i++) {
//     if  (i % 3 == 0&&i % 5 == 0)    {
//         console.log("fizz")


//     } else if (i % 3 == 0) {

//         console.log("buzz")

//     }
//     else if(i % 5 == 0){
//          console.log("fizzbuzz")
//     }
//     else{
//         console.log(i)
//     }
// }
//_____________________________________________________________
// // count vowels
// function countvovels(name) {
//     let count = 0;
//     name=name.toLowerCase();
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] == "a" ||
//             name[i] == "e" ||
//             name[i] == "i" ||
//             name[i] == "o" ||
//             name[i] == "u"
//         )
//         count++;
// }
// return count;

// }
// console.log(countvovels("abeerbutt"))
//________________________________________________________
// reverse string
// function reversestr(str){
//     let reversed="";
//     for (let i =str.length-1 ; i >=0; i--) {
//        reversed+=str[i];
//        // console.log(reversed)
//     }
//     console.log(reversed)
// } 
// reversestr("nomanalina")
//__________________________________________________________________________   
//  reverse sentense
//    function revsent(sentense) {
//     let words=sentense.split(" ");
//     let result="";
//     for(let i=words.length-1;i>=0;i--){

//         result+=words[i];
//         if(i!=0)
//             result+=" "
//     }
//     console.log(result)
//    }
// revsent( "i am abeer")
// ______________________________________________________________________
// reverse  word and sentence same time
// function revboth(sentense) {
//     let words=sentense.split(" ");
//     let result=""
//     for (let i = words.length-1; i >=0; i--) {
//         let reverseword="";
//         for(let j=words[i].length-1;j>=0;j--){
//             reverseword+=words[i][j]

//         }
//         result+=reverseword;
//        if(i!=0){
//         result+=" "
//        }


//     }

// return result


// }
// console.log(revboth("i love js"))
//______________________________________________________________________
//factorial
// function factorial(number) {
//     let result =1;
//     for (let i=1;number>=i;number--){
// result=result*number;
//     }
//     return result
// }
// console.log(factorial(9))
//_________________________________________________________________________
//check if it is paradrom or not
// function ispara(word) {
//     word=word.toLowerCase();
//     let reversed="";
//     for(let i=word.length-1;i>=0;i--){
//         reversed+=word[i];
//     }
//    if (word===reversed) {
//     console.log("it is palidrom")
//    }
//    else{
//      console.log("it is not palidrom")
//    }
// }
// ispara("madam");
//________________________________________________________
//prime number
// function isprime(number) {
// if(number<=1){
//     console.log(`${number}is not prime number`)
//     return
// }
// for (let i =2;i<number;i++){
//     if(number%i==0){
//          console.log(`${number}is not prime number`)
//          return
//     }
//     else{
//          console.log(`${number}is  prime number`)
//     }
// }


// }
// isprime(8)
//_________________________________________________________
//temperature converter
// function celcius(temp) {
//     let ferenhite=""
//     ferenhite=(temp*9/5)+32
//     return ferenhite
// }
// function ferenhite(temp) {
//     let celcius=""
//     celcius=(temp-32)*5/9
//     return celcius}
//  console.log(ferenhite(-102))
//_______________________________________________________________

//number guessing game (for taking input we use require readline ),creteInterface that 
// connect to terminal.
//(.question) it will ask the user and wait for answere until u enter it,made 2 functions 
// here.
// answere in checkguess funtion will go like a string then convert into number by 
// let guess=Number(answere).
//at the r1.close will end connection  to terminal







// const readline=require("readline");
// let r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// let secret=27;
// function askguess() {
//     r1.question("enter your guess",checkguess)
// };
// function checkguess(answere) {
//     let guess=Number(answere);
//     if(guess>secret){
//         console.log(answere +" is greater than secret number")
//        askguess();
//     }
//     else if(guess<secret){
//         console.log(answere +" is shorter than secret number")
//         askguess();
//     }
//     else{
//         console.log(answere +"is match to secret number" )
//         r1.close();
//     }

// }
// askguess();


//password taking and chheck wheter t is valid or not
// const readline = require("readline");
// let r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// function askpass() {
//     r1.question("enter password: ", check)

// }
// function check(password) {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNumber = false;
//     if (password.length<8){
//         console.log("password must contain 8 characters")
//         return askpass();

//     }
//     for(let i=0;i<password.length;i++){
//         let ch= password[i];
//         if (ch>="A"&&ch<="Z"){
//             hasUpper=true; 
//         }
//         else if(ch>="a"&&ch<="z"){
//             hasLower=true;
//         }
//         else if(ch>="0"&&ch<="9"){
//             hasNumber=true;
//         }
//     }
//     if (hasLower&&hasUpper&&hasNumber){
//         console.log("password is valid")
//     }
//     else{
//         console.log("password is  not valid")
//         if (!hasUpper){
//             console.log ("upper letter is missing")
//         }
//           if (!hasLower){
//             console.log ("lower letter is missing")
//         }
//           if (!hasNumber){
//             console.log ("number is missing")
//         }

//     }
// r1.close();
// }
// askpass();
//______________________________________________________________________
//faulty calculator
/*which perform wrong operation
 + -->-,
* -->+,
- -->/,
/ -->**
*/
// const readline = require("readline");

// const c1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// function faultycalculator(a, operator, b) {
//     a = Number(a)
//     b = Number(b)
//     let random = Math.random()
//     let obj = {
//         "+": "-",
//         "-": "/",
//         "*": "+",
//         "/": "**"
//     };
//     if (random < 0.1) {
//         operator = obj[operator]
//         console.log("faulty calculator activated")
//         console.log( "random number is " ,random)

//     }
//     let result;

//     switch (operator) {
//         case "+":
//             result = a + b;
//             break;
//         case "-":
//             result = a - b;
//             break;
//         case "*":
//             result = a * b;
//             break;
//         case "/":
//             result = a / b;
//             break;
//         case "**":
//             result = a ** b;
//             break;
//         default:
//             console.log("Invalid operator");
//             c1.close();
//             return;
//     }
//     console.log("result", result)
//     console.log("random number is",random)
//     c1.close()
// }




//     c1.question("enter 1st number", function (a) {
//         c1.question("enter operator", function (operator) {
//             c1.question("enter 2nd number", function (b) {

//                 faultycalculator(a, operator, b)

//             });
//         });
//     });
