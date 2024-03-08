function temperatura(imp, out) {
    if (typeof imp != 'string' || imp.slice(-1) != "c" && imp.slice(-1) != "C" && imp.slice(-1) != "f" && imp.slice(-1) != "F") {
        return 'Temperatura inválida!'
    } if (typeof out != 'string' || out != 'c' && out != 'C' && out != 'f' && out != 'F') {
        return 'Temperatura inválida!'
    }
    if(imp.slice(-1) == "c" || imp.slice(-1) == "C") {
        if (out.toUpperCase() == imp.slice(-1).toUpperCase() ) {
            return `${imp}`
        } else {
            imp = imp.slice(0, -1)
            let res = (imp * 9/5) + 32 
            return  `${res}${out}`
        }
        
    } if (imp.slice(-1) == "f" || imp.slice(-1) == "F") {
        if (out.toUpperCase() == imp.slice(-1).toUpperCase() ) {
            return `${imp}`
        } else {
            imp = imp.slice(0, -1)
            let res = (imp - 32) * 5/9  
            return `${res}${out}`
        }
    }
}

