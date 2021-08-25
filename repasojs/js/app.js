
//Este es un comentario y estamos aprendiendo a colocar const nombre = "Isaac";
//if(nombre){
  //  const nombre ="Tom";
    //console.log("dentro del if", nombre);
//}

//console.log("Fuera el if", nombre);



const nombre = "Isaac";
const trabajo = "Animador";

//concatenar Java Scrip
//console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);
//console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector('#app');
let html = `<ul> 
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li>
            </ul>;
            `
contenedorApp.innerHTML = html;