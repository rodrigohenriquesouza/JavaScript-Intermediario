function detectarDado(d) {

    if(typeof d === 'string') {
        console.log('Este dado é uma string')
    } else if (typeof d === 'number') {
        console.log('Este dado é um número')
    } else if (typeof d === 'boolean') {
        console.log('Este dado é um booleano')
    }
    
}

detectarDado('Letícia')
detectarDado(19)
detectarDado(true)

