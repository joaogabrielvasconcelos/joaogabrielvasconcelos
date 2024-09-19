let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let b = +input();
let t = +input();

let areafelix = ((b + t) * 70) / 2;
let metadenota = (160 * 70) / 2;

if (areafelix > metadenota){
    write(1)
} else if (areafelix < metadenota){
    write(2)
} else {
    write(0)
}







