/*

    - Adicione a proriedade janela no ônibus, com valor de 20
    - Delete a propriedade rodas
    - Imprime a proriedade janelas no console

*/

let bus = {
    rodas: 8,
    limitePassageiro: 40,
    portas: true
}

bus.janelas = 4

console.log(bus)

delete bus.rodas

console.log(bus)