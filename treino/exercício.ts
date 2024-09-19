import { write } from "fs";

class Pet {
    nome: string = ""; //atributos
    especie: string = "";
    idade: number = 0;
    constructor(nome: string, especie: string, idade: number) { // parâmetros
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }
}


let pets: Pet[] = [
    new Pet("Crow", "corvo",12),
    new Pet("Haddad", "cachorro",8),
    new Pet("Cupuaçú", "gato",12),
    new Pet("Rodolfo", "porco", 14),
    new Pet("Splept", "calango", 9)
]

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i].nome + ":" + pets[i].especie + ":" + pets[i].idade)
}

