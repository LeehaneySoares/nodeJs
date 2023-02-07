class Pessoa {
  constructor (props) {
    this.nome = props.nome
    this.sobrenome = props.sobrenome
  }

  nomeCompleto () {
    return `${this.nome} ${this.sobrenome}`
  }

  static create (nome, sobrenome) {
    return new Pessoa(
      {
        nome,
        sobrenome
      }
    )
  }
}

export default Pessoa.create()