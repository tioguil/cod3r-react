const produto = {
    nome: "caneta Azul",
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return {...objeto}
}

const novoProdudo = clone(produto)

novoProdudo.nome = "caneta Preta"

console.log(novoProdudo.nome)