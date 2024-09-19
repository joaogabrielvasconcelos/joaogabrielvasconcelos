let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let chico = +input();
let cebolinha = +input();
let quantia = +input();
let animal = input();
let soma = 0;

for (let i = 0; i < quantia; i++){
  if (animal == "v"){
    soma += 4;
  } else if(animal == "g"){
    soma += 2;
  } else if(animal == "c"){
    soma += 4;
  } 
  if (quantia > 1){
    animal = input();
  }
}


console.log(soma);
let b = Math.abs(soma - chico)
let c = Math.abs(soma - cebolinha)

if ((b) > (c)){
  console.log("Cebolinha")
} else if ((b) < (c)){
  console.log("Chico Bento")
} else if ((b) == (c)){
  console.log("empate")
}

