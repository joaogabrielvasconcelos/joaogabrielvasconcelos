var readlineSync = require('readline-sync');
let input = () : string => readlineSync.question();
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);

let numero = Math.floor(Math.random() * 100) + 1;
let inf = 0;
let sup = 100;

for (;;){
    write(`chute um número entre ]${inf} e ${sup}[:`);
    let chute = +input();
    if (chute == numero) {
        write("Voce acertou");
        break;
    }
    if (numero < chute) { 
        sup = chute;
        write("É menor")
    }
    else{
        inf = chute;
        write("É maior")
    }
    if (sup - inf == 2) {
        write("você perdeu");
        break;
    }

}