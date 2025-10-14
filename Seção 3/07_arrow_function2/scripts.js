let raizquadrada = r => r * r
let raizquadrada2 = L => L * L // quando minha arrow function tiver apenas um parâmetro posso remover os parenteses e o return dela
let raizquadrada3 = (x) => {   // dois jeitos de fazer uma arrow function e ambos funcionam
    return x * x
}

console.log(raizquadrada(10))
console.log(raizquadrada2(7))
console.log(raizquadrada3(5))