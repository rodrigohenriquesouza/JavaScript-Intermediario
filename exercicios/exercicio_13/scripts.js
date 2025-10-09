const arr = [1, 2, 3, 4, 5, 6, 7, 8, 13, 22, 19, 10, 11, 43, 33]
const nImpar = []

for(let i = 0; i < arr.length; i++) {

    if(arr[i] % 2 != 0) {
        nImpar.push(arr[i])
    }
}

console.log(nImpar)