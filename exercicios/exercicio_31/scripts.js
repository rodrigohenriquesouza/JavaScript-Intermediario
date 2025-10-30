/*

    - Crie um array com 5 nomes incluindo o seu
    - Verifique se o seu nome existe no array
    - Se existir imprima alguma mensagem no console

*/

let nomes = ['JDM', 'Valter Walker', 'Mauricio', 'Rodrigo', 'Jesus']

for(let i = 0; i < nomes.length; i++) {

        if(nomes[i] === 'Rodrigo') {
            console.log("Nome dentro do ARRAY: " + nomes[i])
        }
}