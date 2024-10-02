const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera //fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta erem convertidas em JSON

    const pessoasConectadoas = (dados.total_pessoas_conectadas / 1e9);// cria uma variável, pega os "dados.total_pessoas_conectadas" e divide por 1 bilhão
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9);
    const horas = parseInt(dados.tempo_medio / 1e9);
    const minutos = Marh.round((dados.tempo_medio-horas) * 60);//cria uma variável que utiliza apenasos minutos das horas efas o arredeendamento vom a função "Math.round"
    console.log(dados);

    const paragrafo = document.createElement('P');//criar um elemento de parágrafo
    paragrafo.classList.add('graficos-container_texto');//cria uma classe do CSS
    paragrafo.innerHTML = `você sabia que o mundo tem <span> ${pessoasNoMundo} bilhoes </pan> de pessoas 
e que aproximadamente <span> ${pessoasConectadoas} bilhoes </span> estão conectadas em alguma rede social e passam em média <span> ${horas} horas </span>
e ${minutos} minutos conectadas.`
    //criara variáel"container" seleciona o ID na section do HTML
    const container = document.getElementById('graficos-container');
    container.appendChild(parágrafo);//insere o parágrafodentro do "container" 

}
visualizarInformacoesGlobais();