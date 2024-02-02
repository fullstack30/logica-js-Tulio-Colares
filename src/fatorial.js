function fatorial(num) {
    if (typeof num !== 'number' || num < 1 || num == null) {
        "Função deve receber um argumento do tipo inteiro positivo."
    }
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result = result * num;
    }
    return result;
  }
 