function checkStrEnding(str,ending){

    return str.substring(str.length-ending.length) === ending
}

console.log(checkStrEnding("ROBERTO","RTO"));
console.log(checkStrEnding("leo","o"));
console.log(checkStrEnding("leo","e"));