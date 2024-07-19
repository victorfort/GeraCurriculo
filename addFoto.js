function addFoto() {
    const formImagem = document.getElementById('form-imagem');
    const inputImagem = document.getElementById('input-imagem');
    const containerImagem = document.getElementById('container-imagem');

    // Verifica se os elementos foram encontrados no DOM
    if (!formImagem || !inputImagem || !containerImagem) {
        console.error('Elemento não encontrado. Verifique os IDs no HTML.');
        return;
    }

    formImagem.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const file = inputImagem.files[0]; // Pega o arquivo de imagem selecionado pelo usuário

        if (file) {
            // Cria um objeto URL temporário para a imagem
            const imageUrl = URL.createObjectURL(file);

            // Define a imagem como plano de fundo do container
            containerImagem.style.backgroundImage = `url('${imageUrl}')`;
            containerImagem.style.backgroundSize = 'cover'; // Ajusta o tamanho para cobrir o container
            containerImagem.style.backgroundPosition= 'center'

            // Limpa o campo de seleção de arquivo para permitir novas seleções
            inputImagem.value = '';
        } else {
            // Caso o usuário não tenha selecionado nenhum arquivo
            alert('Por favor, selecione uma imagem.');
        }
    });
}
