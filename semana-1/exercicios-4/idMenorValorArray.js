const getIdOfTheLowestNumber = (arr) => {
    let lowestIdNumber = 0;
    let actualNum = 0;

    for(let i in arr){
        actualNum = arr[i]
        if(actualNum>arr[++i]){
            lowestIdNumber=i
        }

    }

    return lowestIdNumber


}

console.log(getIdOfTheLowestNumber([2, 3, 6, 7, 10, 1]));
console.log(getIdOfTheLowestNumber([2,0,0,1]));
console.log(getIdOfTheLowestNumber([2,5,0,1]));
console.log(getIdOfTheLowestNumber([2,5,55,1]));