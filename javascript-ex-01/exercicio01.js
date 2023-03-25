
alert("Exercício 01 - Explorer JavaScript!");

let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

let resultSum = (Number(numberOne) + Number(numberTwo));
let resultSub = (Number(numberOne) - Number(numberTwo));
let resultMult = (Number(numberOne) * Number(numberTwo));
let resultDiv = (Number(numberOne) / Number(numberTwo));
let resultRestDiv = (Number(numberOne) % Number(numberTwo));


alert("A soma entre: " + numberOne + " e " + numberTwo + " é: " + resultSum);
alert("A subtração entre: " + numberOne + " e " + numberTwo + " é: " + resultSub);
alert("A multiplicação entre: " + numberOne + " e " + numberTwo + " é: " + resultMult);
alert("A divisão entre: " + numberOne + " e " + numberTwo + " é: " + resultDiv);
alert("O resto da divisão entre: " + numberOne + " e " + numberTwo + " é: " + resultRestDiv);

if(resultSum % 2 == 0) {
    alert("A soma dos números é par!")
} else {
    alert("A soma dos números é ímpar!")
};

if(resultSub % 2 == 0) {
    alert("A subtração dos números é par!")
} else {
    alert("A subtração dos números é ímpar!")
};

if(resultMult % 2 == 0) {
    alert("A multiplicação dos números é par!")
} else {
    alert("A multiplicação dos números é ímpar!")
};

if(resultDiv % 2 == 0) {
    alert("A divisão dos números é par!")
} else {
    alert("A divisão dos números é ímpar!")
};

if(resultRestDiv % 2 == 0) {
    alert("O resto da divisão dos números é par!")
} else {
    alert("O resto da divisão números é ímpar!")
};

if (numberOne === numberTwo) {
    alert("Os números digitados são iguais.")
} else {
    alert("Os númeors digitados não são iguais.")
};




