function a(){
    var b=10;
    c();
    function c(){
        console.log(b); // trying to find b in local memory of c it wont find so js engine goes to the lexical environment of its parent c which is a so it will go the a and it finds b over there so it prints 10.
        
    }
}
a();
console.log(b) // In this case this throw error because b is not defined in the lexical environment. 

// 10 
/* scope is where you can access specific variable and a function  
1. C function is lexically inside a
2. a is lexically inside lexical envi of glbal. */