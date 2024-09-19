let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let jog1 = input()
let jog2 = input()

if (jog1 == jog2){
  console.log("empate")
} else if ((jog1 == "R" && jog2 == "S") || (jog1 == "P" && jog2 == "R") || (jog1 == "S" && jog2 == "P")) {
  console.log("jog1")
} else {
  console.log("jog2")
}
