function fatorial(num) {
    num = parseFloat(num)
    if (typeof num == 'NaN' || num == null || num < 0) {
        return "Função deve receber um argumento do tipo inteiro positivo."
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
