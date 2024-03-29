//how we can simulate to block our main thread for 10sec 
//setTtimeout delayed

console.log("start")
setTimeout(function cb(){
    console.log("console")
},5000)

console.log("end")

//million 
 let startDate = new Date().getTime();
 let endDate = startDate
 while(endDate< startDate + 10000){
    endDate = new Date().getTime();
 }
 console.log("while expires");

 //this is the trust issues with settimeout()
//so we should not block main thread.