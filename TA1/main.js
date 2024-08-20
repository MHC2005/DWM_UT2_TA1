function repeatString(texto, repeticiones){
    let resultado = "";
    for(let i = 0; i < repeticiones; i++){
        resultado += texto;
    }
    return resultado;
}

console.log(repeatString("Hola", 3));

