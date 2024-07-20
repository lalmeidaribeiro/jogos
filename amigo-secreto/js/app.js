function adicionar(){
    let nomeSorteio = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeSorteio;
    }else{
        listaAmigos.textContent = listaAmigos.textContent +', '+ nomeSorteio;
    }
    document.getElementById('nome-amigo').value = '';
}

