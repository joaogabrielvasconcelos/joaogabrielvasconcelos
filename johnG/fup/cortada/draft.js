let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let B = +input();
let T = +input();
let subB = (160 - B)
let subT = (160 - T)

if (subB == T && subT == B){
  console.log("0")
}else{if ((T > 80 && (B < 80 || B > 80)) && (B > 80 && (T < 80 || T > 80))){
  console.log("1")
}else{
  console.log("2")
}
  
  }

  
  