let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function verificar_guarda(wifi: number, login: number, admin: number): string {
  if (wifi == 1 && login == 1 && admin == 1){
    return("done")
  }
    if (wifi != 1){
      return("you must connect to wifi")
    }
      if(login != 1){
        return("you need to login first")
      }
        if(admin != 1){
          return("you must to login as admin")
        }
      }
let wifi = +input()
let login = +input()  
let admin = +input()  

console.log(verificar_guarda(wifi, login, admin))