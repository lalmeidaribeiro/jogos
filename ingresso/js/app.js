function comprar(){
    let tipo = document.getElementById("tipo-ingresso");
    let qntReservada = parseInt(document.getElementById("qtd").value);

    if (qntReservada < 0 ){
        alert("Erro número inválido, por favor insira um número positivo!");
    }else{
        if(tipo.value == 'pista'){
            comprarPista(qntReservada);
        }else if(tipo.value == 'superior'){
            comprarSuperior(qntReservada);
        }else{
            comprarInferior(qntReservada);
        }
    }
}

function comprarPista(qntReservadaPista){
    let qntPista = parseInt(document.getElementById("qtd-pista").textContent);

    if (qntReservadaPista > qntPista){
        alert('Quantidade indisponivel para o tipo de pista');
    }else{
        qntPista = qntPista - qntReservadaPista;
        document.getElementById("qtd-pista").textContent = qntPista;
        alert('Parabéns, compra realizadacom sucesso!');
    }
}

function comprarSuperior(qntReservadaSuperior){
    let qntSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if (qntReservadaSuperior > qntSuperior){
        alert('Quantidade indisponivel para o tipo de superior');
    }else{
        qntSuperior = qntSuperior - qntReservadaSuperior;
        document.getElementById("qtd-superior").textContent = qntSuperior;
        alert('Parabéns, compra realizadacom sucesso!');
    }
}

function comprarInferior(qntReservadaInferior){
    let qntInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (qntReservadaInferior > qntInferior){
        alert('Quantidade indisponivel para o tipo de inferior');
    }else{
        qntInferior = qntInferior - qntReservadaInferior;
        document.getElementById("qtd-inferior").textContent = qntInferior;
        alert('Parabéns, compra realizadacom sucesso!');
    }
}
