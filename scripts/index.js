'use strict';
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll("a").forEach(element => {
        element.addEventListener("click", function () {
            console.log(element);
        });
    });
});

let catalogo = new Catalogo();
let carrito = new Carrito();

fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        catalogo.cargarProductos(data);
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


