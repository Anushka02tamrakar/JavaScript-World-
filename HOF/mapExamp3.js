const arr = [5,1,3,2,6]
//binary - ["101", "1", "11", "10", "110"]


/*function binary(x){
    return x.toString(2)
}

const output =  arr.map((x)=> x.toString(2);

*/
const output =  arr.map(function binary(x){
    return x.toString(2)
});
console.log(output);