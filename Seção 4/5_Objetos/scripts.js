let goat = {
    nome: 'Rodrigo', 
    profissão: 'programador', 
    idade: 22,
    socar: function() {
        console.log('PSI PSI')
    }
}

console.log(goat.nome)
console.log(goat.profissão)
goat.socar()

let ufcFighter = {
    nome: 'Rodrigo',
    categoria_de_peso: 'medio',
    idade: 22,
    status: 'Champion',
    striking: function() {
        console.log('JAB, DIREITO, UPPER, CRUZADO DE DIREITA, COTOVELADA GIRANDO')
    },
    grappling: function() {
        console.log('DAGESTANI STYLE, JOGA NA GRADE PUXA PRA BAIXO E FINALIZA')
    }
}

ufcFighter.striking()
ufcFighter.grappling()
