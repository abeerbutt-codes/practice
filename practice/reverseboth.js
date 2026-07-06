//reverse  word and sentence same time
 function revboth(sentense) {
     let words=sentense.split(" ");
     let result=""
     for (let i = words.length-1; i >=0; i--) {
         let reverseword="";
         for(let j=words[i].length-1;j>=0;j--){
             reverseword+=words[i][j]

         }
         result+=reverseword;
        if(i!=0){
         result+=" "
        }


     }

 return result


 }
 console.log(revboth("i love js"))