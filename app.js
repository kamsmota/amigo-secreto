let amigos = [];

function adicionarAmigo(){
    let novoAmigo = document.getElementById('amigo').value;
    if (novoAmigo != ''){
        amigos.push(novoAmigo);
        exibirAlgo('listaAmigos', amigos)
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
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizá-la

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li'); // Cria o item da lista
        li.textContent = amigo;

        // Botão para remover o amigo
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Remover';
        buttonRemove.classList.add('button-remove');
        buttonRemove.onclick = () => removerAmigo(index);

        li.appendChild(buttonRemove); // Adiciona o botão ao item da lista
        listaAmigos.appendChild(li); // Adiciona o item à lista
    });
}

function exibirAlgo(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa os resultados anteriores

    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera índice aleatório
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}