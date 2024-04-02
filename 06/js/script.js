//6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.
//$- identificar variavel

var A = prompt("Digite uma letra: ")
if(A=== "a" || A === "e" || A=== "i" || A=== "o" || A==="u"){
    console.log(`${A} é uma vogal`)
}else{
    console.log(`${A} é uma consoante`)
}

