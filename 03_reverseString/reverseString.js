let reversed = "";
const reverseString = function(str) {
    for(let i = str.length-1; i >= 0; i-- ){
        reversed = reversed + str[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
