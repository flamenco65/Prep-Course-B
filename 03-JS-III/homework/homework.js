// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  var suma = 0;
  for(var i = 0; i < 11; i++){
    suma = suma + i;
    
  }
  return suma
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
 /* var suma = 0
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for(const e of numeros) suma += e
    return suma
  */
  return array.filter((e) => e % 2 === 0);
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  return array.map((num) => num ** 2);
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return array.reduce((prev, next) => prev + next);
  
 }


function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  num += "";
  return (num.length);
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
