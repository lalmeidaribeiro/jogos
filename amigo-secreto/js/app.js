let sorteados = [];

function adicionar(){
    let nomeSorteio = document.getElementById('nome-amigo').value;
    //Validação do campo nome-amigo nulo 
    if(nomeSorteio == ''){
        alert('Atenção, você não informou o nome para o sorteio');
        return;
    }

    //Validando nome duplicado 
    if(sorteados.includes(nomeSorteio)){
        alert('Esse nome já foi adicionado.. Por favor, insira o sobrenome do amigo');
        return;
    }

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
    //Validação dos número de amigos para o soteio 
    if(sorteados.length < 4){
        alert('Adicione pelo menos 4 amigos para o sorteio!');
        return;
    }

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

function reiniciar(){
    sorteados = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
