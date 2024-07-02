'use strict';
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".nav-link").forEach(element => {
        element.addEventListener("click", function () {
            event.preventDefault(); // Evitar el comportamiento predeterminado de los enlaces
            const categoria = element.innerText.trim(); // Obtener la categoría del texto del enlace
            filtrarProductos(categoria); // Llamar a la función de filtrado
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


