function getUserName(callback){
    callback('Anushka')
}
function greetuser(){
    getUserName(function(name) {
        console.log('hi', name);
    });
}
greetuser();