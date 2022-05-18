document.write('<h1>Faça um script que leia 3 números e mostre o maior deles</h1>')


let n1 = parseInt(prompt('Digite o primeiro número'))
let n2 = parseInt(prompt('Digite o segundo número'))
let n3 = parseInt(prompt('Digite o terceiro número'))

if (n1 > n2 && n1 > n3)
{
      alert('O maior número é:' + n1)
}
else if (n2 > n1 && n2 > n3)
{
      alert('O maior número é: ' + n2)
}
else 
{
      alert('O maior número é: ' + n3)
}
