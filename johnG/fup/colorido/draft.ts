let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = +input();
let p = input();

write("[ ", "");

for (let i = 0; i <= 10; i ++){
 if (i != n){
   if (i == 10){
     write("ceu", " ");
   } else {
      write(i + p, " ");
      p = p == "d" ? "e" : "d";
   }
 }
}
write("]");

