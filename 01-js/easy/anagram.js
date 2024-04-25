/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  lendth1=str1.length;
  lendth2=str2.length;
  if(length!=length2){
    return false;
  }
  else{
  
    for(let i=0; i<length1; i++){
    for(let j=0; j<length2; j++){
      if(str1[i]==str2[j]){
        return true;
      }
      else{
        return false;
      }
    }
  }
  

}

module.exports = isAnagram;
