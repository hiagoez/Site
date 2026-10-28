let sim = 0;
let i = 0;
let perguntas = [
"Você conhecia a vítima?",
"Você telefonou para a vítima?",
"Você mora perto da vítima?",
"Você trabalha ou estuda com a vítima?",
"Você encontrou a vítima recentemente?",
"Você teve algum conflito com a vítima?",
"Você presenciou algum acontecimento suspeito?",
"Você sabe quem poderia estar envolvido?",
"Você conhece pessoas próximas da vítima?",
"Você sabia da rotina da vítima?"
];
function comecar() {
sim = 0;
i = 0;
document.getElementById("resultado").innerHTML = "";
document.getElementById("total").innerHTML = "";
document.getElementById("reiniciar").hidden = true;
document.getElementById("pergunta").innerHTML = perguntas[i];
document.getElementById("numero").innerHTML = "Pergunta 1 de 10";
}
function responder(resposta) {
if (resposta == "sim") {
sim = sim + 1;
}
i = i + 1;
if (i < 10) {
document.getElementById("pergunta").innerHTML = perguntas[i];
document.getElementById("numero").innerHTML =
    "Pergunta " + (i + 1) + " de 10";
} else {
document.getElementById("pergunta").innerHTML =
    "Questionário terminado!";
document.getElementById("numero").innerHTML = "";
if (sim < 5) {
document.getElementById("resultado").innerHTML =
"O sistema te classificou como inocente, com base nas suas respostas";
} else if (sim == 5) {
document.getElementById("resultado").innerHTML =
    "O sistema te classificou como suspeito, com base nas suas respostas";
} else if (sim >= 6 && sim <= 8) {
document.getElementById("resultado").innerHTML =
    "O sistema te classificou como cúmplice, com base nas suas respostas";
} else {
document.getElementById("resultado").innerHTML =
    "O sistema te classificou como culpado, com base nas suas respostas";
}
document.getElementById("total").innerHTML =
    "Quantidade de respostas sim: " + sim;
document.getElementById("reiniciar").hidden = false;        return;
}
}
comecar();
