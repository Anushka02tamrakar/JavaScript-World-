console.log('start')
setTimeout(function cb(){
    console.log('callback')
}, 0);
console.log('end');


/*
console.log('start')
function cb(){
    console.log('less imp');
}

setTimeout(cb, 0);
console.log('end');

*/
