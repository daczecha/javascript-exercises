const getTheTitles = function(objArr) {
    let arr = [objArr.length];
    for(let i = 0; i<objArr.length; i++){
        arr[i] = objArr[i].title;
    }
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
