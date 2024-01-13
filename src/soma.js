function soma(a, b) {
    let numA = parseFloat(a)
    if (isNaN(numA)) {
        return "Parâmetros Inválidos"
    }
    let numB = parseFloat(b)
    if (isNaN(numB)) {
        return "Parâmetros Inválidos"
    }
    return numA + numB
}

console.log(soma("1.8" , 2.1))