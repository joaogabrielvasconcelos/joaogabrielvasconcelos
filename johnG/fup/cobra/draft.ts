let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = +input()
let x = +input()
let y = +input()
let c = input()
let s = +input()
let xf = x
let yf = y

for (let i = 0; i < s; i++){
  if (c == "U"){
    yf -= 1;
  }if (yf < 0){
    yf += n;
  }
  if (c == "D"){
    yf += 1;
  }if (yf > n){
    yf -= n;
  }
  if (c == "L"){
    xf -= 1;
  }if (xf < 0){
    xf += n
  }
  if (c == "R"){
    xf += 1; 
  }if (xf > n){
    xf -= n;
  }
  
}

write(xf + " " + yf)