

function salvarTexto(){
    
    const conteudoDiv = document.querySelector('#impressao');

    // Função para salvar o conteúdo da div no localStorage
    
        const conteudo = conteudoDiv.innerHTML;
        localStorage.setItem('conteudoSalvo', conteudo);
        console.log('Conteúdo salvo com sucesso!');
    
}

    // Função para carregar o conteúdo salvo do localStorage
    function carregaTexto(){
        
        const conteudoSalvo = localStorage.getItem('conteudoSalvo');
        if (conteudoSalvo) {
            const conteudoDiv = document.querySelector('#impressao');
            conteudoDiv.innerHTML = conteudoSalvo;
            console.log('Conteúdo carregado com sucesso!');
        } else {
            console.log('Nenhum conteúdo salvo encontrado.');
        }
        adicionarEventListenerParaParagrafos()
    }

 
let conteudoCarregado = false; // Variável de controle

window.onload = function() {
    if (!conteudoCarregado) {
        carregaTexto(); // Chama a função para carregar o conteúdo ao carregar a página
        conteudoCarregado = true; // Marca que o conteúdo foi carregado
    }
    
}
