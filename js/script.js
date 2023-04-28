/* Carrega ao abrir a página para o botão slider*/
window.onload = function () {
    document.getElementById("mode").onchange = function () {
        if (this.checked) {// Caso arraste o botão
            preto();
        } else {
            branco();
        }
    }

// Carregamento Automático da montagem da data no id dt
    var d = document.querySelector('#dt')
    now = new Date
    var mes = now.getMonth();
    switch (mes) {// Array sempre inicia com 0case 9: mes = "Outubro";

        case 0: mes = "janeiro";
            break;
        case 1: mes = "Fevereiro";
            break;
        case 2: mes = "Março";
            break;
        case 3: mes = "Abril";
            break;
        case 4: mes = "Maio";
            break;
        case 5: mes = "Junho";
            break;
        case 6: mes = "Julho";
            break;
        case 7: mes = "Agosto";
            break;
        case 8: mes = "Setembro";
            break;
        case 9: mes = "Outubro";
            break;
        case 10: mes = "Novembro";
            break;
        case 11: mes = "Dezembro";
            break;

    }
    // faz a saída com os parâmetros da data diretamente na linha que o scripr é executado
    d.innerHTML = "Hoje é " + now.getDate() + " de " + mes + " de " + now.getFullYear();


}

/* Função fundo preto para os ids */
function preto() {
    let estilo = document.querySelectorAll("#header, #main, #menu, #right, #rodape, #menu-rodape");
    /*  percorre com o FOR para aplicar em todos os IDs*/
    for (let i = 0; i < estilo.length; i++) {
        estilo[i].style.cssText =
            'color: white;' +
            'background-color: black;'
            ;
    }
}

/* Função fundo branco para os ids */
function branco() {
    let estilo = document.querySelectorAll("#header, #main, #menu,#right, #rodape, #menu-rodape");
    /*  percorre com o FOR para aplicar em todos os IDs*/
    for (let i = 0; i < estilo.length; i++) {
        estilo[i].style.cssText =
            'color: black;' +
            'background-color: white;';
    }
}

/* Função texto normal para os ids */
function normal() {
    let texto = document.querySelectorAll("#header, #main, #menu, #right, #rodape, #menu-rodape");
    /*  percorre com o FOR para aplicar em todos os IDs*/
    for (let i = 0; i < texto.length; i++) {
        texto[i].style.cssText =
            'font-size: 16px;'
            ;
    }
}

/* Função texto grande para os ids */
function grande() {
    let texto = document.querySelectorAll("#header, #main, #menu,#right, #rodape, #menu-rodape");
    /*  percorre com o FOR para aplicar em todos os IDs*/
    for (let i = 0; i < texto.length; i++) {
        texto[i].style.cssText =
            'font-size: 40px;'
            ;
    }
}


