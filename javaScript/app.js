let listaNumerosSorteados = [];
let tentativas = 1;
let campo;  
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto)
{
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length; 

    if(quantidadeElementosLista == 3)
    {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    } else 
    {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute()
{
    let chute = document.querySelector("input").value;
    let variacaoPalavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemAcerto = `Parabéns, você adivinhou o número secreto em ${tentativas} ${variacaoPalavraTentativas}`;

    if (chute == numeroSecreto)
    {
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemAcerto);
        
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
        tentativas++;
        limparCampo();
    }
    
}
exibirTextoNaTela("h1", "Jogo de Adivinhação!");
exibirTextoNaTela("p", "Tente Adivinhar o numero entre 1 e 10");
 
function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = " ";
}