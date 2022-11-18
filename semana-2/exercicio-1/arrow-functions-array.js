let numeros = [25, 64, 4, 9, 81, 36, 49, 1, 100, 121, 16 ];

const getDoubleFromNums = (arr) => {
    return arr.map(n => n**2).sort((a,b)=>a-b) // dobrar os numeros e ordenar os resultadosde maneira crescente
}

const getHalfFromNums = (arr) => {
    return arr.map(n => Math.floor(n/2)).sort((a,b)=>a-b) // dividir os números por 2 e ordenar os resultadosde maneira crescente
}

const getSquareRootsFromNums = (arr) => {
    return arr.map(n => Math.sqrt(n)).sort((a,b)=>a-b) // encontrar as raízes quadradas dos numeros e ordenar os resultadosde maneira crescente
}

console.log(getDoubleFromNums(numeros));
console.log(getSquareRootsFromNums(numeros));
console.log(getHalfFromNums(numeros));