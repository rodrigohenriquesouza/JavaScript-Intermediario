let num = 1
let num1 = 5
let num2 = 3
let num3 = 4

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

imprimirNumeros(num1,num,num2)
console.log('pause')
imprimirNumeros(num2,num3)
console.log('pause')
imprimirNumeros(1,4,6,6,8,8,7,6,43,12)