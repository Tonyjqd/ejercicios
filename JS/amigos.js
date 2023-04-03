/*Simulando amigos:
Desarrollar  un programa con una función que, agregando cualquier cantidad de amigos, permita ordenarlos alfabéticamente. Utilizar arrays para solucionar el problema.*/
let amigos= new Array();
let amigosTotales=(parseInt(prompt('Indícame la cantidad de amigos que tienes')));

function inicio (data){
    console.log(amigosTotales);
    for (let i=0;i<amigosTotales;i++){
        let amigo = prompt(`Introduce el nombre de tu amigo ${i+1}.`)
        amigos.push(amigo)
    }
    amigos.sort();
    console.log(amigos)
    document.write(`Tu lista de amigos ordenada es:  ${amigos}`)
};
inicio();

