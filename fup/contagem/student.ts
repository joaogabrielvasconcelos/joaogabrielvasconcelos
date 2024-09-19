import { write } from "fs";

function count(vet: number[], value: number): number {
    return vet.filter(x => x == value).length;
}

function sum(vet: number[]): number {
    let soma = 0;
    for (let elem of vet){
        soma += Math.abs(elem);

    }
    return soma;
}   

function average(vet: number[]): number {
    return sum(vet) / vet.length;
}

function more_men(vet: number[]): string {
    let qtd_h = vet.filter(x => x > 0).length;
    let qtd_m = vet.filter(x => x < 0).length;
    if (qtd_h > qtd_m){
        return "men";
    }
    if (qtd_h < qtd_m){
        return "women";
    }
    return "draw";

}

function half_compare(vet: number[]): string {
    let half = Math.floor(vet.length / 2);
    let primeira = sum(vet.slice(0, half));
    let segunda = sum(vet.slice(half, vet.length));
    if (primeira > segunda){
        return "first";
    }
    if (primeira < segunda){
        return "second";
    }
    return "draw";
}

function sex_battle(vet: number[]): string {
    let homens = average(vet.filter(x => x > 0));
    let mulheres = average(vet.filter(x => x < 0));
    if (homens > mulheres){
        return "men";
    } else if (homens < mulheres){
        return "women";
    }



    return "draw";
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };