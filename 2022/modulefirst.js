//common Module. This method was used to import file as common.,js



// const simple2 = require("./moduleSecond")

// simple2()





//ES 6 module to import the file 

import {simple2 as simple} from "./moduleSecond.mjs";

simple();

//But if we dont this curly braces then we can go with this method and we have to write "default" infront of function


import  simple2   from "./moduleSecond.mjs";

simple2();


//We also can import two functions on 

import {simple, simple2} from "./module.Second.mjs"

//If we want to import everything then 

import * as a2 from "./moduleSecond.mjs";

console.log(a2.simple() )