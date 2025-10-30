/*

    - Crie dois arrays, um com mais de 5 elementos e outro com menos
    - Faça uma função que verifique o número de elementos
    - Se possui menor que 5, imprima "Poucos elementos" no console
    - Se tiver mais, imprima "Muitos elementos"

*/


let elementos = ['Fogo', 'Terra', 'Ar', 'Agua', 'Mizu', 'Shinobu']
let lutas = ['Boxe', 'BJJ', 'KickBoxing']


function verificarElementos(verifica) {

    if(verifica.length < 5) {
        console.log("Poucos elementos")
    } else if(verifica.length >= 5) {
        console.log("Muitos elementos")
    }
}

verificarElementos(lutas)
verificarElementos(elementos)