let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c = +input();
let a = +input();
let cr = c - 1;
let voltas = 0;

if (c < a){
  let result = Math.floor(a / cr)
  voltas += result
}
if (a % cr == 0 && c < a){
  console.log(voltas)
  
}else {
  voltas += 1;
  console.log(voltas)
}

