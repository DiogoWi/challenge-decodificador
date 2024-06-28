// verificar tema do navegador ao carregar a página
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

window.addEventListener('load', () => {
    if (prefersColorScheme.matches) {
        document.querySelector("link[rel='shortcut icon']").href = "images/iconB.png";
    } else {
        document.querySelector("link[rel='shortcut icon']").href = "images/icon.png";
    }
});

// verifica a troca de tema
prefersColorScheme.addListener((event) => {
    if (event.matches) {
        document.querySelector("link[rel='shortcut icon']").href = "images/iconB.png";
    } else {
        document.querySelector("link[rel='shortcut icon']").href = "images/icon.png";
    }
});

// funções criptografar/descriptografar
const botaoCriptografar = document.querySelector('#criptografar');
const inputTexto = document.querySelector('#texto');

const containerResposta = document.querySelector('#container_resposta');
const respostaTexto = document.querySelector('#resposta');
const nenhumTexto = document.querySelector('#nenhum_texto');

botaoCriptografar.addEventListener('click', () => {
    if (inputTexto.value == '') {
        return;
    }

    regex = /([!-@[-~\s])/

    for (const i of inputTexto.value) {
        if (!regex.test(i)) {
            alert('Por favor não use letras maiúsculas nem mesmo letras com acentuação!!!');
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

const botaoDescriptografar = document.querySelector('#descriptografar');

botaoDescriptografar.addEventListener('click', () => {
    if (inputTexto.value == '') {
        return;
    }

    regex = /([!-@[-~\s])/

    for (const i of inputTexto.value) {
        if (!regex.test(i)) {
            alert('Por favor não use letras maiúsculas nem mesmo letras com acentuação!!!');
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

// função limpar ao alterar
inputTexto.addEventListener('input', () => {
    if (nenhumTexto.style.display == 'none') {
        containerResposta.style.display = 'none';
        nenhumTexto.style.display = 'block';
    }
});

// função copiar texto resposta
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

// função do menu
const logo = document.querySelector('#logo');
const menu = document.querySelector('menu');

logo.addEventListener('click', () => {
    menu.classList.toggle('ativado');

    if (menu.classList == 'ativado') {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.style.transform = 'translateY(70px)';
            menu.style.opacity = '1';
        }, 100);
    } else {
        menu.style.transform = 'translateY(0)';
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 100);
    }
})

logo.addEventListener('blur', () => {
    setTimeout(() => {
        menu.classList.remove('ativado');
        menu.style.transform = 'translateY(0)';
        menu.style.opacity = '0';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 100);
    }, 100);
})

// função alterar cor
const botoes = [...document.querySelectorAll('menu > button')];

botoes.map((element) => {
    element.addEventListener('click', () => {
        document.documentElement.style.setProperty('--cor-primaria', element.value);
    })
});