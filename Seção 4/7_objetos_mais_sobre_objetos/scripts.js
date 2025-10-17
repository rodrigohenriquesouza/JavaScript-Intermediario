let lutador = {
    arteMarcial: 'BOXE',
    golpePerigoso: 'OVERHAND',

}

let lutador2 = {
    fraqueza: 'GRAPPLING/JIUJITSU',
    idade: 22 
}

console.log(lutador)

Object.assign (lutador, lutador2)

console.log(lutador)