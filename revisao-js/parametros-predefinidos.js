// Parametros predefinidos ou opcionais em funções
// Regras: 
// 1) Parâtros opcionais devem vir apos os obrigatorios
// 2) Pode haver mais de um parametro opcional por função

// forma como parametro predefinido ou opcional
function calcularArea(base, altura, forma = 'Q', casaDec = 2) {
    let res
    switch(forma){
        case 'Q': // Quadrilatero
            res = base * altura
            break
        case 'T': // Triangulo
            res = base * altura / 2
            break
        case 'E': // Elipse
            res = (base / 2) * (altura / 2) * Math.PI
    }
    return res.toFixed(casaDec)
}
console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E'))
console.log(calcularArea(30, 60))
// Caso seja necessario omitir um parametro predefinido que não
// seja o ultimo, pode-se usar o valor undefided em seu lugar
console.log(calcularArea(30, 60, undefined, 3))