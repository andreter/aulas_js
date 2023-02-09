const nums = [40,35,12,8,72]

//método map

let resultado = nums.map(function(valor){ // map vai analizar todos os itens um de cada
    return valor*2
})

console.log(resultado)

//método filter 

let lista = [7,13,22,15,33,55]
let lista2 = []

lista2 = lista.filter(function(item){  //aqui ele esta declarando um valor função lista2 apartir de lista (obs: filter analisa item por item)
    if(item < 20){                     // onde todos os numeros menores que 20
        return true                    // serão retornados (ou declarados) na lista2
    }else{
        return false 
    }
})
console.log(lista)
console.log(lista2)

// sort() ordenara a lista, porém a liosta numerica ele ordenara como string (não le unidade)
//Para ler numericamente devemos ante fazer um comparador função


let list =[70,72,2,32,13,22,15,33,55,6]
let list2 = ["zebra","abelha","borracha","girafa"]

list.sort()
console.log(list)
list2.sort()
console.log(list2)



