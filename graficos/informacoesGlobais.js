const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera //fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta erem convertidas em JSON
console.log(dados);

const paragrafo= document.creATEeLEMENT ('P');//criar um elemento de parágrafo
paragrafo.classList.add('graficos-container_texto')//cria uma classe do CSS
}
visualizarInformacoesGlobais();