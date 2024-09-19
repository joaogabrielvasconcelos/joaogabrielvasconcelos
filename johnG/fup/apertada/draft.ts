let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let lista: number[] = []

  for (let i = 0; i < 5; i++){
    lista.push(+input())
    let vmin = lista[0]
    if (lista[i] < vmin){
      vmin = lista[i]
     } 
   }
  
   
  
 


    




