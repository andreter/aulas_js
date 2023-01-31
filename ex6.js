let ano = 2005
let hj = 2023
let idade = hj - ano

console.log(` Você tem ${idade}`)

if (idade >= 18 && idade <= 70){
    console.log (`Logo você é obrigado votar`)
} else if(idade >= 16 && idade <18 || idade >70) {
    console.log(`Logo você tem a opção de votar`)
}else{
    console.log(`Você ainda não pode votar`)
}
