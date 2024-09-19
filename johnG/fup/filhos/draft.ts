let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let idade = +input(); // número inicial
let quantidade = +input(); // contador de quantas vezes o loop vai rodar

let quantidadeInicial = 0;
console.log(idade)

while (quantidadeInicial < (quantidade - 1)){
  idade += 2;
  quantidadeInicial += 1;
  console.log(idade)
}




