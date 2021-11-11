
const removeFromArray = function(array, arg, argtwo, argthree, argfour) {
    for (let j = 0; j < array.length; j++) {
        if (arg === array[j]){
            array.splice(j,1);
        }
        if (argtwo === array[j]){
            array.splice(j,1);
        }
        if (argthree === array[j]){
            array.splice(j,1);
        }
        if (argfour === array[j]){
            array.splice(j,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
