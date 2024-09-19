let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num = +input()

let lista : number[] = []
for (let i = 0; i < num; i++){
    let elem = +input()
    lista.push(elem)
}

for (let elem of lista){
    console.log(elem)
}


