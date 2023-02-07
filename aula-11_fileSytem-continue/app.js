const path = require('path')
const currentPath = path.resolve(__dirname, './', 'teste.json')
const write = require('./modules/write.js')
const read = require('./modules/read')

const pessoas = [
	{ nome: 'Leehaney' },
	{ nome: 'Valmira' },
	{ nome: 'Taylor' },
	{ nome: 'Betania' }
]

const json = JSON.stringify(pessoas, '', 2)

// write(currentPath, json)
async function ler (caminho) {
  let result = await read(caminho)
  let resultParsed = await JSON.parse(result)
  return resultParsed
}

ler(currentPath)
  .then(response => response.map(object => console.log(object.nome)))
