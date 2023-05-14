function join(list){
    let str;
    for (element of list){
        str += element
    }
    return str
}

console.log(join(["nombre", "Documento", "hora"])) // 3
console.log(join(["nombre", "Documento", "hora","lista"])) // 10
console.log(join([]))