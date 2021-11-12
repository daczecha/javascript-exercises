const add = function(a, b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for(let i = 0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for(let i = 0; i<arr.length; i++){
    product *= arr[i];
  }
  return product;
};

const power = function(a,b) {
  let power = 1;
  for(let i = 0; i < b; i++){
    power*=a;
  }
  return power;
};

const factorial = function(a) {
  let factorial = 1;
  for(let i = a; i>0; i--){
    factorial*=i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
