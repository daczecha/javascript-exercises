const sumAll = function(first, second) {
    let sum = 0;
    if( typeof first !== "number" ||
        typeof second !== "number"||
        (first<0 || second < 0)
    )
    {
        return "ERROR";
    }else{
        if(first > second){
            for(let i = second; i <= first; i++){
                sum = sum + i;
            }
        }else{
            for(let i = first; i <= second; i++){
                sum = sum + i;
            }
        }
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
