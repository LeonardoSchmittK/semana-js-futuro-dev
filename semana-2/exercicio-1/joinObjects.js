function joinObjects(obj1,obj2){
    return {...obj1,...obj2}

}


console.log(joinObjects({firstName:"Leo",lastName:"Schmitt"},{exp:["REACT","JAVASCRIPT"]}));