const express = require('express')
const router = express()

router.get('/testes/:id?', (req, res) => {
  res.send(`Os parâmetros passados foram:
    ${req.query['utm_source']},
    ${req.query['utm_medium']},
    ${req.query['utm_campaign']}
  `)
})

router.listen(3000, function () {
  console.log('servidor rodando na porta 3000')
})
