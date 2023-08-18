alert("Bem vindo ao jogo da adivinhacao");

let chute = prompt("Tente acertar o número secreto...");

let numeroSecreto = 27; 

let acertou = chute == numeroSecreto;

if (acertou){
    console.log(`Você Acertou! O número secreto é ${numeroSecreto}`)
} else {
    console.log(`Você errou! O número secreto era ${numeroSecreto}`)
}