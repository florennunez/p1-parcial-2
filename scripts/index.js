'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const catalogo = new Catalogo();
    const carrito = new Carrito();

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