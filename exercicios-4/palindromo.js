const isPalindrome = (word) => {
    const lettersReversed = [...word].reverse()
    const letters = [...word]
    const repeatedLetters = []
    for(let i in letters) {
        if(letters[i]===lettersReversed[i]){
            repeatedLetters.push(true)
        }
    }
    if(repeatedLetters.length===letters.length){
        return true
    }

    return false
}

console.log(isPalindrome("arara"));
console.log(isPalindrome("amor"));
console.log(isPalindrome("aaa"));
console.log(isPalindrome("palindromo"));
console.log(isPalindrome("casa"));
console.log(isPalindrome("dragao"));