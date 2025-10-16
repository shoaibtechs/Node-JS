const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter =  new MyEmitter();


myEmitter.on('WaterFull', ()=>{
    console.log("Please Turn Off the Motor");

    //Adding a Settimeout 

    setTimeout(()=>{

        console.log("Please turn off the motor it's a gentle remainder");
        
    },3000);


});

console.log("The script is running");
myEmitter.emit('WaterFull');
console.log("The script is still running");

