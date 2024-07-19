function comprar(){
    let tipo = document.getElementById("tipo-ingresso");
    let qntReservada = parseInt(document.getElementById("qtd").value);

    if(tipo.value == 'pista'){
        comprarPista(qntReservada);

    }
}

function comprarPista(qntReservada){
    let qntPista = parseInt(document.getElementById("qtd-pista").textContent);

    if (qntReservada > qntPista){
        alert('Quantidade indisponivel para o tipo de pista');
    }else{
        qntPista = qntPista - qntReservada;
    
        document.getElementById("qtd-pista").textContent = qntPista;
        alert('Parabéns, compra realizadacom sucesso!');
        
    }
}