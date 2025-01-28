class Refaccion {
    constructor(nombre, precio, marca, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio).toFixed(2); // Corrección del typo
        this.marca = marca;
        this.stock = stock;
        this.categoria = categoria
    }
}

class GastorRefacciones {
    constructor() {
        this.refacciones = [];
    }
    agregarRefaccion(refaccion) {
        this.refacciones.push(refaccion);
        this.mostrarRefacciones();
    }
    eliminarRefaccion(index) {
        this.refacciones.splice(index, 1);
        this.mostrarRefacciones();
    }
    mostrarRefacciones() {
        const tbody = document.querySelector('#refacciones-body'); // Corrección
        tbody.innerHTML = '';
        this.refacciones.forEach((refaccion, index) => {
            const row = tbody.insertRow();
            row.insertCell().textContent = refaccion.nombre;
            row.insertCell().textContent = refaccion.marca;
            row.insertCell().textContent = refaccion.precio;
            row.insertCell().textContent = refaccion.stock;
            row.insertCell().textContent = refaccion.categoria;
            row.insertCell().innerHTML = `<button onclick="gastorRefacciones.eliminarRefaccion(${index})">Eliminar</button>`;
            row.insertCell().innerHTML = `<button onclick="gastorRefacciones.eliminarRefaccion(${index})">Editar</button>`;
        });
    }
}

// Instancia del gestor
const gastorRefacciones = new GastorRefacciones();

// Manipular el formulario
document.getElementById('refaccion-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const marca = document.getElementById('marca').value;
    const stock = document.getElementById('stock').value;

    gastorRefacciones.agregarRefaccion(new Refaccion(nombre, precio, marca, stock));
    this.reset(); // Limpiar el formulario
});
