function multiplicarTresNumeros (x, y, z) {
    return x * y * z
}

console.log(multiplicarTresNumeros(2,3,4))

const mult = multiplicarTresNumeros(5,4,8)

console.log("O valor de mult é " + mult)

function podeDirigir(idade, cnh) {

        if(idade >= 18 && cnh == true) {
            console.log('Pode dirigir! ')
        } else {
            console.log('De menor ou desabilitado não pode dirigir!')
        }

}

podeDirigir(22,false)
podeDirigir(19,1)
podeDirigir(23,true)
podeDirigir(19,true)
podeDirigir(15,false)

let dirigir = function(idade) {

    if(idade >= 18) {
        console.log(`Pode dirigir você tem ${idade} anos de idade`)
    } else {
        console.log(`De menor! você tem ${idade} anos de idade`)
    }
}

dirigir(13)

 