/*

    - Crie um array a partir de uma frase
    - Imprima cada palavra do array no console por meio de um for

*/

let frase = 'Rodrigo tem 22 anos e ira se tornar um programador'

let retornado = frase.split(' ')
console.log(retornado)

for(let i = 0; i < retornado.length; i++) {
    console.log(retornado[i])
}