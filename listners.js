

// Função para adicionar event listener em todos os <p> dentro de #educacao
function adicionarEventListenerParaParagrafos() {
    // Seleciona todos os elementos p e h3
    const paragrafos = document.querySelectorAll(' p');
    const titulos = document.querySelectorAll('h3')

    titulos.forEach(titulo => {
        titulo.classList.add('elemento')
        titulo.addEventListener('click', () => { abreModal("dados",titulo) });
    });

    // Itera sobre cada <p> e adiciona o event listener desejado
    paragrafos.forEach(paragrafo => {
        paragrafo.classList.add('elemento')
        paragrafo.addEventListener('click', () => { abreModal("dados",paragrafo)});
    });
}



// Chama a função para adicionar os event listeners aos parágrafos ao carregar a página
document.addEventListener('DOMContentLoaded', adicionarEventListenerParaParagrafos);
