function receberTexto(texto) {

    if(texto.length > 10) {
        console.log("Texto muito longo!")
    } else {
        console.log("Texto dentro do limite")
    }
    console.log(texto.length)

}

receberTexto('Dados Corretos!')
receberTexto('Goat')
receberTexto('JavaScript, React, Node, HTML5, CSS')
receberTexto('Java')