function adicionar(){
  let produto = document.getElementById('produto').value;
  let quantidadeItens = parseInt(document.getElementById('quantidade').value);
  let nomeProduto = produto.split('-')[0]; //split serpar as springs em arrays - pega a posição split('-')[0]; 
  let valorUnitario = parseFloat(produto.split('R$')[1]);

    console.log(produto);
    console.log(quantidadeItens);
    console.log(nomeProduto);
    console.log(valorUnitario);

}

function limpar(){

}


