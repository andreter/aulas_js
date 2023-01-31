let num
let soma = 0
let cont = 1 

while (cont <= 10){
  num = prompt ("digite um numero")
  num = parseInt(num)
  soma = soma + num
  cont++
}
 console.log(`A soma de todos os numeros é de ${soma}`)


 //Este codigo não funciona no visual studio code pois ele nao le o comando prompt
 // Execute no site do codepen