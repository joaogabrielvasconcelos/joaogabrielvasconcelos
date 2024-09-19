let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// Supondo que a função input() do TKO forneça uma linha de entrada como string
let inputLine: string = input(); // Captura a linha de entrada fornecida pelo TKO

// Divide a linha de entrada em duas partes, convertendo para número
let [a, b] = inputLine.split(" ").map(Number); // Converte os valores da linha para números

// Calcula a diferença entre os dois números e obtém o valor absoluto
let difference: number = Math.abs(a - b);

// Imprime o valor absoluto da diferença
console.log(difference);


