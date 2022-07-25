const notas = [6.4, 7.8, 5.2, 1.9, 9.8, 8.7, 7.9]

// Sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1) //Imprimindo Notas menor que 7

//Com callback
const notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})

console.log(notasBaixas2)

//Com callback usando arrow
const notasMenorQue7 = notas => notas < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)