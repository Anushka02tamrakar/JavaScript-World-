var x = 3;
function b(){
    var a = 20;
}

console.log(window.x) // 3
console.log(x); // 3
console.log(this.x); //3
console.log(a); //not defined


//whenever we use windows and this it points to the global execution so it automaticallt point to the global variable