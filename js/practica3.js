// Función para cargar refacciones
function cargarRefacciones() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3001/refacciones', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const tbody = document.getElementById('refacciones-body');
            tbody.innerHTML = '';
            data.forEach(refaccion => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${refaccion.nombre}</td>
                    <td>${refaccion.marca}</td>
                    <td>${refaccion.categoria}</td>
                    <td>${refaccion.precio}</td>
                    <td>${refaccion.stock}</td>
                    <td>
                        <button onclick="editarRefaccion('${refaccion.id}')">Editar</button>
                        <button onclick="eliminarRefaccion('${refaccion.id}')">Eliminar</button>
                    </td>
                `;
                tbody.appendChild(row);
            });
        } else {
            console.error('Error al cargar los datos:', xhr.statusText);
        }
    };
    xhr.send();
}

// Función para eliminar una refacción
function eliminarRefaccion(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:3001/refacciones/${id}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Refacción eliminada correctamente');
            cargarRefacciones();
        } else {
            console.error('Error al eliminar la refacción:', xhr.statusText);
        }
    };

    xhr.send();
}

// Función para editar una refacción
function editarRefaccion(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3001/refacciones/${id}`, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const refaccion = JSON.parse(xhr.responseText);
            document.getElementById('refaccion-id').value = refaccion.id;
            document.getElementById('nombre').value = refaccion.nombre;
            document.getElementById('marca').value = refaccion.marca;
            document.getElementById('categoria').value = refaccion.categoria;
            document.getElementById('precio').value = refaccion.precio;
            document.getElementById('stock').value = refaccion.stock;
        } else {
            console.error('Error al cargar la refacción:', xhr.statusText);
        }
    };

    xhr.send();
}

// Agregar o actualizar refacción
document.getElementById('refaccion-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('refaccion-id').value;
    const nombre = document.getElementById('nombre').value;
    const marca = document.getElementById('marca').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('stock').value;

    const refaccion = { nombre, marca, categoria, precio, stock };

    const xhr = new XMLHttpRequest();
    if (id) {
        xhr.open('PUT', `http://localhost:3001/refacciones/${id}`, true);
    } else {
        xhr.open('POST', 'http://localhost:3001/refacciones', true);
    }

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 201 || xhr.status === 200) {
            console.log('Refacción guardada correctamente');
            cargarRefacciones();
            document.getElementById('refaccion-form').reset();
        } else {
            console.error('Error al guardar la refacción:', xhr.statusText);
        }
    };

    xhr.send(JSON.stringify(refaccion));
});

function eliminarRefaccion(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `http://localhost:3001/refacciones/${id}`);
    xhr.onload = function () {
        if(xhr.status ===200){
            cargarRefacciones();
        }else{
            console.error('Error al eliminar la refacción:', xhr.statusText);
        }
};
xhr.send();
}

// Inicializar
cargarRefacciones();
