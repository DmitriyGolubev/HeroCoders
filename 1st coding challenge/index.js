function isUpperCaseFirstLetter(str){
    if(!str || typeof str !== 'string' || !/^[a-zA-Z]/.test(str)) return false;
    return str[0] === str.toUpperCase()[0];
}

console.log(isUpperCaseFirstLetter('Asd'))
console.log(isUpperCaseFirstLetter('asd'))
console.log(isUpperCaseFirstLetter('!asd'))
console.log(isUpperCaseFirstLetter({}))
console.log(isUpperCaseFirstLetter(''))

