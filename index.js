function checkPalindrome(str) {
    //need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
    const regEx= /[\W_]/g; 
    const processedStr = str.toLowerCase().replace(regEx, '');

   let opoStr = processedStr.split('').reverse().join('');
   if (opoStr === processedStr) {
      console.log('Palindrome');
   } 
   else {
      console.log('Not Palindrome');
   }
}

checkPalindrome('eye')
checkPalindrome('-eye')
checkPalindrome('My age is 0, 0 si ega ym.')
checkPalindrome('five|\_/|four')
