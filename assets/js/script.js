let color;
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
            color = "pink";
            /* Cambiar a rosado */
        } else if (event.key === 's') {
            color = "orange";
            /* Cambiar a naranjo */
        } else if (event.key === 'd') {
            color = "skyblue";
            /* Cambiar a celeste */
        }
        key.style.backgroundColor = color
    })

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
            agregarElemento1();
            /* crear div morado */
        } else if (event.key === 'w') {
            agregarElemento2();
            /* crear div gris */
        } else if (event.key === 'e') {
            agregarElemento3();
            /* crear div café */
        }
        key.style.backgroundColor = color
    })

    function agregarElemento1(){
        /* Obtenemos el elemento contenedor por su ID*/
        contenedor = document.getElementById("container");
        /* Creamos un nuevo elemento <div>*/
        nuevoElemento = document.createElement("div");
        /* Asignamos un texto al nuevo elemento*/
        nuevoElemento.textContent = "";
        nuevoElemento.style.backgroundColor = "purple";
        nuevoElemento.style.width = '200px';
        nuevoElemento.style.height = '200px';
        /* Agregamos el nuevo elemento al contenedor*/
        contenedor.appendChild(nuevoElemento);
    }


    function agregarElemento2(){
        contenedor = document.getElementById("container");
        nuevoElemento = document.createElement("div");
        nuevoElemento.textContent = "";
        nuevoElemento.style.backgroundColor = "grey";
        nuevoElemento.style.width = '200px';
        nuevoElemento.style.height = '200px';
        contenedor.appendChild(nuevoElemento);
    }

    function agregarElemento3(){
        contenedor = document.getElementById("container");
        nuevoElemento = document.createElement("div");
        nuevoElemento.textContent = "";
        nuevoElemento.style.backgroundColor = "brown";
        nuevoElemento.style.width = '200px';
        nuevoElemento.style.height = '200px';
        contenedor.appendChild(nuevoElemento);
    }
        