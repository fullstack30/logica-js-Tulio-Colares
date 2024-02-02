function vogais(texto) {
    if (typeof texto != 'string' || texto == null){
        return "Função aceita apenas string como argumento." 
    }
    if (texto == ""){
        return 0
    }
    vogais = ["u","i","a","á","â","à","ã","ç","é","ê","è","í","ì","ó","ô","ò","õ","ú","û","ù","e","o"]
    let contador = 1
    texto = texto.toLowerCase()
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
            if (texto[i] == vogais[j]) {
                console.log(texto[i], contador)
                contador++
            }
        }
    }
    contador--
    return contador
}
