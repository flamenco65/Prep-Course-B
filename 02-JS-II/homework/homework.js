// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  return str
    // "Return" la string provista: str
    // Tu código:
  }
  
  function suma(x, y) {
    return x + y
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
  }
    
  function resta(x, y) {
    return x - y
    // Resta "y" de "x" y devuelve el valor
    // Tu códig
  }
  function multiplica(x, y) {
    return x * y
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
  }
  
  
  function divide(x, y) {
    return x / y;
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
  }
  const division = division();
  
  function sonIguales(x, y) {
    return x === y;
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function tienenMismaLongitud(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function menosQueNoventa(num) {
    return num < 90;
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function mayorQueCincuenta(num) {
    return num > 50;
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function obtenerResto(x, y) {
    return x % y
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
  }
  
  function esPar(num) {
    num % 2 === 0;
    return num
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function esImpar(num) {
    num % 2 === 1;
    return num
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
  }
  
  function elevarAlCuadrado(num) {
    return num**2
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
  }
  
  function elevarAlCubo(num) {
    return (num*num*num)
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
  }
  
  function elevar(num, exponent) {
    var elevado = Math.pow(num);
    return num
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
  }
  
  function redondearNumero(num) {
        // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    Math.round(num);
    return num
  }
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    Math.ceil(num);
    return num
  }
  
  function numeroRandom() {
    Math.random(0.7666);
    return 0.7666
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:

  }
  
  function esPositivo(numero) {
    if(numero > 0){
      return 'Es positivo'
    } else if(numero < 0){
      return 'Es negativo'
    } else if(numero === 0){
      return false
    }
    
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
  }
  
  function agregarSimboloExclamacion(str) {
    return 'Hola Melvis '+ str + ''+ 'Hola Melvis!'
  
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
  }
  
  function combinarNombres(nombre, apellido) {
    return 'Hola '+ Melvis + ''+ Herrera
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
  }
  
  function obtenerSaludo(nombre) {
    return 'Hola '+ Melvis + ''+ Herrera
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
  }
  
  function obtenerAreaRectangulo(alto, ancho) {
   let alto = parseInt(prompt("Ingresa el alto del rectangulo"));
   let ancho = parseInt(prompt("Ingresa el ancho del rectangulo"));
   area = alto * ancho;
   return ("El area del rectangulo es: " + area);
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
  }
  
  function retornarPerimetro(lado) {
    anylado(suma);
    return suma;
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
  }
  
  function areaDelTriangulo(base, altura) {
    let base = parseInt(prompt("Ingresa la base del triangulo"));
   let altura = parseInt(prompt("Ingresa la altura del triangulo"));
   area = altura * base / 2;
   return ("El area del triangulo es: " + area);
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
  }
  
  function deEuroAdolar(euro) {
    if(euro === 1.20){
      return euro * 1.20
    }
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
  }
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
  };