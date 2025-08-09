const fibonacci = function(num) {
    if(num<0){
        return "OOPS"
    }
    let a={0:0,1:1}

    for (let i=1;i<num;i++){
        a[i+1]=a[i-1]+a[i]
    }

    return a[num]
};
fibonacci("15")
// Do not edit below this line
module.exports = fibonacci;
