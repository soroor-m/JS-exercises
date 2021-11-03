const findShort = string => {
    const words = string.split(' ');
    let wordsLength = [];
    for (let i = 0; i < words.length; i++) {
        wordsLength.push(words[i].length)
    }
    return Math.min(...wordsLength);
}