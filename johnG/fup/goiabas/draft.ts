let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capa = +input()
let bana = +input()
let goia = +input()
let mang = +input()
let quant = bana + goia + mang
let updat = 0;
let min = 0; 

if (quant > capa){
while(updat < quant){
  updat += capa;
  min += 1; 
  continue;
}
console.log(min)
}else {
  console.log("1")
}

