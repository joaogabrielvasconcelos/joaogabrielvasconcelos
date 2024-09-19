let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade = +input();
let quantidade = +input();
let total = 0;

while (true){
 if (quantidade <= 0){
   console.log("vazio")
   total -= quantidade;
   quantidade = +input();
 }else {
   if (total < 0){
     console.log("vazio")
     total += quantidade;
     quantidade = +input();
     continue;
   }else {
     if (total >= 0 && total < capacidade){
       console.log("ainda cabe")
       total += quantidade;
       quantidade = +input();
       continue;
     }else {
       if (total >= capacidade && total != 2 * capacidade){
         console.log("lotado")
         total += quantidade;
         quantidade = +input();
         continue;
       }else{
         if (total == 2 * capacidade){
           console.log("hora de partir")
           break;
         }
       }
        
       
     }
     
   }
 }
}


