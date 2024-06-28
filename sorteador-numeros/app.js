//Precisa criar uma informações que sortea os números das label Qntidado, do núemor e até o número
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
 
 */

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero = obterNumeroAleatorio(de, ate);
    alert(numero)
}

function obterNumeroAleatorio(min, max){
    return Math.random() * (max - min) + min;
}