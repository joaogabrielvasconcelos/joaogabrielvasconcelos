let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let wifi = +input()
let login = +input()
let admin = +input()

if (wifi == 1 && login == 1 && admin == 1){
  console.log("done")
}else{
  if (wifi != 1){
    console.log("you must connect to wifi")
  }else{
    if(login != 1){
      console.log("you need to login first")
    }else{
      if(admin != 1){
        console.log("you must to login as admin")
      }
    }
  }
}