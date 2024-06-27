const botaoCriptografar = document.querySelector('#criptografar');
const inputTexto = document.querySelector('#texto');

const containerResposta = document.querySelector('#container_resposta');
const respostaTexto = document.querySelector('#resposta');
const nenhumTexto = document.querySelector('#nenhum_texto');

botaoCriptografar.addEventListener('click', () => {
    if (inputTexto.value == '') {
        return;
    }

    regex = /([a-z0-9\s])/

    for (const i of inputTexto.value) {
        if (!regex.test(i)) {
            alert('Por favor não use letras maiúsculas nem mesmo caracteres especiais!!!');
            return
        }
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

    regex = /([a-z0-9\s])/

    for (const i of inputTexto.value) {
        if (!regex.test(i)) {
            alert('Por favor não use letras maiúsculas nem mesmo caracteres especiais!!!');
            return
        }
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

const botaoCopiar = document.querySelector('#copiar');

botaoCopiar.addEventListener('click', () => {
    if (botaoCopiar.innerText == 'Copiar') {
        navigator.clipboard.writeText(respostaTexto.value)
        .then(() => {
            botaoCopiar.classList.add('copiado');
            botaoCopiar.innerText = 'Copiado';
    
            setTimeout(() => {
                botaoCopiar.classList.remove('copiado');
                botaoCopiar.innerText = 'Copiar';
            }, 3000);
        });
    }
})