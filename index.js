// function checkPalindrome(str) {
//     //need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
//     const regEx= /[\W_]/g; 
//     const processedStr = str.toLowerCase().replace(regEx, '');

//    let opoStr = processedStr.split('').reverse().join('');
//    if (opoStr === processedStr) {
//       console.log('Palindrome');
//    } 
//    else {
//       console.log('Not Palindrome');
//    }
// }

// checkPalindrome('eye')
// checkPalindrome('-eye')
// checkPalindrome('My age is 0, 0 si ega ym.')
// checkPalindrome('five|\_/|four')

document.getElementById('check-btn').addEventListener('click',()=>{
    // get the inout value and strip and process it
    const inputValue = document.getElementById('text-input').value;
    const cleanedUpInput= cleanUp(inputValue);

    // check if cleaned up value is palindrome
    const isPalindrome = checkPalindrome(cleanedUpInput)

    // display the result on the page
    displayResult(inputValue, isPalindrome);

})

// clean uo func to remove non alphanumberic chars and convert to lower case
function cleanUp(str) {
    const regEx= /[\W_]/g; 
    return str.replace(regEx, '').toLowerCase();
}

// palindrome checker func

function checkPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// display result func

function displayResult(input, isPalindrome){
    const resut = document.getElementById('result');
    const message = isPalindrome ? `Yes, ${input} is a palindrome` : `No, ${input} is not a palindrome`;
    resut.textContent = message;
}