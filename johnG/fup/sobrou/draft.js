let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let quant1 = +input()
let quant2 = +input()
let quant3 = +input()
let valor1 = +input()
let valor2 = +input()
let valor3 = +input()
let quant4 = +input()

let valor4 = quant4 - ((quant1 * valor1) + (quant2 * valor2) + (quant3 * valor3))

console.log(valor4.toFixed(2))
