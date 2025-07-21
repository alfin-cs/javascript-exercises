const sumAll = function(start,end) {
    let sum=0
    if(start>end){
        [start,end]=[end,start]
    }
    start.isInteger
    
    for(let i=start;i<=end;i++){
        sum+=i
    }
    if(!((+end+1)!=end+1&&end<0)){
        return sum
    }
    return "ERROR"

};
console.log(sumAll(10, 2))
// Do not edit below this line
module.exports = sumAll;
