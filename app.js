let amigos = [];

function adicionarAmigo(){
    let novoAmigo = document.getElementById('amigo').value;
    if (novoAmigo != ''){
        amigos.push(novoAmigo);
        exibirAmigos();
    } else {
        alert('Insira um nome, o campo não pode estar vazio');
    }
    limparCampos();
}

function limparCampos(){
    let novoAmigo = document.getElementById('amigo');
    novoAmigo.value = '';
}
function exibirAmigos (){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let a = 0; a < amigos.length; a++) {
    const amigo = document.createElement('li');
    amigo.textContent = amigos[a];
    amigos.appendChild(amigo);
  }
}
function exibirAlgo(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function sortearAmigo(){
    console.log('funcao vazia');
}