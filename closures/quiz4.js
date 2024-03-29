// are parameters closed over?
// parameters can be passed this way 
// Remember that the function needs to be returned to do this

function outer(b){
    function inner(){
        console.log(a,b)
    }
    let a = 10;
    return inner;
}
var close = outer('Hello  world');
close()

//this is because inner function forms a closure out of its scope.