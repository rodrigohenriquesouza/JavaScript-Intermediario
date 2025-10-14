function soma(a, b) {

    if(a === undefined || b === undefined) {
        console.log('Esta function necessita dos dois parametros')
    } else {
        return a + b
    }
}

console.log(soma(1))
console.log(soma(5,5))

function saudacao(nome, idade) {

    if(nome === undefined || idade === undefined) {
        console.log('Preencha corretamente os DADOS!')
    } else {
        console.log(`Seu nome é ${nome} e você tem ${idade} anos`)
    }
}

saudacao('Rodrigo')
saudacao('Rodrigo', 22)

