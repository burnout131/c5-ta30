let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numDni = parseInt(prompt("Introduce numero DNI"));

if (numDni <= 0 || numDni > 99999999) {
  window.alert("Por favor, introduce un numero válido!");
} else {

  let letraDniInput = prompt("Introduce letra DNI").toUpperCase();

  // Calcula el resto del numero de DNI, para determinar la letra
  let resto = numDni % 23;

  // Seleccionamos la letra correspondiente del array
  let letraDniCorrecta = letras[resto];

  // Comprobamos la letra que nos han indicado con la letra que es en realidad
  if (letraDniCorrecta == letraDniInput) {
    window.alert("La letra indicada SI es correcta");
  } else {
    window.alert("La letra indicada NO es correcta. En realidad es: "+letraDniCorrecta);
  }

}