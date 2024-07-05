let totalCarrinho;
limpar();

function adicionar(){
  let produto = document.getElementById('produto').value;
  let quantidadeItens = parseInt(document.getElementById('quantidade').value);
  let nomeProduto = produto.split('-')[0]; //split serpar as springs em arrays - pega a posição split('-')[0]; 
  let valorUnitario = parseFloat(produto.split('R$')[1]);

  //Calculo preco dos produtos
  let preco = quantidadeItens * valorUnitario;

  //Adicioanr produtos ao carrinho
  let carrinho = document.getElementById('lista-produtos'); //sesão que representa o carrinho
 
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeItens}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>`;
   console.log(preco);

  //Atualizar o valor total o valor total
  totalCarrinho = totalCarrinho + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalCarrinho}`;

  //zera o campo qntidade 
  document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ -';
}


