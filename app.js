// Ejercicio 1
// Crea una variable llamada "edad" y asígnale un número. 
// Escribe un condicional if compuesto que imprima un mensaje diferente en consola dependiendo si:
// - La edad es menor a 13.
// - La edad está entre 13 y 18.
// - La edad es mayor a 18.

// Solución: 

var edad = 15;

if (edad < 13) {
    console.log('El usuario es menor a 13 años')

} else if (edad >= 13 && edad <= 18) {
    console.log('El usuario tiene entre 13 a 18')
} else {
    console.log('El usuario ya es un adulto')
}


// Ejercicio 2
// Declara una variable llamada "temperatura" y asígnale un valor numérico.
// Escribe un condicional if anidado que haga lo siguiente:
// - Si la temperatura es menor que 0, imprime "Hace mucho frío".
// - Si está entre 0 y 15, imprime "Hace frío".
// - Si está entre 16 y 30, imprime "Hace un clima agradable".
// - Si es mayor a 30, imprime "Hace calor".

// Solución: 

var temperatura = 25;

if (temperatura < 0) {
    console.log('Hace mucho frío')
} else if (temperatura >= 0 && temperatura <= 15) {
    console.log('Hace frío');
} else if (temperatura >= 16 && temperatura <= 30) {
    console.log('Hace un clima agradable')
} else {
    console.log('Hace calor')
}; 




// Ejercicio 3
// Escribe un bucle for que cuente desde 1 hasta 10 e imprima cada número en la consola.
// Pero si el número es múltiplo de 3, imprime "Fizz" en su lugar,
// y si es múltiplo de 5, imprime "Buzz".
// Si es múltiplo de ambos, imprime "FizzBuzz".


// solucion 

for(var i = 1; i <= 10; i++){


    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz')
    } else if (i % 5 === 0){
        console.log('Buzz')
    } else {
        console.log(i)
    }
}


// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

for(var i = 0; i < numeros.length; i++) {
    var numero = numeros [i];


    if (numero % 2 === 0) {
            
        console.log(`El número ${numero} es par`);
    }else {
        console.log(`El número ${numero} es impar`);
    }

}


// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".

// Solución: 

var calificaciones = [45, 72, 88, 55, 91, 68, 79, 100, 60, 82];

for(var i = 0; i < calificaciones.length; i++) {

    var nota = calificaciones [i];

    if (nota < 60) {
        console.log(`Calificación ${nota}: Reprobado`);
    } 
    else if (nota >= 60 && nota <= 80) {
        console.log(`Calificación ${nota}: Aprobado`);
    } 
    else if(nota > 80) {
        console.log(`Calificación ${nota}: Excelente`);
    }

}

// Clasificación de Productos por Precio:

// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".

// Solución: 

var precios = [10, 15, 20, 35, 40, 65];

for (var i =0; i < precios.length; i++) {
    var valor = precios [i];

    if(valor < 20){
        console.log(`$${valor}: Producto económico`)
    }
    else if(valor >= 20 && valor <= 50){
        console.log(`$${valor}: Producto de precio moderado`)
    }
    else if(valor >50){
        console.log(`$${valor}: Producto de lujo`)
    }

}
