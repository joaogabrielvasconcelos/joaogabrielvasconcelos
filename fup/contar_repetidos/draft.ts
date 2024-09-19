let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = +input(); let q = +input();
let vet : number[] = [];

for(let i = 0; i <= q; i++){
    vet.push(+input());
}

let rep = vet.filter(item => Number(item) === n)
write(rep.length)








