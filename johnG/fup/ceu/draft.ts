let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let n = +input();

write("[ ", "");

for (let i = 0; i < 10; i += 1){
   if(i != n){
      write(i, " ");
   }
}
if (n != 10){
   write("ceu ", "");
}
write("]");
