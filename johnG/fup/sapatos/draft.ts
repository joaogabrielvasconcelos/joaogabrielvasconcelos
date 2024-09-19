let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

let a: number = +input();
let b: number = +input();

let total: number = 0;
if (a > b) {
  console.log("invalido");
} else {
  for (let i = a; i <= b; i += 1){
    if (i % 2 == 0 && i % 3 == 0){
      total += i;
    }
  }
  console.log(total)
}
