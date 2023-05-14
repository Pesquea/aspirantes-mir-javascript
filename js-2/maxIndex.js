// escribe la función maxIndex acá
function maxIndex(numeros){
    let maximo;
    let index = -1;
    let i = 0
    while (i < numeros.length) {
        if (numeros[i] == numeros[0]) {
            maximo = numeros[i];
            index = i
        }
        // Evalúa si «max» es menor que «numero» para almacenar
        // en él el número más grande hasta el momento:
        if (maximo < numeros[i]){
            maximo = numeros[i];
            index = i
        }
        i++ 
    }
    return index
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1