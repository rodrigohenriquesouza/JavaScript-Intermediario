let lutador = {
    arteMarcial: 'BOXE',
    golpePerigoso: 'OVERHAND',

}

let lutador2 = {
    fraqueza: 'GRAPPLING/JIUJITSU',
    idade: 22 
}


Object.assign(lutador, lutador2)
console.log(lutador)

console.log(Object.keys(lutador))