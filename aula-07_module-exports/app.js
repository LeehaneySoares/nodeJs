const module1 = require('./mod')
const Pessoa = module1.Pessoa

const p1 = new Pessoa('Leehaney', 'Soares', 25)

console.log(p1.nomeCompleto())