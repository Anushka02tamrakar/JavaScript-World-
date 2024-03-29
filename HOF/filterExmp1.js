//filter all the odd values

const arr = [5,1,24,7,8]
function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2===0;
}
const output = arr.filter(isOdd)
console.log(output)

const output2 = arr.filter(isEven)
console.log(output2)

