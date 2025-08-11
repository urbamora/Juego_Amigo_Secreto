// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*Amigo secreto
En este desafío, desarrollarás una aplicación que permita a los usuarios ingresa nombres
 amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres
 ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" 
 seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo 
agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo
 un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente 
un nombre de la lista y se mostrará en la página 
*/

// Lista para almacenar los nombres ingresados
const listaDeAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.querySelector("#amigo");
  const nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  // Agregar a la lista y limpiar el input
  listaDeAmigos.push(nombre);
  input.value = "";

  // Mostrar el nombre en el listado visual
  actualizarListaVisual();
}
n
// Función para actualizar el listado en pantalla
function actualizarListaVisual() {
  const ul = document.querySelector("#listaAmigos");
  ul.innerHTML = "";

  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  if (listaDeAmigos.length === 0) {
    alert("Primero debes agregar al menos un amigo.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSecreto = listaDeAmigos[indiceSorteado];

  // Mostrar el resultado en pantalla
  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
  resultado.appendChild(li);
}
