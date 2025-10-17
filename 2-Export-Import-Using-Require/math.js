//------------------ Method -1 Exporting only one Module-----------------------------------


module.exports =  44 ;
module.exports =  "Hello";





//------------------------------------------ Method - 2  Exporting with Dot  -----------------------------------

module.exports.sum =  (a, b) => a+b ;











//------------------------------------------ Method - 3 Exporting All Modules with single object -----------------------------------


const sum = (a,b) => a + b;
const mul = (a,b) => a * b;
const PI = 3.141;



let obj = {

    sum : sum,
    mul : mul,
    PI : PI

};


module.exports =  obj;






