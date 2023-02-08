const express = require('express')
const app = express()

app.get('/', (request, response) =>
  response.send(`
    <form action='/' method='POST'>
      <label for='nome'>Nome:</label>
      <input type='text' name='nome' />
      <label for='senha'>Senha</label>
      <input type='password' name='senha' />
      <button type='submit'>Enviar</button>
    </form>
  `)
)

app.post('/', (req, res) =>
  res.send('Obrigado por nos enviar. Formulário recebido!')
)

app.listen(3000, function () {
  console.log('Servidor executando na porta 3000')
})
