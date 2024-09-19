
let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let P = +input();
while (P != 0 || P != 1){
  let P = +input();
}
let d1 = +input();
while (d1 < 0 || d1 > 5){
  let d1 = +input();
}
let d2 = +input();
while (d2 < 0 || d2 > 5){
  let d2 = +input();
}

let soma = d1 + d2;

if (soma % 2 == 0 && d1 % 2 == 0){
  console.log("0")
}else{
  if (soma % 2 == 0 && d2 % 2 == 0){
    console.log("1")
      }
    }
  


