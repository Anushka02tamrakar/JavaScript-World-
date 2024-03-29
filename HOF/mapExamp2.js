const arr = [3,5,3,2,1]
// triple - [9, 15, 9,6,3]


function triple(x){
    return x*3
}
const output = arr.map(triple)
console.log(output);