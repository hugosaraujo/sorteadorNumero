let tentativas = 1;
let campo;  
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto)
{
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * 10 + 1)
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
//criar uma função que impeça o número aleatótio de ser utilizado
//crie uma lista para inserir os números aleatórios que já foram sorteados; 
//crie uma lógica condicional para ver se o número foi ou não sorteado, 
    //se for, sorteie outro número.
    //caso contrário, flua com o jogo novamente; 

//Crie uma função exibeInformaçãoNaTela, para evitar a repetição desse código a seguir; 
exibirTextoNaTela("h1", "Jogo de Adivinhação!");
exibirTextoNaTela("p", "Tente Adivinhar o numero entre 1 e 10");
 
function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = " ";
}