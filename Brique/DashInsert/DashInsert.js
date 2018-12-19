function DashInsert(num){
    
    var array = num.split("");
    var result = array[0];
    var checkNum = array[0];
    
    for(var i = 1; i < array.length; i++){
        if(array[i]%2 == 0 && checkNum%2 == 0){
        result += "*";
        }
        
        else if(array[i]%2 == 1 && checkNum%2 == 1){
        result += "-";
        }
        
        result += array[i];
        checkNum = array[i];
    }
    return result;
}


console.log(DashInsert("4546793"));