let tenativas = 1; 
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
    if (chute == numeroSecreto)
    {
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", "Parabéns, você adivinhou o número secreto");
    }
    else 
    {
        let maior = numeroSecreto > chute;
        if (maior)
        {
            exibirTextoNaTela("h1", "ERROU!");
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        else
        {
            exibirTextoNaTela("h1", "ERROU!");
            exibirTextoNaTela("p", "O número secreto é menor");
        }
        tenativas++;
    }
     
    //adicionar uma variável de tentativas no início do código; 
    //reiniciar ao jogo quando o usuário acertar o número secreto; 
    console.log(chute == numeroSecreto);
}
//criar uma função que impessa o número aleatótio de ser utilizado
//crie uma lista para inserir os números aleatórios que já foram sorteados; 
//crie uma lógica condicional para ver se o número foi ou não sorteado, 
    //se for, sorteie outro número.
    //caso contrário, flua com o jogo novamente; 

//Crie uma função exibeInformaçãoNaTela, para evitar a repetição desse código a seguir; 
exibirTextoNaTela("h1", "Jogo de Adivinhação!");
exibirTextoNaTela("p", "Tente Adivinhar o numero entre 1 e 10");

//criar função para limpar a tela após o usuário tentar adivinhar o número; 

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