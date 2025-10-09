let usuario = 22
let cnh = ''
cnh = prompt('Você tem CNH?')

if(usuario >= 18 && cnh == 'Sim'){
    console.log('DIRIGINGO DENTRO DA LEI!')
}else if (usuario >= 18 && cnh == 'Não') {
    console.log('Dirigindo desabilitado MULTADO!')
}else {
    console.log('DE MENOR DIRIGINDO. ENCAMINHADO A DELEGACIA!')
}