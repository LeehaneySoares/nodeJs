exports.initialPage = function (req, res) {
  res.send(`
    <form method='POST' action='/'>
      <label>Nome:</label>
      <input type='text' name='nome' />
      <label>Senha:</label>
      <input type='password' name='senha' />
      <button type='submit'>Enviar</button>
    </form>
  `)
}

exports.validator = function (req, res) {
  const { nome, senha } = req.body

  if (nome === 'Leehaney465' && senha === 'grandchase') {
    res.send('Usuário validado!')
  } else {
    res.send('Desculpe, nome ou senha incorreta :(')
  }
}
