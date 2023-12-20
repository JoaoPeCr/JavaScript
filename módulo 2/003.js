let temdinheru = true;
let estaensolarado = true;
let carro = true;

let resultadoE = "#1 (AND) - vai pro shop?:)"
resultadoE += temdinheru && estaensolarado;
console.log(resultadoE);

let resultadoOU = "#2 (OR) - Vai pro shopping?:)"
resultadoOU += estaensolarado || carro;

console.log(resultadoOU);
