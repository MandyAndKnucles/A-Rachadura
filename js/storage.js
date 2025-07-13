// Salva qualquer dado no localStorage de forma centralizada
function salvarDadoGlobal(chave, valor) {
    let dados = JSON.parse(localStorage.getItem('dadosGlobais') || '{}');
    dados[chave] = valor;
    localStorage.setItem('dadosGlobais', JSON.stringify(dados));
}

// Recupera qualquer dado salvo globalmente
function obterDadoGlobal(chave) {
    let dados = JSON.parse(localStorage.getItem('dadosGlobais') || '{}');
    return dados[chave];
}

// Exemplo de uso:
// salvarDadoGlobal('nomeDoUsuario', 'Navid');
// let nome = obterDadoGlobal('nomeDoUsuario');