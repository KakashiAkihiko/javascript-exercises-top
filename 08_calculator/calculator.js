const add = function(num1, num2) {
  
  return num1+num2;
	
};

const subtract = function(num1, num2) {

  return num1-num2;
	
};

const sum = function(numArray) {
  let result = 0;
  
  for(let i = 0; i<numArray.length; i++){
    result += numArray[i];
  }
  return result;
	
};

const multiply = function(numArray) {

  if(numArray.length === 0){
    return 0;
  }

  let result = 1;
  for(let i = 0; i<numArray.length; i++){
    result *= numArray[i];
  }
  return result;

};

const power = function(num1, num2) {

  return Math.pow(num1, num2);
	
};

const factorial = function(numToFactorial) {

  if(numToFactorial === 0 || numToFactorial === 1){
    return 1;
  }

  let result = 1;

  for(let i = 1; i<numToFactorial+1; i++){
    result *= i;
  }
  return result;
	
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
