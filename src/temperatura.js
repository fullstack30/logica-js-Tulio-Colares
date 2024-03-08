function temperatura(imp, out) {
    if (typeof imp != 'string' || imp.slice(-1) != "c" && imp.slice(-1) != "C" && imp.slice(-1) != "f" && imp.slice(-1) != "F") {
        console.log('Temperatura inválida!')
    }
    if(imp.slice(-1) == "c" || imp.slice(-1) == "C") {
        imp = imp.slice(0, -1)
        let out = (imp * 9/5) + 32 
        console.log(`${imp} graus célcius são ${out} graus fahrehnheit`)
    } if (imp.slice(-1) == "f" || imp.slice(-1) == "F") {
        imp = imp.slice(0, -1)
        let out = (imp - 32) * 5/9  
        console.log(`${imp} graus fahrehnheit são ${out} graus celsius`)
    }
}

