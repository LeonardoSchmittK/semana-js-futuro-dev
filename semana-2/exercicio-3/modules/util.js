  function addZeros(num){
    const strNum = num+""
    let res=""
    const zeros = 11-strNum.length

    for(let i = 1;i<=zeros;++i){
        res+="0"
    }
    res+=strNum

    
    return +[...res].splice(0,11).join("")
}

 function sortArray  (array, type)  {
    type === 'crescent' ? array?.sort((a, b) => a - b) : array?.sort((a, b) => b - a);
    return array;
  };

   function convert_to_cpf (number)  {
    const numbers = number?.match(/\d/g)?.join('');
    const eleven_numbers = addLeadingZeros(numbers, 11);
    return cpfMask(eleven_numbers);
  };

  
  
   function cpfMask (cpf){
    cpf=cpf.replace(/\D/g,'');
    cpf=cpf.replace(/(\d{3})(\d)/,'$1.$2');
    cpf=cpf.replace(/(\d{3})(\d)/,'$1.$2');
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    return cpf;
  }

 function getCurrencyFormat(value){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    return formatter.format(value);
}


export {
    getCurrencyFormat,
    cpfMask,
    convert_to_cpf,
    addZeros,
    sortArray
}