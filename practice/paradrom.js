//check if it is paradrom or not
 function ispara(word) {
     word=word.toLowerCase();
     let reversed="";
     for(let i=word.length-1;i>=0;i--){
         reversed+=word[i];
     }
    if (word===reversed) {
     console.log("it is palidrom")
    }
    else{
      console.log("it is not palidrom")
    }
 }
 ispara("madam");