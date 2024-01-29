let lista = []
function inverte_lista(lista) {
    if (Array.isArray(lista) == false || lista == []) {
        return "Argumento inválido. Função espera receber um array como argumento."
    }
    let lista2 = []
    for (let i = 0; i < lista.length; i++) {
        lista2.unshift(lista[i])
    }
    return lista2
}

console.log(inverte_lista(lista));