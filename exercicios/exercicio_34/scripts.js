/*

    - Crie um JSON com 3 proriedades
    - Atribua ele a uma variável
    - Acesse as proriedades imprimindo no console

*/

let carro = {

    "Rodas": 2,
    "Portas": 4,
    "Cavalos": 12,
    "Dono": "Rodrigo"
}

console.log(carro.Rodas)
console.log(carro.Portas)
console.log(carro.Cavalos)
console.log(carro.Dono)

let jsonString = JSON.stringify(carro)

console.log(jsonString)