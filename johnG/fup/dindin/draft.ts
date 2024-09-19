
let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let dindin = +input();
let qtcsabor = 0;
let qtlsabor = 0;
let qtmanha = 0
let qttarde = 0;

for (let i = 0; i < dindin; i ++){
  let [sabor, turno] = input().split(" ");
  if (sabor == "c"){
    qtcsabor += 1;
  } else {
    qtlsabor += 1;
  }
  if (turno == "m"){
    qtmanha += 1;
  } else {
    qttarde += 1;
  }
}  


if (qtcsabor > qtlsabor) {
  console.log("c")
} else if (qtcsabor < qtlsabor){
  console.log("l")
} else {
  console.log("empate")
}


if (qtmanha > qttarde){
  console.log("t")
}else{
  if (qtmanha < qttarde){
    console.log("m")
  }else{
    if (qtmanha == qttarde){
      console.log("empate")
    }
  }
}


