function fibonacci(num) {
    let a = 0; 
    let b = 1; 
  
    
    if (num === 0 || num === 1) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
  
    
    while (b < num) {
      let c = a + b; 
      a = b;         
      b = c;         
    }
  
    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  // Exemplo de uso
  //Numeros Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, ...
  let numero = 55; // Insira o número que deseja verificar
  console.log(fibonacci(numero));