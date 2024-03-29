function attachEventListener(){
    count = 0;
    document.getElementById('click')
    .addEventListener('click', function xyz(){
        console.log('Button clicked', count++)
    });
}
attachEventListener();