function getPreco(imposto = 0, moeda = 'R$') {
    return`${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebbok',
    preco: 2500,
    desc: 0.15,
    getPreco
}
globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49900, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.15, '$'))
console.log(getPreco.apply(carro, [0.15, '$'])) // os parametros tem q estar entre chaves no apply