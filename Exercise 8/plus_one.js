const upArray = arr => {
    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 9 || arr[i] == null || arr[i] == NaN) {
            return null;
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == 9) {
            arr[i] = 0
        } else {
            arr[i]++
            return arr
        }
    }

    arr.unshift(1)
    return arr;
}