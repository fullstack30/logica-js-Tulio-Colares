function vogais(texto = "") {
    if (typeof texto != 'string'){
        return "Função aceita apenas string como argumento." 
    }
    if (texto == ""){
        return 0
    }
    let contador = 0
    for (let i = 0; i <= texto.length; i++) {
        if (texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u") {
            contador++
        }
    }
    return contador
}

