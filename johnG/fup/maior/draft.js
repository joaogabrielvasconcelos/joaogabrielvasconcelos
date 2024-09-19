let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let chute1 = +input()
let chute2 = input()
while(chute2 !== "m" && chute2 !== "M"){
  let chute2 = input()
}

let valorReal = +input()
while(valorReal < 0.01 || valorReal > 1000.0){
  let valorReal = +input()
}

if (chute1 == valorReal){
  console.log("primeiro")
}else {
  if ((chute2 == "m" && valorReal < chute1) || (chute2 == "M" && valorReal > chute1)) {
    console.log("segundo")
  }else {
    console.log("primeiro")
  }
}
