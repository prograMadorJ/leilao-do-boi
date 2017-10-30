function Modelo(classe) {

    // instancia variavel modelo como objeto html
    var modelo = document.createElement('html');

    // setar estrutura html que sera o modelo
    this.setModelo = function (classe) {
        modelo = extrairElemento(classe);
    }

    

    // retorna estrutura html modelo
    this.getModelo = function () {
        return modelo.cloneNode(true);
    }

    // alterar o nome da classe do primeiro elemento do modelo 
    this.setClasse = function (classe) {
        modelo.setAttribute('class', classe);
    }

    // adicionar elemento ao modelo
    this.adicionarAoModelo = function (classeDestino, elemento, classeElemento) {
        adicionarAoModelo(classeDestino, elemento, classeElemento);
    }

    // adicionar o modelo ao documento
    this.adicionarModeloAoDocumento = function (classe) {
        adicionarAoDocumento(classe);
    }

    adicionarAoModelo = function (classeDestino, elemento, classeElemento) {
        if (('.' + modelo.className) == classeDestino) {
            modelo.append(elemento.querySelector(classeElemento).cloneNode(true));
        } else {
            modelo.querySelector(classeDestino)
                .append(
                    elemento.querySelector(classeElemento).cloneNode(true)
                );
        }
    }

    adicionarAoDocumento = function (classe) {
        document.querySelector(classe).append(modelo.cloneNode(true));
    }

    removerDoDocumento = function (classe) {
        document.querySelector(classe).remove();
    }

    obterElemento = function (classe) {
        return document.querySelector(classe).cloneNode(true);
    }

    extrairElemento = function (classe) {
        var r = obterElemento(classe);
        removerDoDocumento(classe);
        return r;
    }

    if(classe!=null)this.setModelo(classe);
   
}

window.onload = function () {
    var modelo = new Modelo('.painel');

    //modelo.setClasse('painel__item');


    modelo.adicionarAoModelo('.painel', modelo.getModelo(), '.painel__item');

    modelo.adicionarModeloAoDocumento('.painel__grupo');

    console.log(modelo.getModelo());
}