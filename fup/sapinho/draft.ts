let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let pro = +input();
let sal = +input();
let esc = +input();
let pos = 0;

while(true){
   console.log(pos + " " + (pos + sal));
   pos = (pos + sal) - esc;
   if (pos + sal >= pro){
    console.log(pos + " " + "saiu");
    break;
   } else {
    continue;
   }
}

