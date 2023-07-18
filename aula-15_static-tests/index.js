import * as f from './f/index.js'

const somaHorasExtras = (salario, valorHorasextras) => f.add(
  salario,
  valorHorasextras
)

const calcularDesconto = (salario, desconto) => f.subtract(salario, desconto)

function teste (titulo, esperado, retornado) {
  if (esperado === retornado) {
    console.log(`${titulo} passou!`)
  } else {
    console.log(`${titulo} falhou!`)
  }
}

teste('somaHorasExtras', 2500, somaHorasExtras(2000, 400))
teste('caluculaDesconto', 2200, calcularDesconto(2500, 300))
