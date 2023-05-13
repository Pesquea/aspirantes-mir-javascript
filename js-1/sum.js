// escribe la función suma acá
function sum(numero){
    sumador = 0
    for (let i = 0; i <= numero; i++) {
        sumador = sumador + i
    }
    return sumador    
}
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120