let contador = 1   // comando while de repetição determinado
while(contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for(let i = 0; i <= 10; i++){   // comando for de repetição determinado
    console.log(`i = ${i}`)
}

const notas = [6.5, 8.9, 4.3, 1.0, 7.6]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}