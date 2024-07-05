function adicionar(){
  let produto = document.getElementById('produto').value;
  let quantidadeItens = parseInt(document.getElementById('quantidade').value);
  let nomeProduto = produto.split('-')[0]; //split serpar as springs em arrays - pega a posição split('-')[0]; 
  let valorUnitario = parseFloat(produto.split('R$')[1]);

  //Calculo preco dos produtos
  let preco = quantidadeItens * valorUnitario;

  //Adicioanr produtos ao carrinho
  let carrinho = document.getElementById('lista-produtos'); //sesão que representa o carrinho

  carrinho.innerHTML =`<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeItens}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>`;

}

function limpar(){

}


