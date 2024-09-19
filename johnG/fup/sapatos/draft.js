let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end = "\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();

let total: number = 0;

for (i) {
  if (i % 2 == 0 && i % 3 == 0)
    total += i;
}
