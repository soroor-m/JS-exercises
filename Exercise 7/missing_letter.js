const findMissingLetter = array => {
    const lowerArr = array.map(e => e.toLowerCase());
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < lowerArr.length; i++) {
        const alphabetIndex = alphabet.indexOf(lowerArr[i])
        if (lowerArr[i + 1] !== alphabet[alphabetIndex + 1]) {
            return array[0] === lowerArr[0] ? alphabet[alphabetIndex + 1] : alphabet[alphabetIndex + 1].toUpperCase();
        }
    }

}