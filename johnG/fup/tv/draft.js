let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = +input()
let x = +input()
let y = (x - 1) * 5

let parcela = (valor / x) + (valor / x) * y/100

console.log((parcela).toFixed(2))
console.log((parcela * x).toFixed(2))




