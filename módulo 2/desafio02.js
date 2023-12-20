// let tembanana = true ; 
// let fome = true ; 
// let nanica = false;
// let caturra = true;

// let a = voucomebanana && machucada;
// let b = verdadeira1 || verdadeiro2;
let I = 1 + 28 <= 42;
let II = 2 + 22 <= 32;
let III = 3 + 111 >= 201;
let IV = 5 + 15 >= 138143147;

let resposta1 = I && II; 
let resposta2 = III || II; 
let resposta3 = I && IV; 
let resposta4 = III || IV; 

console.log("As duas respostas estão certas?:\n(29 é menor que 42 e 22 é menor que 32):", resposta1);

console.log("\n==============\n");

console.log("Pelo menos uma dessas respostas está certa?\n(114 é maior que 201 e 15 é menor que 32):", resposta2);

console.log("\n==============\n");

console.log("As duas respostas estão certas?\n(29 é menor que 42 e 20 é maior que 138143147):", resposta3,);

console.log("\n==============\n");

console.log("Pelo menos uma dessas respostas está certa?\n(114 é maior que 201 e 20 é maior que 138143147):", resposta4);

