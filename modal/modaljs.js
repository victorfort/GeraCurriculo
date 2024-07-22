
function abreModal(tipo, paragrafo){
  

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const editBtn = document.getElementById("editBtn");
  const dellBtn = document.getElementById("dellBtn");
 
  //esconde os botoes 
  yesBtn.style.display= 'none';
  noBtn.style.display= 'none';

  // Obtém o modal
  const modal = document.getElementById("myModal");

    
  

    // Abre o modal
    modal.style.display = "block";


  //seleciona a funcao
  //direciona
  if (tipo === "dados"){
    manipulaDados(paragrafo, modal)
  }
  
  
}

function limparDados(){ 
  // Obtém o elemento <span> que fecha o modal
  const span = document.getElementsByClassName("close")[0];
  const modal = document.getElementById("myModal");
  const editBtn = document.getElementById("editBtn");
  const dellBtn = document.getElementById("dellBtn");
  editBtn.style.display= 'none';
  dellBtn.style.display= 'none';

  modal.style.display = "block";
  yesBtn.style.display= 'block';
  noBtn.style.display= 'block';
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
    // Quando o usuário clicar em <span> (x), fecha o modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    } 
}




function manipulaDados(paragrafo, modal){
  const span = document.getElementsByClassName("close")[0];
    
    yesBtn.style.display= 'none';
    noBtn.style.display= 'none';
    editBtn.style.display= 'block';
    dellBtn.style.display= 'block';

  editBtn.onclick= () =>{ 
    modal.style.display =  'none'
    editaTexto(paragrafo)
  }
  dellBtn.onclick = ()=>{
    paragrafo.style.display = 'none'
    modal.style.display =  'none'
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
}



