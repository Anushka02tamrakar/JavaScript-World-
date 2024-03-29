const users = [
    {firstName: "aman", lastName: "Saxena", age: 23},
    {firstName: "akit", lastName: "Roy", age: 23},
    {firstName: "anurag", lastName: "Sen", age: 23},
    {firstName: "Deepika", lastName: "Rani", age: 29},
    {firstName: "shurtu", lastName: "Bomen", age: 36},
    {firstName: "kratiya", lastName: "Aher", age: 36},
];
//arrow func
const output = users.filter(x => x.age < 30)
.map(x => x.firstName)

console.log(output)

//normal func
const output1 = users.filter(function(x){
   return x.age<30;
}).map(function(x){
    return x.firstName;
});
console.log(output);

//using reduce
const output2 = users.reduce(function(acc, curr){
    if (curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;

}, [])
console.log(output2)