const solution = string => {
    const words = string.split('');
    const result = words.map(el => el === el.toUpperCase() ? ' ' + el : el);
    return result.join('');
}