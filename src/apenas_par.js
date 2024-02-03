function apenas_par(num) {
    if (typeof num != 'number' || Number.isInteger(num) == false) {
        return "Função aceita apenas números inteiros."
    }

    let lista = []
    // Para números negativos como argumentos
    if (num < 0) {
        while (num <= 0) {
            if (num % 2 == 0) {
                lista.push(num)
            }
            num++
        }
        return lista
    }
    
    // Para números positivos como argumentos
    while (num >= 0) {
        if (num % 2 == 0) {
            lista.unshift(num)
        }
        num--
    }
    return lista
}

console.log(apenas_par(-10))