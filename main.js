'use strict'

const botaoCriar = document.getElementById('criar')

function criarCaixa (numero) {
    const caixa = document.createElement('div')
    caixa.className = 'caixa'
    caixa.textContent = numero
    return caixa
}

function adicionarCaixa () {
    const container = document.getElementById('container')

    for ( let i=1; i<=1000; i++){
    const caixa = criarCaixa(i)
    container.append(caixa)
    }

}

botaoCriar.addEventListener('click',adicionarCaixa)