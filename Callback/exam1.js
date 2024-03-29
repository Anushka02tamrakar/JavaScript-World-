function greet(name, param){
    console.log('Hi' + name);
    param()
}
function sayHello(){
    console.log('Hello world')
}
greet('peter', sayHello)

/*A callback function in JavaScript is a function that is passed as an argument to another function. This allows a function to call another function. A callback function can run after another function has finished.
callback func used in asynchronous programming language.
*/