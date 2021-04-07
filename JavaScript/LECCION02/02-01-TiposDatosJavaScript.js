/*
Ejemplos de tipos de datos en JavaScript
 */
//Tipo de datos String
var nombre="Carlos";
console.log(nombre);

nombre=10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero =1000;
console.log(numero);

//Tipo de dato object
var objecto= {
    nombre:"Juan", 
    apellido:"Perez",
    telefono:"7373732"
}
console.log(typeof objecto);

//Tipo de dato boolean (true,false)
var bandera= false;
console.log( bandera);

//Tipo de dato funcion.
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo=Symbol("mi simbolo");
console.log(typeof simbolo)

//Tipo clase es una function
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);

//null=ausencia de valor
var y=null;
console.log(typeof y);

x=undefined;
console.log(typeof x);

var autos=['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var z='';
console.log(z);
console.log(typeof z);