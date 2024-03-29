//conflicting name global variable in js

function outest(){
    var c = 20;
    function outer(b){
        
        function inner(){
            console.log(a,b,c);
        }
        let a = 10;     //10
        return inner;
    }
    return outer;
}
let a = 100;      // 100
var close = outest()("hello");
close();

/* so in this case when outest func called
it check variable in its lexical scope if 
it finds it return if not then it search it 
in more level deep in heirachy. so it goes to
global scope of outest.
if both are removed return reference error.
*/