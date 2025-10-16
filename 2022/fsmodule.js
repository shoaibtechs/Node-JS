const fs = require('fs');




// Here we are reading a file.txt so if u have noticed here 
// that the finished reading had printed first.//If you're coming from pytho, c++ then you might be confused here, Her


// fs.readFile('file.txt','utf8',(err,data)=>{


//     console.log(err,data);
// })


// console.log("Finished reading file");

// And if we want to get rid of the upper problem then we 
//have to use "Sync" with readFile and by doing this nodejs is intentionally blocking this 

// const a = fs.readFileSync('file.txt')

// console.log(a);


// console.log("Finished reading file");


//What is this <Buffer 48... ???if we want to read the 
//then you have to use "tostring()"


// const b = fs.readFileSync('file.txt')

// console.log(b.toString());

// console.log("Finished reading file");



//We can also write into the file 
fs.writeFileSync('file2.txt',"We are inserting a data",()=>
{
    console.log("Written to the file");


});
console.log("Finished writing!");


