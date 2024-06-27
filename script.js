const botaoCriptografar = document.querySelector('#criptografar');
const inputTexto = document.querySelector('#texto');

const containerResposta = document.querySelector('#container_resposta');
const respostaTexto = document.querySelector('#resposta');
const nenhumTexto = document.querySelector('#nenhum_texto');

botaoCriptografar.addEventListener('click', () => {
    if (inputTexto.value == '') {
        return;
    }

    let texto = inputTexto.value;

    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");

    nenhumTexto.style.display = 'none';
    containerResposta.style.display = 'flex';
    respostaTexto.value = texto;
});

inputTexto.addEventListener('input', () => {
    if (nenhumTexto.style.display == 'none') {
        containerResposta.style.display = 'none';
        nenhumTexto.style.display = 'block';
    }
});

const botaoDescriptografar = document.querySelector('#descriptografar');

botaoDescriptografar.addEventListener('click', () => {
    if (inputTexto.value == '') {
        return;
    }

    let texto = inputTexto.value;

    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");

    nenhumTexto.style.display = 'none';
    containerResposta.style.display = 'flex';
    respostaTexto.value = texto;
});