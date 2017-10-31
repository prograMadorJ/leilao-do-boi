function Modelo(classe) {
    
        // instancia variaveis
        var modelo;
        var estagio;
        var front;
    
        this.prototype = Modelo.prototype;

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

        // retorna estrutura html estagio
        this.getEstagio = getEstagio;

        // retorna estrutura html front
        this.getFront = getFront;
    
        // alterar o nome da classe de um elemento do modelo 
        this.setClasse = setClasse;

        // alterar o nome de varias classes
        this.setTodasClasses = setTodasClasses;

        // alterar atributo do elmento
        this.setAtributo = setAtributo;

        // adicionar conteudo ao modelo
        this.setConteudo = setConteudo;
    
        // adicionar conteudo do estagio
        this.adicionarAoEstagio = adicionarAoEstagio;

        // adicionar elemento ao front
        this.adicionarAoFront = adicionarAoFront;
    
        // adicionar o front ao documento
        this.adicionarFrontAoDocumento = adicionarFrontAoDocumento;
    
        function novoModelo() {
            modelo = document.createElement('html');
        }

        function novoEstagio() {
            estagio = modelo.cloneNode(true);
        }

        function setModelo(classe) {
            modelo = extrairElemento(classe);
        }

        function getModelo() {
            return modelo.cloneNode(true);
        }

        function getEstagio() {
            return estagio.cloneNode(true);
        }

        function getFront() {
            return front.cloneNode(true);
        }

        function setClasse(classeDest,classe) {
            if(('.'+estagio.className)==classeDest) {
                estagio.setAttribute('class',classe);
            }
            else {
                estagio.querySelector(classeDest).setAttribute('class', classe);
            }
        }

        function setTodasClasses(classeDest,classe) {
            if(('.'+estagio.className)==classeDest) {
                estagio.setAttribute('class',classe);
            }
            estagio.querySelectorAll(classeDest)
                .forEach(function(element) {
                    element.querySelector(classeDest).setAttribute('class', classe);
                });
        }

        function setAtributo(classe,atributo,valor) {
            estagio.querySelector(classe).setAttribute(atributo,valor);
        }

        function setConteudo (classe,conteudo){
            if(('.'+estagio.className)==classe) {
                estagio.innerHTML = conteudo;
            }
            else {
                estagio.querySelector(classe).innerHTML = conteudo;
            }
        }

        function adicionarAoEstagio(elemento,classeElemento,classeDestino) {
           
            if(('.'+estagio.className)==classeElemento) {
                if(('.'+elemento.className)==classeElemento) {
                    estagio.append(elemento.cloneNode(true));
                }
                else {
                    estagio.append(elemento.querySelector(classeElemento).cloneNode(true));
                }
            }
            else {
                if(('.'+elemento.className)==classeElemento) {
                    estagio.querySelector(classeDestino).append(elemento.cloneNode(true));
                }
                else {
                    estagio.querySelector(classeDestino).append(elemento.querySelector(classeElemento).cloneNode(true));
                }    
            }
        }

        function adicionarAoFront (classeDestino, elemento, classeElemento) {
            if (('.' + elemento.className) == classeDestino) {
                front.append(elemento.cloneNode(true));
            } else {
                front.append(elemento.querySelector(classeElemento).cloneNode(true));
            }
        }
    
        function adicionarFrontAoDocumento (classe) {
            document.querySelector(classe).append(front);
        }
    
        var removerDoDocumento = function (classe) {
            document.querySelector(classe).remove();
        }
    
        var copiarElemento = function (classe) {
            return document.querySelector(classe).cloneNode(true);
        }

        var extrairElemento = function (classe) {
            var elemento = document.createElement('html');
            elemento.append(document.querySelector(classe));
            return elemento;
        }

        if(classe!=null)
            this.setModelo(classe);
    }



    window.onload = function () {
    
    var modelo = new Modelo('.painel');

    modelo.novoEstagio();

    modelo.adicionarAoEstagio(modelo.getModelo(),'.painel__item','.painel');

    modelo.setConteudo('.painel__item','TESTE');

    console.log(modelo.getEstagio());

    }