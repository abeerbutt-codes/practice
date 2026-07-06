//factorial
 function factorial(number) {
     let result =1;
     for (let i=1;number>=i;number--){
 result=result*number;
     }
     return result
 }
 console.log(factorial(9))