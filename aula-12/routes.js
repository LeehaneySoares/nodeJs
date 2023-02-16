const express = require('express')
const router = express()
const controllers = require('./controllers/index')

// Rotas referente à Home
router.get('/', controllers.home)
router.post('/', controllers.validator)

router.get('/contato', controllers.contato)
router.post('/contato', controllers.sendForm)

module.exports = router
