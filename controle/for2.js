const notas = [6.4, 8.9, 4.8, 1.6, 2.3]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Jefferson',
    sobrenome: 'Patriota',
    idade: 35,
    peso: 73
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
