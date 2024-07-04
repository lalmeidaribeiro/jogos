function alterarStatus(id){
  let gameclicado = document.getElementById(`game-${id}`);
  let imagem = gameclicado.querySelector('.dashboard__item__img');
  let botao = gameclicado.querySelector('.dashboard__item__button');

  if(imagem.classList.contains('dashboard__item__button--return')){
      imagem.classList.remove('dashboard__item__button--return');
  }else{
      imagem.classList.add('dashboard__item__button--return');
  }


}



/*
if(statusId != 1 && statusId !=2){
  alert('Funciona jogo 03');
}else if(statusId !=2 && statusId !=3){
  alert('Funciona jogo 01');
}else{
  alert('Funciona jogo 02');
}*/