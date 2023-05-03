function factorial(n) {

  let respuesta = 1;

  if (n == 0 || n == 1) {
    return respuesta;
  } else if (n > 1) {

    for (var i = n; i >= 1; i--) {
      respuesta = respuesta * i;
    }

    return respuesta;
  } else {
    return "El numero introducido debe ser positivo"
  }
}

let numInput = parseInt(prompt("Introduce un numero para calcular factorial:"));
alert("Factorial de " + numInput + " : " + factorial(numInput));