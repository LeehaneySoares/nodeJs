const home = require('./home/index')
const contato = require('./contato/index')

module.exports = {
  home: home.initialPage,
  validator: home.validator,
  contato: contato.contact,
  sendForm: contato.sendForm
}
