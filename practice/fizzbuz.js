// fizzbuzz game (div by3 qnd 5 print fizzbuzz or only 3 divid fizz and only 5 print buzz)
 for (let i = 1; i <= 50; i++) {
     if  (i % 3 == 0&&i % 5 == 0)    {
         console.log("fizz")
     } else if (i % 3 == 0){
         console.log("buzz")
     }
     else if(i % 5 == 0){
          console.log("fizzbuzz")
     }
     else{
         console.log(i)
     }
 }