
const nome = 'Leehaney'
const sobrenome = 'Soares'

// module.children.push(nome, sobrenome) // children é um array
// module.exports = () => 'Teste' // podemos passar qualquer cois apara o exports do module

module.exports.hub = { NOME: nome, SOBRENOME: sobrenome }

// console.log(module)