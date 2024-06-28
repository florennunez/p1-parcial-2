'use strict';
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("a").forEach(element => {
        element.addEventListener("click", function () {
            const categoria = element.innerText; // O cualquier otra lógica para obtener la categoría del elemento
            catalogo.filtrarPorCategoria(categoria);
        });
    });
});

let catalogo = new Catalogo();
let carrito = new Carrito();

fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        catalogo.cargarProductos(data);
        // Aquí podrías llamar a mostrarProductos sin filtro para cargar todos inicialmente
        catalogo.mostrarProductos('');
    });

function filtrarProductos(categoria) {
    catalogo.mostrarProductos(categoria);
}

/* function agregarAlCarrito(nombreProducto) {
    const producto = catalogo.productos.find(p => p.nombre === nombreProducto);
    if (producto) {
        carrito.agregarProducto(producto);
    } }*/


