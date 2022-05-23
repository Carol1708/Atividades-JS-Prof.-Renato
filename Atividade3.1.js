const binario = prompt('Digite um número binário')

let decimal = 0;

for (let i = 0; i < binario.length; i++) 
decimal += Math.pow(2, i) * binario[binario.length - i - 1]; 

alert (binario + (' em números decimais é: ' + decimal))