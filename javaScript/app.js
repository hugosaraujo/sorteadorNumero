let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * 10 + 1)
}

function verificarChute()
{
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}

exibirTextoNaTela("h1", "Jogo de Adivinhação!");
exibirTextoNaTela("p", "Tente Adivinhar o numero entre 1 e 10");


/*
alert("Bem vindo ao jogo da adivinhacao");

let numeroMaximo = 150; 

let tentativas = 1; 

while(numeroSecreto != chute) 
{

    chute = prompt(`Tente acertar o número secreto de 1 a ${numeroMaximo}`);
    let acertou = numeroSecreto == chute;
    let maior = numeroSecreto > chute;

    if (acertou)
    {
        console.log(`Você Acertou! O número secreto é ${numeroSecreto}`)
    } 
    else 
    {
        if(maior) 
        {
            console.log("O número secreto é maior")
        } 
        else
        {
            console.log("O numero secreto é menor")
        }
        tentativas++;
    }
}
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabéns, você descobriu que o número secreto é ${numeroSecreto} em ${tentativas} ${palavraTentativas}`)
*/