function x() {

    for (var i = 1; i <= 5; i++) {
        function closure(i) {

            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        closure(i);
    }

}
x();

//this with var variable by using closure property
/*function x(){
    for(let i = 1; i<=5; i++){
        setTimeout(function(){
            console.log(i)
        }, i*1000);
    }
}
x();
with the help of let variable
*/