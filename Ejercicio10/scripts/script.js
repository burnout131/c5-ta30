function esPalindromo(str) {
  // Aqui pasamos todas las letras a minusculas y retiramos los caracteres 'que no nos interesan'
  const re = /[\W_]/g;
  let stringEnMinuscula = str.toLowerCase().replace(re, '');

  // Aqui pasamos el string a array, luego lo invertimos y por ultimo lo volvemos a pasar a string
  let stringInvertido = stringEnMinuscula.split('').reverse().join('');

  // Comparamos el string invertido y el no invertido. Si son iguales, tenemos palindromo
  if (stringInvertido === stringEnMinuscula){
    return "OJO PORQUE ESTO ES UN PALINDROMO"
  } else{
    return "No es palindromo"
  }
  
}

let strInput = prompt("Introduce una cadena de texto");
alert(esPalindromo(strInput));