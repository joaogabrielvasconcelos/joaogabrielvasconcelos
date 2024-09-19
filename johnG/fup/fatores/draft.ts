let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function fatoracao(num: number): Record<number, number> {
   const fatores: Record<number, number> = {};
   let divisor = 2;

   while (num > 1){
     while (num % divisor === 0){
       if (fatores[divisor]) {
         fatores[divisor]++;
       } else {
          fatores[divisor] = 1;
       }
       num = num / divisor;
     }
     divisor++;
   }
  return fatores
}

const numero = +input()
const fatores = fatoracao(numero);

console.log(fatores)