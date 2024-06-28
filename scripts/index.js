'use strict';
document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener("click", function (event) {
        if (event.target.tagName === 'A') {
            const categoria = event.target.innerText;
            catalogo.filtrarProductos(categoria);
            event.preventDefault(); // Evita la acción por defecto de los enlaces.
        }
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


