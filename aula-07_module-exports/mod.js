const nome = 'Leehaney'
const sobrenome = 'Soares'

/**
 * Podemos exports modulos atráves do objeto EXPORTS
 * abaixo tem 4 formas de passar variáveis, valores e classes por ess objeto
 */

module.exports = 'Leehaney'
module.exports.nome = nome
exports.sobrenome = sobrenome
this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

class Pessoa {
  #nome
  #sobrenome
  #idade

  get nome () {
    return this.#nome ??= ''
  }

  get sobrenome () {
    return this.#sobrenome ??= ''
  }

  get idade () {
    return this.#idade ??= ''
  }

  constructor (nome, sobrenome, idade) {
    this.#nome = nome
    this.#sobrenome = sobrenome
    this.#idade = idade
  }

  nomeCompleto () {
    return this.nome+' '+this.sobrenome
  }
}

this.Pessoa = Pessoa