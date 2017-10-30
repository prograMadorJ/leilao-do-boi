

function Modelo() {

    // instancia variavel modelo como objeto html
    var modelo = document.createElement('html');

    // setar estrutura html que sera o modelo
    this.setModelo = function(classe) {
        modelo = extrairElemento(classe);
    }

    // retorna estrura html modelo
    this.getModelo = function() {
        return modelo;
    }

    // alterar o nome da classe do primeiro elemento do modelo
    this.setClasse = function(classe) {
        modelo.setAttribute('class',classe);
    }

    removerDoDocumento = function(classe) {
        document.querySelector(classe).remove;
    }

    obterElemento = function(classe) {
        return document.querySelector(classe).cloneNode(true);
    }

    extrairElemento = function(classe) {
        var r = obterElemento(classe);
        removerDoDocumento(classe);
        return r; 
    }
}

    window.onload = function() {
        var modelo = new Modelo();
        
        modelo.setModelo('.painel');

        modelo.setClasse('.painel__item');

        console.log(modelo.getModelo());
    }

