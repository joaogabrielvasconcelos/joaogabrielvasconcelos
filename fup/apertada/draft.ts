let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a = +input();
let b = +input();
let c = +input();
let d = +input();
let e = +input();


let vet: number[] = [a, b, c, d, e];

function apertada(vet: number[]): number {
    let pref = 0;
    if (vet.length == 0) {
        return -1; 
    }
    for (let i = 0; i < vet.length; i++) {
        if (vet[pref] > vet[i]) {
            pref = i;
        }
    }
    return pref;
}

let pos = apertada(vet);
console.log(vet[pos]);
