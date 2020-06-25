// Create a funtion that takes a word and returns the
// word as it's pyglatin version. Pyglatin should take
// the first letter of the word, append it to the end
// and add 'ay' to the very end of the word.

function pyglatin(word) {
    const pyg = 'ay';
    if (word.length > 0) {
        const first = word[0];
        const transformed = word.slice(1, word.length) + first + pyg;
        return transformed;
    } else {
        return;
    }
}

module.exports = pyglatin;
