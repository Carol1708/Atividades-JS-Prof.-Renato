document.write('<h1>Crie duas variáveis e peça para que o usuário digite dois números inteiros pelo prompt. Após receber os valores nas variáveis, inverta os valores dentro das variáveis, ou seja, o valor da variável x vai para a variável y e o valor da variável y vai para a variável x. Mostre o antes das variáveis e seu depois.</h1>')

let x = parseInt(prompt('Digite o primeiro número'))
let y = parseInt(prompt('Digite o segundo número'))


alert('X = '+x+' e y = '+y);

let z = x;
x = y 
y = z

alert('X = '+x+' e y = '+y);