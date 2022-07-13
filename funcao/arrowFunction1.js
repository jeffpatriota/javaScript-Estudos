let dobro = function (a){
    return 2 * a
}

console.log(dobro(100))

dobro = a => 2 * a // return implicito
console.log(dobro(100))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // o _ serve como param
console.log(ola())