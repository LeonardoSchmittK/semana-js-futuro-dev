function sumUntilNum(num){
    let sumAll = 0
    for(let i = num-num;i<=num;++i){
        console.log(sumAll+ " + " + i);
        sumAll+=i
    }

    return sumAll
}

console.log(sumUntilNum(10));
console.log(sumUntilNum(5));