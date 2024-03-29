//encapsulation js

/*var count =0;              //so the problem with this
function increment(){      //any variable can change the
    count++;               //value of count
    console.log(count);

}
increment()
increment()
increment()
*/
function counter() {

    var count = 0;
    return function increment() {
        count++;
        console.log(count);

    }
    
}
var counter1 = counter()     //in this way count var become private to counter 
counter1();
counter1();

var counter2 = counter()     //this is totally new value assign in this 
counter2()

