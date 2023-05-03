function vamosAVerQueHay(texto) {

  //Creamos dos contadores para ir sumando las letras mayusculas y minusculas
  let mayusculas = 0;
  let minusculas = 0;

  //Recorremos la cadena de texto
  for (let letra of texto) {
    //Si es mayuscula sumamos +1 al contador
    if (letra === letra.toUpperCase()) {
      mayusculas++;
      //Si es minuscula sumamos +1 al contador
    } else if (letra === letra.toLowerCase()) {
      minusculas++;
    }
  }

  //Si el contador de minusculas está a 0 y el de mayusculas no, significa que todo está mayuscula
  if (mayusculas != 0 && minusculas == 0) {
    return "Todas las letras son mayusculas";
    //Si el contador de mayusculas está a 0 y el de minusculas no, significa que todo está minuscula
  } else if (mayusculas == 0 && minusculas != 0) {
    return "Todas las letras son minusculas";
    //Si ambos contadores no estan a cero, significa que hay las dos cosas
  } else {
    return "Hay tanto mayusculas como minusculas";
  }

}

let texto = prompt("Introduce cadena de texto");
alert(vamosAVerQueHay(texto));