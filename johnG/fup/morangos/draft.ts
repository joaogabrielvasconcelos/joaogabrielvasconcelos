let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let com1 = +input()
let lar1 = +input()
let com2 = +input()
let lar2 = +input()
let area1 = com1 * lar1
let area2 = com2 * lar2

if(area1 > area2){
  console.log(area1)
}else {
  console.log(area2)
}