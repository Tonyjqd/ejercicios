/*SITUACIÓN: En un local de venta de carros tenemos un array para el control de los carros a la venta estacionados en la playa:

let carros = [""Nissan March"", ""Chevrolet Aveo"", ""Volkswagen Taos"", ""KIA Rio Sedan""];


Nos indican que se vendió el KIA Rio Sedan ubicado en al último lugar del estacionamiento. Entonces debes eliminar el último elemento.

Luego, entra un nuevo vehículo (un “Hyundai Creta”), por lo que hay que agregarlo en el final de la lista de autos.

Por último, se encontró un error en la lista, por error se había dado de alta un ""Nissan March"" cuando en realidad se trataba de un  ""Nissan Versa"". 

Entonces hay que modificar la posición número 0 de nuestra “playa de estacionamiento” por el modelo correcto de auto.

CONSIGNA: 
Escribe el código necesario para cumplir con todos los requerimientos pedidos.
*/
let coches = ["Nissan March", "Chevrolet Aveo", "Volkswagen Taos", "KIA Rio Sedan"];

alert(`Se ha vendido el ` + coches[3]);
coches.pop(); // Con pop se elimina el último elemento 
coches.push('Hyundai Creta'); // Push para añadir
console.log(coches);
alert(`Ha entrado en stock un ` + coches[3]);
let eliminar = coches.splice(0,1,'Nissan Versa'); // El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. En este caso se elige el valor del array a modificar (0) y se indica cuántos elementos se van a cambiar (1) y luego se especifica el nuevo elemento a introducir en el array.
console.log(`El coche eliminado es ` + eliminar);
console.log(`El coche que se ha añadido es ` + coches[0]);
alert(`Se ha sustituido ${eliminar} por `+ coches[0]);
document.write('El inventario de coches disponibles es el siguiente: ' + coches);
