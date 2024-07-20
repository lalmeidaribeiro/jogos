let sorteados = [];

function adicionar(){
    let nomeSorteio = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');
    sorteados.push(nomeSorteio);

    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeSorteio;
    }else{
        listaAmigos.textContent = listaAmigos.textContent +', '+ nomeSorteio;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear(){
    embaralhaSorteio(sorteados);
    let resultadoSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < sorteados.length; i++){

        if (i == sorteados.length - 1){
            resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + sorteados[i] + ' --> ' + sorteados[0] + '<br>';
        }else{
            resultadoSorteio.innerHTML = resultadoSorteio.innerHTML + sorteados[i] + ' --> ' + sorteados[i+1] + '<br>';
        }
    }
}

//Algoritimo de Fisher-Yates embaralha o sorteio
function embaralhaSorteio(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

