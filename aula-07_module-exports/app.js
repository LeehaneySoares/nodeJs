// const module1 = require('./mod')
// const Pessoa = module1.Pessoa

// const p1 = new Pessoa('Leehaney', 'Soares', 25)

// console.log(p1.nomeCompleto())

const path = require('path') // Função nativa do NodeJs para manipular caminhos de pastas e arquivos

console.log(__dirname) // Me retorna o caminho absoluto da PASTA
console.log(__filename) // Me retorna o caminho absoluto do ARQUIVO atual.

console.log(path.resolve(__filename, 'app.js'))