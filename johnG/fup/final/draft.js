let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let nota1 = +input()
let nota2 = +input()
let media = ((nota1 + nota2)/2)
if (media >= 7){
  console.log("aprovado")
}else{
  if (media< 4){
    console.log("reprovado")
  }else{
    if (media >= 4 && media < 7){
      let notafinal = +input()
      let mediafinal = ((media + notafinal)/2)
      if (mediafinal >= 5) {
        console.log("aprovado na final")
      }else{
        console.log("reprovado na final")
      }
    }
  }
}




