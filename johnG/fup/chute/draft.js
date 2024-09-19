let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let x = +input();
while (x < 1 || x > 100) {
  let x = +input();
}

let y = +input()
let z = +input()

y = Math.abs(x - y)
z = Math.abs(x - z)

if (y < z){
  console.log("primeiro")
}else{
  if (z < y){
    console.log("segundo")
  }else{
    console.log("empate")
  }
}


