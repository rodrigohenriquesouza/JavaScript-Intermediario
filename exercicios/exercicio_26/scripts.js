/*
    1. Escreva uma função chamada isPalindrome que recebe uma palavra como argumento.
    2. A função deve verificar se a palavra é um palíndromo.
    3. Um palíndromo é uma palavra que é lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda
    4. A função deve retornar true se a palavra for um palíndromo e false caso contrário.

    Por exemplo: 

    isPalindrome('radar') deve retornar true

    isPalindrome('hello') deve retornar false
*/

function isPalindrome(palavra) {
 palavra = palavra.toLowerCase().replace(/\s/g, '')

  // inverte a palavra
  let invertida = palavra.split('').reverse().join('')

  // compara a original com a invertida
  return palavra === invertida
}

console.log(isPalindrome('radar'))
console.log(isPalindrome('Rodrigo'))
console.log(isPalindrome('arara'))