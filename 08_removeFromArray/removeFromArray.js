const removeFromArray = function(array,...arg) {
    for (let i=0;i < array.length;i++){
        if(arg.includes(array[i])){
            array.splice(i,1)
            i--
        }
    }
    
    return array
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
