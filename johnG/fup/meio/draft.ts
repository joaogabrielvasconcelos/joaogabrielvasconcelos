let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let e1 = +input()
let e2 = +input()
let e3 = +input()

if ((e2 < e1 && e1 < e3) || (e3 < e1 && e1 < e2)){
  console.log(e1)
} else if ((e1 < e2 && e2 < e3) || (e3 < e2 && e2 < e1)){
   console.log(e2)
} else if ((e1 < e3 && e3 < e2) || (e2 < e3 && e3 < e1)){
   console.log(e3)
}
