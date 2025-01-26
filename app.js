let amigos = [];

function adicionarAmigo (){
    novoAmigo = document.getElementById('amigo')
    if (novoAmigo =! ''){
        amigos.push(novoAmigo);
    } else {
        return ('insira um nome válido, o campo não pode estar vazio');
    }
    limparCampos();;
}

function limparCampos(){
    novoAmigo = document.getElementById('amigo');
    novoAmigo.value = '';
}