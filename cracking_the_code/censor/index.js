// Write a function called censor that takes two strings, 
// text and word, as input. It should return the text with 
// the word you chose replaced with asterisks. For example:
// censor("this hack is wack hack", "hack") ```
// should return: "this **** is wack ****
//
// Assume your input strings won’t contain 
// punctuation or upper case letters.
// The number of asterisks you put should correspond 
// to the number of letters in the censored word.

function censor(text, word) {
    let words = word.split();
    let result = '';
    let stars = '*' * word.length;
    let count = 0;
    for(i in words) {
        if ( i === word) {
            words[count] = stars;
        }
        count += 1;
    }
    result = words.join(' ');
    return result;
}

console.log(censor('this hack is wack', 'hack'));

module.exports = censor;
