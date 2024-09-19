let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = +input();

class distancia {
    dA : number ;
    dB : number ;
    constructor(dA:number, dB:number){
        this.dA = dA;
        this.dB = dB;
    }
    diferenca() {
        return Math.abs(this.dA - this.dB)
    }
    

}

let jog : distancia[] = []

for(let i = 0; i < n; i++){
    let dA = +input()
    let dB = +input()
    jog.push(new distancia(dA, dB))
}



jog = jog.filter(item => item.dB < 10)

if (jog.length == 0){
    write("sem ganhador")
} else {
    let menorValor = Infinity;
    let vencedor = -1;
    for(let i = 0; i < jog.length; i++){
        let diferenca = jog[i].diferenca();
        if (diferenca < menorValor){
            menorValor = diferenca;
            vencedor = i; 
        }
    }
    write(vencedor)
}















