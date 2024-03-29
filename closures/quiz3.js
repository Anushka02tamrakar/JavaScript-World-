// are let declaration closed over>

function outer(){
    function inner(){
        console.log(a)
    }
    let a = 24;
    return inner;
}
outer()();

// so this a variable is block scope but it behave in the same way as closure just like var.