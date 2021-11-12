const palindromes = function (str) {
    str = str.split(' ').join('').split(',').join('').split('!').join('').split('.').join('');
    str = str.toString().toLowerCase();
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[str.length-1-i]){
            
        }else{
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
