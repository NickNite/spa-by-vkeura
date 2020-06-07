export const requiredSymbol = value => {
    if (value) return undefined;
    return 'Required Symbol';

};


export const maxLengthField = max => value => {
    if (value.length > max) return `Max symbols is ${max}`;
    return undefined;
};

export const minLengthField = min => value => {
    if (value.length < min) return `Min symbols is ${min}`;
    return undefined;
};