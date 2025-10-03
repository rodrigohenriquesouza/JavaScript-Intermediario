let nome = 'Rodrigo'
let idade = 22
let peso = 90
let pesoMaior = Math.max(90, 100, 20, 30, 120, 112)
let pesoMenor = Math.min(90, 100, 20, 30, 120, 112)
let arredondarPeso = Math.round(111.34554)
let arredondarPesoCima = Math.ceil(111.12313)

if (nome == 'Rodrigo' && idade == 22) {
    console.log('Você é o Rodrigo')
} else {
    console.log('VocÊ não é o Rodrigo saia já!')
}

if (peso > 110) {
    console.log('Você esta gordo!')
} else if ((peso > 75 && peso < 85) || peso == 90) {
    console.log('Você esta no peso ideal boa!')
} 

console.log(`O maior peso é o ${pesoMaior} e o menor seria ${pesoMenor}, posso arredondar esse peso = ${arredondarPeso} e também posso arredondar ele para cima ${arredondarPesoCima}`)

