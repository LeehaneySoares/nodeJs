const moment = require('moment')

const date = new Date()

const formateDate = new Intl.DateTimeFormat('pt-BR').format(date)

moment.locale('pt-BR')

const dia = moment().format('dddd')

console.log(dia)

console.log(`
  O dia da semana com moment é: ${dia}. Com o INTL: ${formateDate}
`)