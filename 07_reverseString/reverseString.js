const reverseString = function(string) {
    let array=string.split("")
    let reverse=array.reverse()
    let reverseStr= reverse.join("")
    return reverseStr
};

// Do not edit below this line
module.exports = reverseString;
