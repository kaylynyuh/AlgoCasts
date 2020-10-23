// Given a string s, find the length of the longest substring without repeating characters.

 function lengthOfSubstr (str) {
   let res = "";
   for (let i = 0; i < str.length; i++) {
     // if the character already exists, skip
     // the character and continue iterating
     if (res.includes(str[i])) {
       i = i + 1; 
     } else {
       res += str[i];
     }
   }
   return res.length;
 }