const nums = [6.4, 8.6, 9.5, 3.1, 6.7, 1.2, 5.1, 8.7, 9.9]

for (let x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {   // No caso do continue na hora do console.log
    if (y == 5) {        //o 5 é pulado e o continue vai para o indice 6
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


/* Nunca usar esse metedo externo, pois fica um código feio com 
um for dentro de outro for */
externo:
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo

        }
        console.log(`Par = ${a},${b}`)
    }
}