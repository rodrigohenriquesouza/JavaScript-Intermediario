let n = 1
let div = 0

for(let i = 1; i <= n; i++) {

    if(n % i === 0) {
        div++
    }
}

if(div == 2) {
    console.log(`O número ${n} é primo:`)
} else {
    console.log(`O número ${n} não é primo`)
}