let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let A = +input();
let B = +input();
let C = +input();
let H = +input();
let L = +input();

let areaJanela = (H * L);
let areaFrente = (A * B);
let areaLateral = (A * C);
let areaBaixo = (B * C);

if (areaJanela >= areaFrente || areaJanela >= areaLateral || areaJanela >= areaBaixo){
  console.log("S");
}else{
  console.log("N");
}

