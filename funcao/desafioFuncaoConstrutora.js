function Pessoa (nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const pessoa1 = new Pessoa('Jeff')
pessoa1.falar()