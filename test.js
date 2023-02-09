//declarando array list
let list = [1,2,3,4,6]
console.log(list)

//colocando o numero 5 na posição 4(que é a quinta) excluido 0 elemetos
//ou seja, ele colocara o n 5 na quarta posição e jogara o n 6 para a quinta
list.splice(4,0,5)
console.log(list)


// ele coloca o n 7 na sexta posição, na qual estava nula
// se tentassemos colocar um valor numa posição ja preenchida ele substituirá pelo valor 
//atribuido agora
list[6]=7
console.log(list)

let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // sort irá ordenar a lista acima e a função serve para reconhecer as unidades
console.log(points)