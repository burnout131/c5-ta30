//1- Determinar el string más largo

let valores = [true, 5, false, "hola", "adios", 2];
let valoresString = [];
let stringMasLargo;

for (valor of valores){
    // Añadimos los valores tipo string en el array valoresString
    if (typeof valor === "string"){
        valoresString.push(valor);
    }
}

/**
 * Esta funcion ordena el array de manera que el primer elemento sea el más largo (argumento compareFn)
 */
stringMasLargo = valoresString.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];

console.log(stringMasLargo);

//2- Obtener los valores tipo boolean

for (valor of valores){
    if (typeof valor === "boolean"){
        console.log(valor);
    }
}

//3- Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

let valoresNum = [];

for (valor of valores){
    if(typeof valor === "number"){
        valoresNum.push(valor);
    }
}

console.log(valoresNum[0] + " + " + valoresNum[1] + " = " + (valoresNum[0] + valoresNum[1]));
console.log(valoresNum[0] + " - " + valoresNum[1] + " = " + (valoresNum[0] - valoresNum[1]));
console.log(valoresNum[0] + " * " + valoresNum[1] + " = " + (valoresNum[0] * valoresNum[1]));
console.log(valoresNum[0] + " / " + valoresNum[1] + " = " + (valoresNum[0] / valoresNum[1]));
console.log(valoresNum[0] + " % " + valoresNum[1] + " = " + (valoresNum[0] % valoresNum[1]));