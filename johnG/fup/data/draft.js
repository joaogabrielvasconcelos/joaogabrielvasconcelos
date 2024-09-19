const { stringify } = require("querystring");

let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let hh = +input()
let min = +input()
let dd = +input()
let mm = +input()
let aa = +input()

console.log(String(hh).padStart(2, "0") + ":" + String(min).padStart(2, "0") + " " + String(dd).padStart(2, "0") + "/" + String(mm).padStart(2, "0") + "/" + String(aa % 100).padStart(2, "0"))

            



