const imprimirNota = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            console.log('Parabéns vc é Top♥')
            break
        case 9: case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')

    }


}
imprimirNota(10)
imprimirNota(9)
imprimirNota(6)
imprimirNota(4)
imprimirNota(11)

