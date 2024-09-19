let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let aF = a.toFixed(1);
let b = +input();
let bF = b.toFixed(1);
let c = +input();
let cF = c.toFixed(1);

let delta = Math.pow(b, 2) + (-4 * a * c);
if (delta < 0){
  console.log("nao ha raiz real")
}else{
  if (delta == 0){
    let x = (-b + (Math.sqrt(delta))) / (2 * a)
    console.log(x.toFixed(2))
  }else{
    let x1 = (-b + (Math.sqrt(delta))) / (2 * a)
    let x2 = (-b - (Math.sqrt(delta))) / (2 * a)
    console.log(x1.toFixed(2))
    console.log(x2.toFixed(2))
  }
}
