//3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.
var number = parseInt(prompt("digite um numero:"))

console.log("numeros pares entre 1 e " + number + ":");

for (var i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}