const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3333, function () {
  console.log('servidor rodando na porta 3333. Acesse: http://localhost:3333')
})
