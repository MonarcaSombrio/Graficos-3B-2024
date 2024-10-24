async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
      
      console.log(dados)

      const nomeDasRedes = Object.keys(dados)
      const quantidadedeUsuarios = Object.values(dados)
      const data =[

      {
        x:nomeDasRedes,
        y:quantidadedeUsuarios,
        type:'bar',//grafico de barras
        marker: {
          color: getComputedStyle(document.body).getPropertyValue('--primary-color')
        }
      }
    ]

    const grafico = document.createElement('div')//cria uma div
    grafico.className = 'grafico'//cria classe para div
    document.getElementById('graficos-container').appendChild(grafico)//insere a div e a classe na tag onde tm o ID = "graficos-conteiener"
    Plotly.newPlot(grafico,data)
  }
  quantidadeUsuarios()