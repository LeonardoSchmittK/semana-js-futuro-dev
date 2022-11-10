const getIdOfTheHighestNumber = (arr) => {
        let greatestNumberId = 0;
        let actualNum = 0;

        for(let i in arr){
            actualNum = arr[i]
            if(arr[greatestNumberId]>actualNum){
                greatestNumberId = i
            }

        }

        return --greatestNumberId


}

console.log(getIdOfTheHighestNumber([2, 3, 6, 7, 10, 1]));
console.log(getIdOfTheHighestNumber([2,0,0,1]));
console.log(getIdOfTheHighestNumber([2,5,0,1]));
console.log(getIdOfTheHighestNumber([2,5,55,1]));