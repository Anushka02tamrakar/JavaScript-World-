const arr = [5,1,3,2,6]  // double - [10, 2, 6, 4,12]
function double(x){
    return x * 2
}
const output = arr.map(double)
console.log(output);