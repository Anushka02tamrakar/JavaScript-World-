function outer(){
    var a = 17;
    function inner(){
        console.log(a)
    }
    return inner;
}
outer()();       //var close = outer()
                 // close();   same thing

// inner function can be directly called using ()()
