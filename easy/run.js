const merge = require("./170.easy.js");

const num1 = [90, 80, 29, 18, 0];
const num2 = [88];

merge(num1, 4, num2, num2.length);
console.log(num1);
