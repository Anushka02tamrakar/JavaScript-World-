// reduce filter - used when we have to iterate over the array and come up with the single solution. ex- sum of array, larget element in the array, smallest ele in the array etc.
//reduce fun takes two values

//sum 
const arr = [5,1,3,2,6]

//traditional way
function sum(x){
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
console.log(sum(arr));

//using reduce hof



const output = arr.reduce(function(acc, curr){
    acc += curr;
    return acc;
}, 0);
console.log(output)

// acc parameter is similar to (sum) var that keeps value
// curr parameter is just like iterator(i) which iterating in the array 
//0 is just the intitial value of acc just like sum has 0.