let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tam = +input();
let vet : number[] = input().split(" ").map(Number);

let impares: number[] = [];
let pares: number[] = [];

for(let elem of vet){
  if (tam == 0){
    break;
  }
    if (elem % 2 == 0){
        pares.push(elem);
    } else {
        impares.push(elem);
    }
}

write("[ " + impares.join(" ") + " ]")
write("[ " + pares.join(" ") + " ]")
