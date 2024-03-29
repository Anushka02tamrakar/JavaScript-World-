//array which has radius of 4 circles, calculate the area of these radius.

const radius = [3,1,2,4]

const calculateArea = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output;
}
console.log(calculateArea(radius));
//what if code exceeds?
//for circumference
const calculatecircumference = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output;
}
console.log(calculatecircumference(radius));


//for calculating diameter

const calculateDiameter = function(radius){
    const output = []
    for(let i =0; i<radius.length; i++){
        output.push(2 * radius[i])
    }
    return output;
}
console.log(calculateDiameter(radius));


/*this is not a good way we are repeating things again and again 
problem - repetition
           - 

*/