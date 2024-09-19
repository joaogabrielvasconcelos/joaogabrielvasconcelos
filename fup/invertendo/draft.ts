let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tam = +input();
let vet : number[] = input().split(" ").map(Number);
vet.reverse()

write("[ " + vet.join(" ") + " ]")





