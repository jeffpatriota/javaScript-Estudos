Number.prototype.entre = function(inicio, fim){
return this >= inicio && this <= fim;

}

const informeSuaNota = function(nota){
    if(nota.entre (9, 10)){
        console.log('Você é Top ♥');
    }else if(nota.entre (7, 8.99)){
        console.log('Aprovado');
    }
}

informeSuaNota(10);
informeSuaNota(7);

for(let i = 0; i <=10; i++){
console.log(`contagem = ${i}`)
}
