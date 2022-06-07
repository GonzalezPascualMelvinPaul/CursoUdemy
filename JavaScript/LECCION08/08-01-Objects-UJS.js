let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo, tel) {
    //return this.nombre + ' '+ this.apellido;
    return titulo+' '+this.nombre + ' ' + this.apellido + ' ' + tel;
  }
};

let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};
persona1.edad= 13;
console.log(persona1);
//Uso de apply para usar
//Uso de call para usar el metodo nombreCompleto con los datos del persona.
console.log(persona1.nombreCompleto('Lic','12312132'));
let arreglo=['Ing','84757483'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
