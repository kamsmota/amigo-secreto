let amigos = [];

function adicionarAmigo(){
    let novoAmigo = document.getElementById('amigo');
    if (novoAmigo =! ''){
        amigos.push();
        exibirAmigos('listarAmigos', amigos)
    } else {
        alert('insira um nome válido, o campo não pode estar vazio');
    }
    limparCampos();
}

function limparCampos(){
    let novoAmigo = document.getElementById('amigo');
    novoAmigo.value = '';
}

function exibirAmigos(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}