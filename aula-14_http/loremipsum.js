const fs = require('fs').promises
const http = require('http')
const path = require('path')
const pathFile = path.resolve(__dirname, 'test.txt')

const url = 'http://loripsum.net/api/10/headers'

http.get(url, function (res) {
  let text = ''

  res.on('data', function (chuck) {
    text += chuck    
  })

  res.on('end', async function () {
    fs.writeFile(path.resolve(__dirname, 'test.txt'), text, { flag: 'w', encoding: 'utf8' }) // Escreve o retorno em um arquivo
    console.log(await fs.readFile(pathFile, 'utf8')) // lendo o conteúdo do arquivo
  })

}).on('error', function (err) { // Caso a url seja inválida, essa função será acionada
  console.log('Got error: ' + err.message)
})
