function addFormacao() {

    const divEducacao=document.getElementById('educacao')
    const novaFormacao = document.createElement('div')
   
   const titulo = document.createElement('h3')
   
   titulo.innerText='nova formação'; 
   titulo.addEventListener('click',()=> {abreModal("dados",titulo)} );
   titulo.classList.add('elemento')

   const descricao = document.createElement('p')
   descricao.innerText="aqui a descricao da sua nova formação";
   descricao.addEventListener('click', () => { abreModal("dados",descricao) });
   descricao.classList.add('elemento');


   novaFormacao.appendChild(titulo);
   novaFormacao.appendChild(descricao);
   divEducacao.appendChild(novaFormacao)
   

    console.log('info adicionada');
    salvarTexto()

}

function addExperiencia() {
    const divExperiencia = document.getElementById('experiencias')
    const novaExperiencia = document.createElement('div')
    novaExperiencia.classList.add('experiencia')

    const titulo = document.createElement('h3')
   
   titulo.innerText='nova Experiência'; 
   titulo.addEventListener('click',()=> {abreModal("dados",titulo)} );
   titulo.classList.add('elemento')

   const descricao1 = document.createElement('p')
   const descricao2 = document.createElement('p')
   const descricao3 = document.createElement('p')
   for (let i = 1; i <= 3; i++) {
    const descricao = eval(`descricao${i}`); // Avalia a variável dinamicamente
    descricao.innerText = `Descreva qual a função que vc executava. #${i}`;
    descricao.addEventListener('click', () => { abreModal("dados",descricao) });
    descricao.classList.add('elemento');
    
}
novaExperiencia.appendChild(titulo);
novaExperiencia.appendChild(descricao1);
novaExperiencia.appendChild(descricao2);
novaExperiencia.appendChild(descricao3);

divExperiencia.appendChild(novaExperiencia)



    console.log('experiencia adicionada');
    salvarTexto()
}

function addHabilidade() {

    const lista = document.getElementById('ListaHabilidades');
    const habilidade = document.createElement('li');
    habilidade.innerText= 'descreva a habilidade';
    lista.appendChild(habilidade);
    habilidade.addEventListener('click', () => { abreModal("dados",habilidade) });
    habilidade.classList.add('elemento');
    console.log('Habilidade adicionada');
    salvarTexto()
}
