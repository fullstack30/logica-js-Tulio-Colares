function soma(a, b) {
    let numA = parseInt(a)
    if (isNaN(numA)) {
        return "Parâmetros Inválidos"
    }
    let numB = parseInt(b)
    if (isNaN(numB)) {
        return "Parâmetros Inválidos"
    }
    return numA + numB
}
