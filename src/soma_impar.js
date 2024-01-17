function soma_impar(numInt) {
    if (numInt == 0) {
        return numInt
    }
    if (numInt < 0) {
        return "Função aceita apenas números inteiros positivos"
    } else if (Number.isInteger(numInt == "false") ) {
        return "Função aceita apenas números inteiros positivos"
    }

        let soma = 1
        for (let i = 2; i <= numInt; i++){
            if (i % 2 == 0) {
                soma = soma
            } else if (i % 2 !== 0) {
                soma = soma + i
            }
        }
        return soma
}

