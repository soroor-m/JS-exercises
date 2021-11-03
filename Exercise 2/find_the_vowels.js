const vowelIndices = (word) => {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'u', 'U', 'o', 'O', 'y', 'Y'];
    const result = [];
    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            result.push(i + 1)
        }
    }
    return result;
};