document.write('<h1>Tipos de triângulo</h1>')

let lado1 = parseFloat(prompt('Digite o 1ª lado'))
let lado2 = parseFloat(prompt('Digite o 2ª lado'))
let lado3 = parseFloat(prompt('Digite o 3ª lado'))


if (lado1 == lado2 && lado1 == lado3) 
{
            alert('É um triângulo equilátero')
}
else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
{
      alert('É um triângulo isósceles')
}
else
      {
      alert('É um triângulo escaleno')
}