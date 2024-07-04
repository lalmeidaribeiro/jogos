let jogosAlugados = 0;

//função para imprimir no console a informação sobre quantos jogos foram alugados.
function imprimiJogosAlugados(){
  console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
  let jogoClicado = document.getElementById(`game-${id}`);
  let imagem = jogoClicado.querySelector('.dashboard__item__img');
  let botao = jogoClicado.querySelector('.dashboard__item__button');
  let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

  if(imagem.classList.contains('dashboard__item__img--rented')){
    //confirm é alerta com s/n
    if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
      imagem.classList.remove('dashboard__item__img--rented');
      botao.classList.remove('dashboard__item__button--return');
      botao.textContent = 'Alugar';
    }  
  }else{
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
    botao.textContent.add('dashboard__item__button--return');
  }
  jogosAlugados++;
  imprimiJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
  jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
  contarEExibirJogosAlugados();
});

