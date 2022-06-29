Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirNota = function(nota){
    if(nota.entre(9.99, 10)){
        console.log("Parabéns, você é Top ♥");
    }else if(nota.entre(6, 9.98)){
        console.log('Aprovado');
    }else if(nota.entre (4, 5.99)){
        console.log('Recuperação');
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado');
    }else {
        console.log('Nota inválida');
    }
}
imprimirNota(10);
imprimirNota(7);
imprimirNota(5);
imprimirNota(2);
imprimirNota(12);
imprimirNota(-1);
