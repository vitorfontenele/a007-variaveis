let a = prompt("Qual será o valor da variável a?");
let b = prompt("Qual será o valor da variável b?");

let velhaA = a;

//Trocando os valores
a = b;
b = velhaA;

//Após a troca:
console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);