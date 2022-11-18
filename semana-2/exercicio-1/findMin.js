function findMin(arr){
    return arr.sort((a,b)=>a-b)[0] // encontrar o minimo valor
}

console.log(findMin([5,10,3,6,1]));