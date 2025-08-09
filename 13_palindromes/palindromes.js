const palindromes = function (str) {
    str=str.replace(/[^\w]|_/g,"").toLowerCase()
    str
    let arr=str.split("")
    let reverse=arr.slice().reverse()
    console.log(arr)
    console.log(reverse.join(""))
    console.log(str==reverse.join(""))
    return str===reverse.join("")
};
console.log(palindromes('Ala!'))
// Do not edit below this line
module.exports = palindromes;
