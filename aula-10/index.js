const pdf = require('html-pdf-node')
const puppeteer = require('puppeteer')
const filePath = require('path').resolve(__dirname)
const { Duplex } = require('stream')

let options = {
  format: 'A4'
}

let file = {
  content: `<h1>Testando esse package</h1>`,
  name: 'teste.pdf',
  url: 'https://startbywgsn.com/tools/techpackPrint/6381?print=true'
}

pdf.generatePdf(file, options)
  .then(buffer => {
    let stream = new Duplex()
    stream.push(buffer)
    stream.push(null)
    return stream
  })
  .then(response => console.log(response, puppeteer))
