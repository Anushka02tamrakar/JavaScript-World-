let count = 0;
const click = document.getElementById('click')
click.addEventListener('click',function(){
    console.log('Button clicked', count++);
})

//using global is not a good solution 
//so make closure
//closure for data hiding
