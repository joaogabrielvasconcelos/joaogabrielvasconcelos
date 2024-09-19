let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let x1 = +input();
while (x1 < 1 || x1 > 100){
  let x1 = +input();}

let y1 = +input();
while (y1 < 1 || y1 > 100){
  let y1 = +input();}

let x2 = +input();
while (x2 < 1 || x2 > 100){
  let x2 = +input();}

let y2 = +input();
while (y2 < 1 || y2 > 100){
  let y2 = +input();
}

let area1 = (x1 * y1)
let area2 = (x2 * y2)
if (area1 > area2){
  console.log(area1)
}else{
  console.log(area2)
}


