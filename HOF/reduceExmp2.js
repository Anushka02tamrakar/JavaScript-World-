//maximum value in the array

const arr = [5,1,3,2,4,8];


function findmax(arr){
    let  max = 0
    for(let i =0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findmax(arr));

const output = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr
    }
    return acc;
}, 0);
console.log(output);
