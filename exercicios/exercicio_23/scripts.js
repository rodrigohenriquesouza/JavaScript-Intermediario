// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop. Além disso imprime somente os números pares no console

function decremento(numero) {
    for(i = numero; i >= 0; i--) {

        if(i % 2 === 0) {
            console.log('Número par: ' + i)
        }
    }
}

console.log(decremento(50))