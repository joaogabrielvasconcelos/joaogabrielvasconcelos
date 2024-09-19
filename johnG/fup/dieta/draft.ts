let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let dias = +input();
let soma = 0;

for (let i = 0; i <= dias; i += 1){
  let quantidade = +input();
  soma += quantidade;
}

let media = soma / dias;
write(media.toFixed(1));
