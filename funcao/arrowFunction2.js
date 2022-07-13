/*let pessoa = (nome) => {
    const dados = nome
    return dados
}
console.log(pessoa('Jefferson'))*/

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
