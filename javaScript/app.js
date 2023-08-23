alert("Bem vindo ao jogo da adivinhacao");

let chute;

let numeroSecreto = 27; 

while(numeroSecreto != chute) 
{

    chute = prompt("Tente acertar o número secreto...")
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
    }
}
