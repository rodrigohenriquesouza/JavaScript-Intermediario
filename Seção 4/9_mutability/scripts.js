let esporte = {
    esporte: 'MMA'
}

let esporteDois = esporte

let esporteTres = {
    esporte: 'MMA'
}

console.log(esporte == esporteDois)
console.log(esporteTres == esporte)
console.log(esporteTres == esporteDois)

console.log(esporteDois)

esporteDois.esporte = 'Futebol'

console.log(esporteDois)

esporte.esporte = 'Basquete'

console.log(esporte)