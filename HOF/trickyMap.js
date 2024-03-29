//example

const users =[
    {firstName: "aman", lastName: "saxena", age: 23},
    {firstName: "akit", lastName: "roy", age: 23},
    {firstName: "anurag", lastName: "sen", age: 23},

];
const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);
