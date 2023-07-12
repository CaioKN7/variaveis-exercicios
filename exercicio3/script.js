const pergunta1 = "Me informe seu nome completo, por favor"
const resposta1 = prompt(pergunta1)
console.log(typeof(resposta1))

const pergunta2 = "Agora, me diga sua data de nascimento"
const resposta2 = prompt(pergunta2)
var numberData = parseInt(resposta2)
console.log(typeof(numberData))

const pergunta3 = "Me informe seu endereço, por favor"
const resposta3 = prompt(pergunta3)
console.log(typeof(resposta3))

const pergunta4 = "Digite o seu CPF"
const resposta4 = prompt(pergunta4)
var numberCPF = parseInt(resposta4)
console.log(typeof(numberCPF))

const pergunta5 = "Qual o seu nível de escolaridade?"
const resposta5 = prompt(pergunta5)
console.log(typeof(pergunta5))

const pergunta6 = confirm("Possui CNH?");
if (pergunta6) {
  console.log("Possui CNH.");
} else {
  console.log("Não possui CNH.");
}
console.log(typeof(pergunta6))

const pergunta7 = "Quantos filhes possui?"
const resposta7 = prompt(pergunta7)
var numberFilhes = parseInt(resposta7)
console.log(typeof(numberFilhes))

const pergunta8 = "Qual seu cargo atual?"
const resposta8 = prompt(pergunta8)
console.log(typeof(pergunta8))

const pergunta9 = "Qual o seu salário? (EX: R$2500,00)"
const resposta9 = prompt(pergunta9)
var numberSalario = parseInt(resposta9)
console.log(typeof(numberSalario))

const pergunta10 = confirm("Recebe comissão? Se sim, aperte em confirme, caso não, clique em cancel");
if (pergunta10) {
  console.log("Recebe comissão.");
} else {
  console.log("Não recebe comissão.");
}
console.log(typeof(pergunta10))

const pergunta11 = "Informe o ano de admissão"
const resposta11 = prompt(pergunta11)
var numberAdmissao = parseInt(resposta11)
console.log(typeof(numberAdmissao))


console.log("O colaborador", resposta1, "nascido no dia", resposta2, "morador do endereço", resposta3, "portador do CPF", resposta4, "que tem o grau de escolaridade", resposta5, "que", pergunta6, "possui", resposta7, "filhe(s)", "atua como", resposta8, "tem um salário de", resposta9, "que", pergunta10, "e foi admitido em", resposta11)






