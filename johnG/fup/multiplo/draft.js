let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let x = +input()

if (x % 7 == 0){
  console.log("SIM")
}else{
  console.log("NAO")
}
