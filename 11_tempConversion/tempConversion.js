const convertToCelsius = function(temp) {
  const celsiusTemp=((temp-32)*(5/9)).toFixed(1)
  return +celsiusTemp
};

const convertToFahrenheit = function(temp) {
  const fahrenheitTemp=((temp*(9/5))+32).toFixed(1)
  return +fahrenheitTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
