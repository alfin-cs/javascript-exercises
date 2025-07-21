const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(array) {
  let sum=0
	for(let i=0;i< array.length ;i++){
    sum+=array[i]
  }
  return sum
};

const multiply = function(num) {
  let i=0
  let sum=1
  while (i<num.length){
    sum*=num[i]
    i++
  }
  return sum
};

const power = function(num1,num2) {
	return num1**num2
};

const factorial = function(num) {
	let i=1
  let sum=1
  while (i<=num){
    sum*=i
    i++
  }
  return sum
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
