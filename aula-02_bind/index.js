/**
 * Entendendo melhot o .bind()
 */

// function sith () { console.log(this) }

// // const lordSith = sith.bind({ nome: 'Darth bane' }) // Object
// // const lordSith = sith.bind(true) // Boolean
// // const lordSith = sith.bind('Leehaney') // String
// const lordSith = sith.bind(465)

// lordSith((...args) => console.log(args))

/**
 * Entendo melhor o .call()
 */

// const article = {
//   title: 'Descomplicando o .call',
//   language: 'Javascript'
// }

// function mostraResult () {
//   return console.log(`${this.title} em ${this.language}`)
// }

// mostraResult.call(article)

/**
 * Entendo o método .apply()
 */

const array = [2, 4, 5]

function soma (n1, n2, n3) {
  return console.log(this + n1 + n2 + n3)
}

soma.apply(10, array)