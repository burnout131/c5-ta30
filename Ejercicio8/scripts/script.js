function esPar(num) {
  if (num % 2 == 0) {
    return num + " es par";
  } else {
    return num + " es impar";
  }
}

let numero = parseInt(prompt("Introduce un numero"));
alert(esPar(numero));