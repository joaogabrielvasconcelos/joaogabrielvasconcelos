let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let x = +input()
let y = +input()
let z = input()

if (z == "+"){
  console.log((x + y))
}else{
  if (z == "-"){
    console.log((x - y))
  }else{
    if (z == "*"){
      console.log((x * y))
    }else{
      if (z == "/"){
        console.log(Math.floor(x / y))
      }
    }
  }
}
