const fibonacci = function(num) {
    let obj={}
    let present=1
    let last=0
    let sequenceNum=0
    for (let i=1;i<num;i++){
        sequenceNum=present+last
        last=present
        present=sequenceNum
    }
    console.log(sequenceNum)
    return sequenceNum
};
fibonacci(4)
// Do not edit below this line
module.exports = fibonacci;
