function soma(a, b) {
    if (typeof a === "string" || typeof b === "string"){
        return "parâmetros inválidos"
    } else if (typeof b === "undefined") {
        return "parâmetros inválidos"
    } else {
        return a + b
    }
}
