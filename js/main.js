(function(){
	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");
	const dateElement = document.getElementById("date");



	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			check = document.createElement("input"),
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			trash = document.createElement("img"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		// Le establecemos un atributo href
		nuevaTarea.setAttribute("id", "lis");
		check.className = "checkbox";
		check.setAttribute("type", "checkbox");
		check.setAttribute("id", "miID");

		enlace.appendChild(contenido);
		enlace.setAttribute("href", "#");
		trash.setAttribute("src", "./img/trash.png");

		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(check);
		nuevaTarea.appendChild(enlace);
		nuevaTarea.appendChild(trash);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	// Poner la fecha en pantalla
const options = {weekday : "long", month:"long", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("es-US", options);
}());