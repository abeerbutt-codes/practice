//compare of three number and gice largest 
 function largest(n1,n2,n3) {
     if (n1>n2&&n1>n3) {
         console.log(n1, "is largest number")
     }
     else if(n2>n1&&n2>n3){
         console.log(n2, "is largest number")
     }
     else{
          console.log(n3, " is largest number")
     }
 }
 console.log(largest(23,43,40))