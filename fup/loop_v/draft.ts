let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let inputLine: string = input();

let [a, b] = inputLine.split(" ").map(Number);

let cont = a;

write("[", " ")

while (cont < b){
  if (cont == 0){
    cont += 1;
  }
   if (cont / 2 != 0){
    write(cont, " ");
    cont += 2;}
   if (cont == b-1 ){
    break;
   }
}
write(" " + cont + " ]")
