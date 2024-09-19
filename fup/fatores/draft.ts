let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let div = 2;
let cont = 0;
let n = +input();

while(n > 1){
   if (n % div == 0){
      n /= div;
      cont++;
   } else {
      if(cont > 0){
         write(`${div} ${cont}`);
         cont = 0;
      }
      div++;
   }
}
write(`${div} ${cont}`);


