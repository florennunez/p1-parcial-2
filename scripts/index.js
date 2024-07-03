'use strict';
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("a").forEach(element => {
        element.addEventListener("click", function () {
            const categoria = element.innerText; // O cualquier otra lógica para obtener la categoría del elemento
            catalogo.filtrarProductos(categoria.innerText);
        });
    });
});

let catalogo = new Catalogo();
let carrito = new Carrito();

fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        catalogo.cargarProductos(data);
        catalogo.mostrarProductos(''); //limpia el contenedor
    });

    const filters = document.querySelectorAll('.filtro');
    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();
            const categoria = filter.dataset.categoria;
            catalogo.mostrarProductos(categoria);
        });
    });



