function Modelo(classe) {
    
        // instancia variavel modelo como objeto html
        var modelo = document.createElement('html');
        var estagio = document.createElement('html');
        var front = document.createElement('html');
    
        // cria um novo modelo
        this.novoModelo = novoModelo;
        
        // criar um novo estagio
        this.novoEstagio = novoEstagio;

        // adicionar ao front
        this.adicionarAoFront = adicionarAoFront;

        // setar estrutura html que sera o modelo
        this.setModelo = setModelo;
    
        // retorna estrutura html modelo
        this.getModelo = getModelo;
    
        // alterar o nome da classe de um elemento do modelo 
        this.setClasse = setClasse;

        // alterar atributo do elmento
        this.setAtributo = setAtributo;

        // adicionar conteudo ao modelo
        this.setConteudo = setConteudo;
    
        // adicionar elemento ao front
        this.adicionarAoFront = adicionarAoFront;
    
        // adicionar o front ao documento
        this.adicionarFrontAoDocumento = adicionarFrontAoDocumento;
    

        novoModelo = function() {
            modelo = document.createElement('html');
        }

        novoEstagio = function() {
            estagio = modelo.cloneNode(true);
        }

        setModelo = function(classe) {
            modelo = extrairElemento(classe);
        }

        getModelo = function() {
            return modelo.cloneNode(true);
        }

        setClasse = function (classeDest,classe) {
            if(('.'+estagio.className)==classeDest) {
                estagio.setAttribute('class',classe);
            }
            else {
                estagio.querySelector(classeDest).setAttribute('class', classe);
            }
        }

        setAtributo = function(classe,atributo,valor) {
            estagio.querySelector(classe).setAttribute(atributo,valor);
        }

        setConteudo = function(classe,conteudo){
            if(('.'+estagio.className)==classe) {
                estagio.innerHTML = conteudo;
            }
            else {
                estagio.querySelector(classe).innerHTML = conteudo;
            }
        }

        adicionarAoFront = function (classeDestino, elemento, classeElemento) {
            if (('.' + elemento.className) == classeDestino) {
                front.append(elemento.cloneNode(true));
            } else {
                front.append(elemento.querySelector(classeElemento).cloneNode(true));
            }
        }
    
        adicionarFrontAoDocumento = function (classe) {
            document.querySelector(classe).append(front);
        }
    
        removerDoDocumento = function (classe) {
            document.querySelector(classe).remove();
        }
    
        copiarElemento = function (classe) {
            return document.querySelector(classe).cloneNode(true);
        }

        extrairElemento = function (classe) {
            var elemento = document.createElement('html');
            elemento.append(document.querySelector(classe));
            return elemento;
        }

        if(classe!=null)
            this.setModelo(classe);
    }

window.onload = function () {
    
    var modelo = new Modelo('.painel');


    console.log(modelo.getModelo());
}