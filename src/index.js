"use strict";

const $ = require('jquery');

const sayHello = (name) => 'Hello, ${name}!';

// function sayHello() {
//     console.log("hello")
// };
// ES6 code is translated to ES5 in main.js

console.log(sayHello("George"));

