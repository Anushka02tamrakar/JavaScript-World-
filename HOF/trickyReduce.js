//emaple of reduce - how many people  of particular age
//output {23: 3, 29: 1, 60: 1, 36: 2}
const users = [
    {firstName: "aman", lastName: "Saxena", age: 23},
    {firstName: "akit", lastName: "Roy", age: 23},
    {firstName: "anurag", lastName: "Sen", age: 23},
    {firstName: "Deepika", lastName: "Rani", age: 29},
    {firstName: "shurtu", lastName: "Bomen", age: 36},
    {firstName: "kratiya", lastName: "Aher", age: 36},
];
const output = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
                     
    }else{
        acc[curr.age] = 1;
    }
    return acc;
    
},{})
console.log(output);