//faulty calculator
/*which perform wrong operation
 + -->-,
* -->+,
- -->/,
/ -->**
*/
 const readline = require("readline");

 const c1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 function faultycalculator(a, operator, b) {
     a = Number(a)
     b = Number(b)
     let random = Math.random()
     let obj = {
         "+": "-",
         "-": "/",
         "*": "+",
         "/": "**"
     };
     if (random < 0.1) {
         operator = obj[operator]
         console.log("faulty calculator activated")
         console.log( "random number is " ,random)
     }
     let result
     switch (operator) {
         case "+":
             result = a + b;
             break;
         case "-":
             result = a - b;
             break;
         case "*":
             result = a * b;
             break;
         case "/":
             result = a / b;
             break;
         case "**":
             result = a ** b;
             break;
         default:
             console.log("Invalid operator");
             c1.close();
             return;
     }
     console.log("result", result)
     console.log("random number is",random)
     c1.close()
 }
