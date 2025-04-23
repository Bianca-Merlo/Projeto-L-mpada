const iluminaçao = document.getElementById('iluminaçao')
const botaoL = document.getElementById('botaoL')
const botaoD = document.getElementById('botaoD')
const imagem = document.getElementById('imagem')

function Ligar () {
imagem.src = 'lamp.on.png';
iluminaçao.style.background = 'rgba(231, 226, 153, 0.493)'
}

function Desligar () {
imagem.src = 'lamp.off.png'
iluminaçao.style.background = 'rgba(0, 0, 0, 0.76)'  
}

botaoL.addEventListener('click', Ligar);
botaoD.addEventListener('click', Desligar);