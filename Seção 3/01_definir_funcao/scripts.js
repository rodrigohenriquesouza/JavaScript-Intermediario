function imprimirNoConsole() {
    console.log('Olá, Mundo!')
}

imprimirNoConsole()

function imprimirUmNumero(num) {
    console.log('O número é ' + num)

}

imprimirUmNumero(2)
imprimirUmNumero(4)
imprimirUmNumero(10)
imprimirUmNumero(9)

const numeroAleatorio = function() {
    console.log(Math.random())
}

numeroAleatorio()
numeroAleatorio()

let a = 10
let b = 10

let soma = function() {
    console.log(a + b)
}

soma()