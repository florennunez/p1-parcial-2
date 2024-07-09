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

function mostrarNotificacion() {
    var numeroItems = obtenerNumeroItemsCarrito(); // Asume que esta función ya existe y devuelve el número de items en el carrito
    var notificacionDiv = document.getElementById('notification');
    notificacionDiv.textContent = 'Tienes ' + numeroItems + ' artículos en tu carrito';
    notificacionDiv.style.display = 'block';
    
    // Opcional: Ocultar la notificación después de unos segundos
    setTimeout(() => {
        notificacionDiv.style.display = 'none';
    }, 3000);
}