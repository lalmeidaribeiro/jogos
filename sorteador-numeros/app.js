
//Precisa criar uma função que sortea os números das label Qntidado, do número e até o número;
//document - busca itens dentro do HTML - usar document.FUNÇÃO 
//getElementById() - busca elementos do HTML pelo ID documento.getElementId('ID DO ESTAMSO BUSCANDO')

//Dar alertas para saber se a variavel está sendo exibida - Nessa faze conseguimos ver so o usuário digirou na label
  /** alert(`Quantidade: ${quantidade}`);
    alert(`Do número: ${de}`);
    alert(`Até o número: ${ate}`); */
    //Se mostrar, significa que conseguimos recuperar os números do intervalo

// Para forçar que um avariavel seja do tipo numerico adicionameos partseInt() andes do document
 /* 
 Sortear o número aleatório - Criamos uma função para gerar os números aleatórios e adicionamos ela a funcition SORTEAR
    Passamos o parametro min(de) e max(ate)
    function obterNumeroAleatorio(min, max)

    Criamos uma variavel número que recebe a função obterNumeroAleatorio e passamos os parametros das variaveis da function sortear
    let numerico - obterNumeroAleatorio(de, ate);

    let numero = obterNumeroAleatorio(de, ate);
    alert(numero)
 
    Math.floor = Coloca o número aleatório como inteiro;
 */

/*
    Criamos uma variavel de lista para armazenar a quantidade de número para sortear e criamos um loopig 
    dentro do For eu declarei e incializei a variaveil i ; e disse
    enquanto i < quantidade; continua rodando e incrementei a variavel dentro do próprio for i++
     for(let i = 0; i < quantidade; i++){
        dentro do for eu atribui o aleatório
        numero = obterNumeroAleatorio(de, ate);

        e adiciono isso dentro da minha lista = metodo PUSH
     }

 */

/*
Imprimindo os números sorteados na label números sorteados: nenhum numero sorteado
precisamso pegar o elemnete e incluir a lista nele
    id="resultado">
    <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>

    Peguei a informaçõe 
    resultado.document.getElementById('resultado');

    colocar o lista dentro da tag 
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    .textContent = usandomos qndo tem uma frase
*/

/*
    Resolver o problema do sorteo repetido 
    while - enquanto um número sorteado não igual a algum numero da lista pode motrar 
    while(sorteados.includes(numero)) ai eu chamo dentro do while a função que gera os números aleatórios
*/

/*
    FUNCIOTION altera status do botão - cor do botão 
    pego o elemento 
    let botao = document.getElementById('btn-reiniciar');

    verifico se ele tiver habilitado eu desabilito senão outro trem
*/

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero; 
    let resultado;

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStaursBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function alterarStaursBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStaursBotao();
}