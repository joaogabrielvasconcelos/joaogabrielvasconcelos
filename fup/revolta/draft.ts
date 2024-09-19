let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tam = +input();
let lista : number[] = [];
let rebel = 0;
let solda = 0;

for (let i = 0; i < tam; i++){
    let num = +input();
    lista.push(num);
    if (num % 2 == 0){
        rebel += num;
    } else {
        solda += num;
    }
}

if (rebel > solda){
    write("rebeldes")
} else if (rebel < solda){
    write("soldados")
} else {
    write("empate")
}


