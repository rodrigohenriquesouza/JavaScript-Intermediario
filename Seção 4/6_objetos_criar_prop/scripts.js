let pessoa = {
    nome: 'Matheus',
    idade: 29,
    profissão: 'Programador'
}

console.log(pessoa.nome)
delete pessoa.nome
console.log(pessoa.nome)

console.log(pessoa)

pessoa.casado = false
console.log(pessoa.casado)

pessoa.rica = 'Sim'
console.log(pessoa.rica)