let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let A = +input();
let G = +input();
let Ra = +input();
let Rg = +input();

let AF = (A.toFixed(2)); GF = (G.toFixed(2)); RaF = (Ra.toFixed(2)); RgF = (Rg.toFixed(2));

let preco1 =()


