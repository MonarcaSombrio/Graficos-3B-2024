async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()

  console.log(dados)

  const nomeDasRedes = Object.keys(dados)
  const quantidadedeUsuarios = Object.values(dados)
  const data = [

    {
      x: nomeDasRedes,
      y: quantidadedeUsuarios,
      type: 'bar',//grafico de barras
      marker: {
        color: getComputedStyle(document.body).getPropertyValue('--primary-color')
      }
    }
  ]

  const layout = {
    //cor de fundo do gráfico
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo',
      x: 0,
      font: {
        color: getCSS('--primary-color'),
        family: getCSS('--font'),
        size: 30
      }

    },
    xaxis: {
      tilte: {
        text: 'Bilhões de usuaros ativos',
        font: {
          color: getCSS('--primary-color'),
          family: getCSS('--font'),
          size: 30
        }
      },
    },
    yaxis: {
      tilte: {
        text: 'Nome das redes',
        font: {
          color: getCSS('--primary-color'),
          family: getCSS('--font'),
          size: 30
        }
      }
    }
  }
  
  const grafico = document.createElement('div')//cria uma div
  grafico.className = 'grafico'//cria classe para div
  document.getElementById('graficos-container').appendChild(grafico)//insere a div e a classe na tag onde tm o ID = "graficos-conteiener"
  Plotly.newPlot(grafico, data)
}
quantidadeUsuarios()