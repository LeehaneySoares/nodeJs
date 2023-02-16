exports.contact = function (req, res) {
  res.send(`
    <form method='POST' action='/contato'>
      <label>Nome completo:</label>
      <input type='text' name='fullName' />
      <label>Telefone:</label>
      <input type='tel' name='telefone' />
      <label>Endereço:</label>
      <input type='address' name='endereco' />
      <button type='submit'>Cadastrar</button>
    </form>
  `)
}

exports.sendForm = function (req, res) {
  const { fullName, telefone, endereco } = req.body

  if (fullName && telefone && endereco) {
    res.send(`Todos os dados chegaram bem: ${fullName}, ${telefone}, ${endereco}`)
  } else {
    res.send('Desculpe, mas ficou faltando dados')
  }
}
