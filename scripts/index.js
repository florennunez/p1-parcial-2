'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const carrito = new Carrito();
    const catalogo = new Catalogo(carrito); // Se crea una instancia de la clase Carrito

    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            catalogo.cargarProductos(data);
            catalogo.mostrarProductos('');
        });

    const filters = document.querySelectorAll('.filtro');
    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            const categoria = filter.dataset.categoria;
            catalogo.mostrarProductos(categoria);
        });
    });
});
let contadorCarrito = 0;

function mostrarNotificacion() {
    contadorCarrito++; // Incrementa el contador cada vez que se llama a la función
    const notificacion = document.getElementById('notification');
    
    // Actualiza el contenido de la notificación con el contador
    notificacion.innerHTML = `Productos en el carrito: ${contadorCarrito}`;
    
    // Muestra la notificación si aún no está visible
    if (notificacion.style.display === 'none') {
        notificacion.style.display = 'block';
    }
}

function actualizarNotificacion() {
    const notificacion = document.getElementById('notification');
    if (contadorCarrito > 0) {
        notificacion.innerHTML = `Productos en el carrito: ${contadorCarrito}`;
        notificacion.style.display = 'block';
    } else {
        notificacion.style.display = 'none'; // Oculta la notificación si el contador es 0
    }
}

function removerProducto() {
    if (contadorCarrito > 0) {
        contadorCarrito--; // Decrementa el contador
        actualizarNotificacion(); // Actualiza la notificación
    }
}