//9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.

//parseInt - inteiros 
//parseFloat- numeros com virgula


let n1=parseInt(prompt('Digite o primeiro numero:'));
let n2=parseInt(prompt('Digite o segundo numero:'));
let operacao = prompt("Digite a operação matematica(+,-,*./:");

switch(operacao){
    case"+":
    n1=parseInt(prompt('Digite o primeiro numero:'));
    n2=parseInt(prompt('Digite o segundo numero:'));
    console.log('o resultado será: ${n1+n2}');
    break;

    case"-":
    console.log('o resultado será: ${n1-n2}');
    break;

    case"*":
    console.log('o resultado será: ${n1*n2}');
    break;

    case"/":
    console.log('o resultado será: ${n1/n2}');
    break;

    default:
        console.log("Operação invalida");

}
console.log("resultado: " + resultado);








