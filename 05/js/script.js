//5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console

let n1 = parseInt(prompt("Digite um número"))

if(n1 > 0){
    console.log("Seu número é positivo!")
}else if (n1 == 0){
    console.log("Seu número é igual a zero!")
}else {
    console.log("Seu número é negativo!")
}