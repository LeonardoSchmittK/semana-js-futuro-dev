function getLongestName(arr){
    
    return arr.sort((a,b)=>b.length-a.length)[0]
}

console.log(getLongestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(getLongestName(["Leo","Eduardo","Annie","Nicolas","Hallex"]));