const pergunta1 = "Qual o seu nome?";
const resposta1 = prompt(pergunta1);

const pergunta2 = "Qual sua idade?";
const resposta2 = prompt(pergunta2);
var number = parseInt(resposta2);

const pergunta3 = "Onde você estuda?";
const resposta3 = prompt(pergunta3);


console.log(pergunta1, "meu nome é",resposta1)
console.log(pergunta2, "tenho",resposta2, "anos")
console.log(pergunta3, "estudo na",resposta3)

console.log(typeof(resposta1))
console.log(typeof(number))
console.log(typeof(resposta3))