let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = +input()
let d = +input()
let a = +input()
let ar = a
let pn = 0;

while(ar != d){
 if (ar == d){
   break;
 }
 if (ar >= n){
   ar -= n;
   ar += 1;
   pn += 1;
   continue;
 }else {
  ar += 1;
  pn += 1;
  continue;}
}

write(pn)