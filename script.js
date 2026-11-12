alert("BOAS VINDAS");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?")

if (querJogar) {
    alert("Boa sorte, " + nomeJogador);
    const numeroSecreto = 7;
    let numeroDigitado = prompt("Chute um numero");


    if (numeroDigitado == numeroSecreto) {
        alert("Parabens, você acertou!");
    }
    if (numeroDigitado > numeroSecreto) {
        alert("É menos!");
    }
    if (numeroDigitado < numeroSecreto) {
        alert("É maior!");
    }
}

else {
    alert("Que pena, até a próxima!");
}