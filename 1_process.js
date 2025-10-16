//console.log(process);





// The user will pass the arguments at the time pf compilation and now i am storing those arguments in an array.
let arr =  process.argv;


for(let i=0; i<arr.length; i++){

    console.log("Hello, ", arr[i]);

}
