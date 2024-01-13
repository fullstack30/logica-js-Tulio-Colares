// function soma(a, b) {
//     if (typeof a === "string" || typeof b === "string"){
//         return "parâmetros inválidos"
//     } else if (typeof b === "undefined") {
//         return "parâmetros inválidos"
//     } else {
//         return a + b
//     }
// }


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

console.log(soma("joao", 2))