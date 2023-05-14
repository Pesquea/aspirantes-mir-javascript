// escribe la función max acá
function max(numeros){
    let maximo;
    for ( let numero of numeros ) {
        if (numero == numeros[0]) maximo = numero;
        // Evalúa si «max» es menor que «numero» para almacenar
        // en él el número más grande hasta el momento:
        if (maximo < numero){
            maximo = numero;
        }
          
    }
    return maximo
}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined