/*
   1 - Crie uma função chamada faixaEtaria que aceita um argumento chamado idade
   2 - Identifique três faixas etárias: Criança (menor que 12 anos), Jovem (12 a 24 anos), Adulto (Maior que 25 anos)
   3 - Execute a função duas vezes e encapsule os resultados em variáveis diferentes
   4 - Uma variável deve ter o nome de crianca e enviar o argumento uma idade de criança
   5 - A outra o nome adulto e uma idade de adulto para executar a função criada
*/

function faixaEtaria(idade) {
    if(idade < 12) {
        console.log('Criança')
    } else if (idade >= 12 && idade <= 24) {
        console.log('Jovem')
    } else {
        console.log('Adulto')
    }
}

let crianca = faixaEtaria(10)
let adulto = faixaEtaria(26)

