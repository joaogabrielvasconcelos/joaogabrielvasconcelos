let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let salario = +input();
let porcentagem = 0;

if (salario > 2000.00){
  porcentagem += 5;
} else if (salario <= 2000 && salario > 1500){
   porcentagem += 10;
} else if (salario <= 1500 && salario > 1000){
   porcentagem += 15;
} else if (salario <= 1000){
   porcentagem += 20; 
}

let aumento = salario * (porcentagem / 100);
let novoSalario = salario + aumento;

console.log(novoSalario.toFixed(2))
