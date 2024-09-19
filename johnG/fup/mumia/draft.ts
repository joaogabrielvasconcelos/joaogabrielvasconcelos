let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let nome = input()
let idade = +input()

function verificar_idade(idade: number): string {
  if (idade < 12){
    return("crianca")
  }
  if (idade >= 12 && idade < 18){
    return("jovem")
  }
  if (idade >= 18 && idade < 65){
    return("adulto")
  }
  if (idade >= 65 && idade < 1000){
    return("idoso")
  }
  return("mumia")
}


console.log(nome + " " + "eh" + " " + verificar_idade(idade))