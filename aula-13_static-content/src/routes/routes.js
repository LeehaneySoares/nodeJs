const express = require('express')
const routes = express.Router()
const controllers = require('../controllers')

routes.get('/', controllers.home)
routes.get('/banner', controllers.banner)

module.exports = routes
