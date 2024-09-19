let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c = +input();
let capa = 0;

while(true){
    let m = +input();
    if (m >= 0){
       capa += m;
    } else if (m < 0){
        capa += m;
    } 
    if (capa == 0){
        console.log("vazio");
        continue;
    } else if (capa < c && capa > 0){
        console.log("ainda cabe");
        continue;
    } else if (capa >= c && capa < 2 * c){
        console.log("lotado");
        continue;
    } else {
        console.log("hora de partir");
        break;
    }
    
    
}

