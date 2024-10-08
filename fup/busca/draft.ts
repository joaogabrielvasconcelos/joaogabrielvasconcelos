
function inside(vet: number[], value: number): boolean {
 for (let elem of vet){
    if (elem == value){
        return true;
    }
 } return false
    } 
    


function index_of(vet: number[], value: number): number {
    for (let i = 0; i < vet.length; i++){
        if (vet[i] == value){
            return i;
        }
    } return -1;
    
    }
    

function find_if(vet: number[]): number {
    for (let i = 0; i < vet.length; i ++)
      if (vet[i] > 0){
        return i;
      }
      return -1
    }
    


function min_element(vet: number[]): number {
    let pref = 0
    if (vet.length == 0){
        return -1;
    }
    for (let i = 0; i < vet.length; i++){
        if (vet[pref] > vet[i]){
            pref = i;
        }
    }
    return pref;
  
}

function find_min_if(vet: number[]): number {
    let pref = -1;
    if (vet.length == 0){
        return -1;
    }
    for (let i = 0; i < vet.length; i++){
        if (vet[i] > 0){
            if ((pref == -1) || (vet[i]) < vet[pref]){
                pref = 1;
            }
        }
    }
    return pref;
  
    }
    



// -------------------------- MAIN --------------------------

let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function main() {
    while (true) {
        let line = input();
        write("$" + line);
        let args = line.split(" ");

        if (args[0] === "end")   { 
            break;
        }
        else if (args[0] === "in"){
            let result = inside(to_vet(args[1]), +args[2]);
            write(result ? "true" : "false");
        }
        else if (args[0] === "index_of"){
            let result = index_of(to_vet(args[1]), +args[2]);
            write(result);
        }
        else if (args[0] === "find_if"){
            let result = find_if(to_vet(args[1]));
            write(result);
        }
        else if (args[0] === "min_element"){
            let result = min_element(to_vet(args[1]));
            write(result);
        }
        else if (args[0] === "find_min_if"){
            let result = find_min_if(to_vet(args[1]));
            write(result);
        }
        else {
            write("fail: Comando inválido");
        }
    }
}

main();



// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}
