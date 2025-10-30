let pessoa = {
    "nome": "Rodrigo",
    "idade": 22,
    "profissao": "Developer",
    "hobbies": ["Boxe", "jiu-jitsu", "Leitura", "Estudar"]
}

let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)

console.log(pessoaJSON.hobbies[1])
