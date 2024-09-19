let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let x = +input();
let y = +input();

if(x > y){
  console.log(x)
}else{
  console.log(y)
}
