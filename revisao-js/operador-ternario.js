let nota = 7.2
let situacao

/*if(nota >= 6){
    situacao = 'APROVADO'
}
else{
    situacao = 'REPROVADO'
}*/

/*if(nota >= 6) situacao = 'APROVADO'
else situacao = 'REPROVADO'*/

nota = 5.3

// As três partes do operador ternario
// 1° parte: condição (que iria depois do if)
// Entre a 1° e a 2° partes -> ?
// 2° parte: o resultado, caso a condição seja VERDADEIRA
// Entre a 2° e a 3° partes -> :
// 3° parte: o resultado, caso a condição seja FALSA
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(situacao)

let user = 'zemana'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)