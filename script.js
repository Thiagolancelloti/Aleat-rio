const btnNao = document.getElementById('nao');
const btnSim = document.getElementById('sim');

btnNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    btnNao.style.position = 'absolute';
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
});

btnSim.addEventListener('click', () => {
    alert('🎉 Parabéns! foi tudo gravado, irei mostrar para todo mundo');
});