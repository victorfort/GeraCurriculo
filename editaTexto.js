function editaTexto(paragrafo) {
    // Armazena o conteúdo original do parágrafo
    const conteudoOriginal = paragrafo.innerText;

    // Cria um campo de input para edição
    const inputEdicao = document.createElement('input');
    inputEdicao.type = 'text';
    inputEdicao.value = conteudoOriginal;

    // Substitui o parágrafo pelo campo de input
    //paragrafo.innerHTML = '';
    paragrafo.appendChild(inputEdicao);
    inputEdicao.focus(); // Coloca o foco no campo de input

    // Adiciona um event listener para salvar as alterações ao pressionar Enter ou sair do input
    inputEdicao.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            salvarEdicao(paragrafo, inputEdicao.value);
        }
    });

    inputEdicao.addEventListener('blur', function() {
        salvarEdicao(paragrafo, inputEdicao.value);
    });

     // Função para salvar as alterações e restaurar o parágrafo
     function salvarEdicao(paragrafo, novoConteudo) {
        // Verifica se o novo conteúdo não está vazio
        if (novoConteudo.trim() === '') {
            alert('O campo não pode ser vazio. Edição cancelada.');
            // Restaura o conteúdo original
            paragrafo.innerText = conteudoOriginal;
        } else {
            // Atualiza o conteúdo do parágrafo com o novo valor
            paragrafo.innerText = novoConteudo;

            
        }

        // Restaura o evento de clique para editar novamente
        paragrafo.addEventListener('click', () => { editaTexto(paragrafo) });
        salvarTexto();
       
    }
}
