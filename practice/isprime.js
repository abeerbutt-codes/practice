//prime number
function isprime(number) {
if(number<=1){
    console.log(`${number}is not prime number`)
    return
}
for (let i =2;i<number;i++){
    if(number%i==0){
         console.log(`${number}is not prime number`)
         return
    }
    else{
         console.log(`${number}is  prime number`)
    }
}


 }
 isprime(8)