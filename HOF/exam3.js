//optimzation of example 2
//so just abstaract the logic
//beauty of functional programming - pure functions, composition of func, reusability, modularity

const radius = [3,1,2,4]

const area = function(radius){
    return Math.PI * radius * radius
};
const circumference = function(radius){
    return 2* Math.PI * radius
}
const diameter = function(radius){
    return 2*radius
};

const calculate = function(radius, logic){
    const output = []
    for(let i = 0; i<radius.length ; i++){
        output.push(logic(radius[i]));

    }
    return output;
};
console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))