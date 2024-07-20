function aumentarFonte(){
    const nome = document.getElementById('nome');
    const paragrafo = nome.querySelector('p');
    let tamanho = parseInt(window.getComputedStyle(paragrafo).fontSize);
    tamanho++
    paragrafo.style.fontSize = tamanho+"px";



}
function diminuirFonte(){
    const nome = document.getElementById('nome');
    const paragrafo = nome.querySelector('p');
    let tamanho = parseInt(window.getComputedStyle(paragrafo).fontSize);
    tamanho--
    paragrafo.style.fontSize = tamanho+"px";

}