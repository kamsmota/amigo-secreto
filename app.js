let amigos = [];
let sorteados = [];

function adicionarAmigo(){
    let novoAmigo = document.getElementById("amigo").value;
    if (novoAmigo != ''){
        amigos.push(novoAmigo);
        exibirAmigos();
    } else {
        alert('Insira um nome, o campo não pode estar vazio');
    }
    limparCampos();
}

function limparCampos(){
    let novoAmigo = document.getElementById("amigo");
    novoAmigo.value = '';
}


function exibirAmigos (){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let a = 0; a < amigos.length; a++) {
    const amigo = document.createElement("li");
    amigo.textContent = amigos[a];
    listaAmigos.appendChild(amigo);
  }
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert("Insira alguns nomes para sorteá-los!");
      } else {
        if (sorteados.length == amigos.length){
            alert("Todos os amigos já foram sorteados!")
        }
        let escolhido = Math.floor(Math.random() * amigos.length);
        while (sorteados.includes(amigos[escolhido])){
            escolhido = Math.floor(Math.random()* amigos.length);
        }
        sorteados.push(amigos[escolhido]);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Seu amigo secreto é: ${amigos[escolhido]}!`;
      }
}