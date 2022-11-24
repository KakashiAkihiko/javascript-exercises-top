const convertToCelsius = function(tempFahren) {

  return Math.round(((tempFahren - 32) * 5/9)*10)/10;

};

const convertToFahrenheit = function(tempCel) {

  return (Math.round(((tempCel * (9/5) +32))*10) / 10);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



/*
how to round
var rounded = Math.round(number * 10) / 10
*/