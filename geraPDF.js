const { jsPDF } = window.jspdf;

function gerarPDF() {
    ocultarBotoes();
    console.log("gerar pdf chamada");
    const conteudo = document.getElementById('impressao');

    html2canvas(conteudo).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        // Cria um novo documento PDF com tamanho A4
        const pdf = new jsPDF({
            orientation: 'portrait', // ou 'landscape' dependendo da orientação desejada
            unit: 'mm',              // unidade de medida
            format: 'a4'             // tamanho A4
        });

        const pageWidth = 210;  // Largura da página A4 em mm
        const pageHeight = 297; // Altura da página A4 em mm

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const imgWidth = pageWidth;
        const imgHeight = (canvasHeight * pageWidth) / canvasWidth;

        let position = 0;

        // Adiciona a imagem ao PDF dividindo-a em várias páginas, se necessário
        while (position < imgHeight) {
            const currentPageHeight = Math.min(pageHeight, imgHeight - position);

            pdf.addImage(
                imgData,
                'PNG',
                0,
                -position,
                imgWidth,
                imgHeight
            );

            position += currentPageHeight;
            if (position < imgHeight) {
                
                pdf.addPage();
            }
        }

        // Salva o PDF
        pdf.save('documento.pdf');
        restaurarBotoes();
        limparDados();
    });
}

function ocultarBotoes() {
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => botao.style.display = 'none');
}

function restaurarBotoes() {
    const botoes = document.querySelectorAll('button');
    botoes.forEach(botao => botao.style.display = 'inline-block');
}

