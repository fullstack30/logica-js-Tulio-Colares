function vogais(texto = "") {
    if (typeof texto != 'string'){
        return "Função aceita apenas string como argumento." 
    }
    if (texto == ""){
        return 0
    }
    let contador = 0
    for (let i = 0; i <= texto.length; i++) {
        if (texto[i] == "A"|| texto[i] == "a" || 
            texto[i] == "E"|| texto[i] == "e" || 
            texto[i] == "I"|| texto[i] == "i" || 
            texto[i] == "O"|| texto[i] == "o" || 
            texto[i] == "U"|| texto[i] == "u") {
            contador++
        }
    }
    return contador
}

