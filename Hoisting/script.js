//console.log(x); //throw error x is not defined
getName(); // imvoking even before initialization
function getName(){
    console.log("Namaste JavaScript")
}
var x = 8;
console.log(x); //undefined, trying acces when no value is given
getName();
console.log(getName) // will print whole function