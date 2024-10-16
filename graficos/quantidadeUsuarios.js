async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
      
      console.log(dados)

      const nomeDasRdes = Object.keys(dados)
      const quantidadedeUsuarios = Object.values(dados)
  }
  quantidadeUsuarios ()