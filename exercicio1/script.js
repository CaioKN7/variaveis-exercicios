const nome = prompt("Qual o seu nome?")
let idade = prompt("Qual sua idade?")
var number = parseInt(idade)

console.log(typeof(nome))
console.log(typeof(number))

console.log("Olá, meu nome é", nome, "e tenho", idade, "anos.")



//O nome eu usei const prque nesse caso, o nome sempre será o mesmo. já na idade, usei let, porque a idade muda todo ano e na idade usei a função parseInt na variável number para que no console me retornasse um number ao invés de uma string.