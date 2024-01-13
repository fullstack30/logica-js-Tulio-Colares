function soma(a, b) {
    let numA = parseFloat(a)
    if (isNaN(numA)) {
        return "Parâmetros inválidos!"
    }
    let numB = parseFloat(b)
    if (isNaN(numB)) {
        return "Parâmetros inválidos!"
    }
    return numA + numB
}
