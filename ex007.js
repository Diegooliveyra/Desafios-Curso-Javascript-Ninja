/*
Crie um array com 5 items (tipos variados).
*/
var array = [
  "Diego",
  27,
  true,
  function soma(x, y) {
    return x + y;
  },
  { caneta: "azul" },
];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(x, y) {
  return x.push(y);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(array, [11, "String", { caneta: "azul" }])); // 6

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(
  "O segundo elemento do segundo array é " + array[5][2].caneta + "."
);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + array.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + array[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("Números pares entre 10 e 20:");
var cont = 10;
while (cont <= 20) {
  if (cont % 2 == 0) {
    console.log(cont);
  }
  cont++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log("Números ímpares entre 10 e 20:");
var cont = 10;
while (cont <= 20) {
  if (cont % 2 == 1) {
    console.log(cont);
  }
  cont++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");
for (var cont = 100; cont <= 120; cont++) {
  if (cont % 2 == 0) {
    console.log(cont);
  }
}

console.log("Números ímpares entre 111 e 125:");
for (var cont = 110; cont <= 125; cont++) {
  if (cont % 2 == 1) {
    console.log(cont);
  }
}
