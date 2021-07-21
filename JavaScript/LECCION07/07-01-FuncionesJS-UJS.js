//Declaracion de la funcion
function miFuncion(a,b){
    console.log(arguments.length);
    return a + b;
}

//Llamando a la funcion
let suma=miFuncion(2,3);
console.log(suma)

//Declaracion de una funcion de tipo expresio
let x= function(a,b){return a + b};

suma=x(1,2);
console.log(suma);

(function (a,b){
    console.log('Ejecutando la funcion '+ (a+b));
})(3,4);

console.log(typeof miFuncion);

var m
