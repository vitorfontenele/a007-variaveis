let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);
//É impresso o tipo undefined, pois não foi assinalado um valor para essas variáveis. 
nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");
console.log(typeof nome);
console.log(typeof idade);
//Agora, o tipo dessas variáveis não é mais undefined, pois lhes foram atribuídos valores. A variável nome armazena um "texto" (String) e a variável idade armazena também uma String, apesar de lhe ser fornecido um número. 
console.log("Olá", nome, ", você tem", idade, "anos");

