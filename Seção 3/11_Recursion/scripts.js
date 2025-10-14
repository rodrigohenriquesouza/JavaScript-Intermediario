function retornarNumeroPar(n) {
    if(n % 2 === 0) {
        console.log('O numero é par ' + n)
    } else {
        console.log(n)
        retornarNumeroPar(n - 1)
    }
}

retornarNumeroPar(33)

function recursao(n) {
    
    if(n - 1 < 2) {
        console.log('Recursão Parou!')
    }else if (n % 2 != 0) {
        console.log('Número ímpar ' + n)
        recursao(n - 1)
    }else {
        console.log('Número par ' + n)
        recursao(n - 1)
    }
}

recursao(55)