const sortArray = array => {
    let odd = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odd.push(array[i]);
        }
    }
    odd.sort((a, b) => a - b);
    let oddIndex = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 !== 0) {
            array[j] = odd[oddIndex];
            oddIndex++
        }
    }
    return array;
}  