function getMostNumberOcurrences(arr){
    const eachNumberOcurrence = [
    ];

    for(let i in arr){
        let hasArr = eachNumberOcurrence.filter(val=>val.number===arr[i]).length===1
       if(!hasArr){
        eachNumberOcurrence.push({number:arr[i],occurrences:1})
       }else {

        eachNumberOcurrence.filter(val=>val.number===arr[i])[0].occurrences++
       }
    }

    return eachNumberOcurrence.sort((a,b)=>b.occurrences-a.occurrences)[0].number
}

console.log(getMostNumberOcurrences([2, 3, 2, 5, 8, 2, 3]));
console.log(getMostNumberOcurrences([2,5,7,5]));