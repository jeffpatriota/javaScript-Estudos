function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Livro', 35.9))
console.log(criarProduto('Caderno',19.90 ))