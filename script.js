alert("Boas vindas");

let nomeJogador = prompt("Digite seu nome");

let querJogar = confirm("Deseja jogar?");

if (querJogar) {

    alert("Boa Sorte, " + nomeJogador);

    const numeroSecreto = 7;
    let acertou = false;

    while (acertou === false) {
        let numeroDigitado = prompt("Digite um numero");
        numeroDigitado = Number(numeroDigitado);
        acertou = checarNumero(numeroDigitado, numeroSecreto);

    }

} else {

    alert("Que pena! Até a próxima");

}




