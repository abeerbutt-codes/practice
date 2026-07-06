 //count vowels
 function countvovels(name) {
     let count = 0;
     name=name.toLowerCase();
     for (let i = 0; i < name.length; i++) {
         if (name[i] == "a" ||
             name[i] == "e" ||
             name[i] == "i" ||
             name[i] == "o" ||
             name[i] == "u"
         )
         count++;
 }
 return count
 }
 console.log(countvovels("abeerbutt"))