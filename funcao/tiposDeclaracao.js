// Tipos Declaração 

//function declaration
function soma (x, y){
    return x + y
}
console.log(soma(7, 3)) // nesse caso da function declararion o console.og pode 
                        // estar a cima da function que msm assim o código será exec.


// function expression 
const sub = function (x, y){
    return x - y
}
console.log(sub(5, 2)) // nesse caso da function expression o console.log tem q estar abaixoda function 

//named function expression 
const mult = function mult(x, y){
    return x * y 
}
console.log(mult(3, 2)) // named function expression pouco usada 