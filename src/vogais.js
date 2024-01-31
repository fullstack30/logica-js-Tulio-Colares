function vogais(texto = "") {
    if (typeof texto != 'string'){
        return "Função aceita apenas string como argumento." 
    }
    if (texto == ""){
        return 0
    }
    let contador = 0
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "A"|| texto[i] == "a" || 
            texto[i] == "E"|| texto[i] == "e" || 
            texto[i] == "I"|| texto[i] == "i" || 
            texto[i] == "O"|| texto[i] == "o" || 
            texto[i] == "U"|| texto[i] == "u" ||
            texto[i] == "Á"|| texto[i] == "á" ||
            texto[i] == "Ó"|| texto[i] == "ó" ||
            texto[i] == "É"|| texto[i] == "é" ||
            texto[i] == "Í"|| texto[i] == "í" ||
            texto[i] == "Ú"|| texto[i] == "ú") {
            contador++
            console.log(texto[i], contador)
        }
    }
    return contador
}

console.log(vogais("pneumoultramicroscopicsilicovulcanoconiótico"))