let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let kmh = +input()
let t = +input()
let c = +input()

let d = (kmh * (t/60))
let des = d/c

console.log((des).toFixed(2))

