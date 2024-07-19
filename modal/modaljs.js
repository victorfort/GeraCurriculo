function limparDados(){
    console.log("func limpar chamada");
    
    // Obtém o modal
    const modal = document.getElementById("myModal");

    // Obtém o botão que abre o modal
    const btn = document.getElementById("openModalBtn");

    // Obtém o elemento <span> que fecha o modal
    const span = document.getElementsByClassName("close")[0];

    // Obtém os botões "Sim" e "Não"
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // Quando o usuário clicar em <span> (x), fecha o modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Quando o usuário clicar no botão "Sim"
    yesBtn.onclick = function() {
      // Ação para limpar os dados arquivados
      localStorage.clear(); // Exemplo de limpeza de localStorage
      modal.style.display = "none"; // Fecha o modal
      alert("Dados arquivados foram limpos.");
      location.reload()
    }

    // Quando o usuário clicar no botão "Não"
    noBtn.onclick = function() {
      modal.style.display = "none"; // Fecha o modal
    }

    // Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    // Abre o modal
    modal.style.display = "block";
}



