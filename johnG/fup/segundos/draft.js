let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num1 = +input()
let num2 = Math.floor(num1 / 3600)
let num3 = Math.floor((num1 % 3600) / 60)

console.log(num2 + ":" + num3 + ":" + (num1 % 60))

