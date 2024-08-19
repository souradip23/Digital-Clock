const clock=document.getElementById('clock');
// const clock1=document.querySelector('#clock');

// let date =new Date();
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date =new Date();
    clock.innerHTML=date.toLocaleTimeString();
    
}, 1000);