//Проверка на наличие сомволов в инпуте (Check for the presence of characters in the input)
export const requiredSymbol = value => {
    if (value) return undefined;
    return 'Required Symbol';
};

//Проверка на максимальное количество символов в инпуте (Check for the maximum number of characters in the input)
export const maxLengthField = max => value => {
    if (value.length > max) return `Max symbols is ${max}`;
    return undefined;
};
//Проверка на минимальное количество символов в инпуте (Check for the minimum number of characters in the input)
export const minLengthField = min => value => {
    if (value.length < min) return `Min symbols is ${min}`;
    return undefined;
};