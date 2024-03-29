function x(){
    var a= 17;
    function y(){
        console.log(a);
    }
    var a = 100;        //return 100 in this case
    return y;
}

var z = x();
z();

//if we move variable from line2 to line6 it will still form closure 