'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Podria levantar los productos de un JSON o directamente estar escritos aca

class Producto {
    constructor(nombre, descripcion, precio, imagen, categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
    }

    toHTML() {
        return `
            <div class="producto">
                <img src="${this.imagen}" alt="${this.nombre}">
                <h3>${this.nombre}</h3>
                <p>${this.descripcion}</p>
                <p>Precio: $${this.precio}</p>
                <button onclick="agregarAlCarrito('${this.nombre}')">Agregar al Carrito</button>
            </div>
        `;
    }
}

class Catalogo {
    constructor() {
        this.productos = [];
    }

    cargarProductos(productos) {
        this.productos = productos.map(p => new Producto(p.nombre, p.descripcion, p.precio, p.imagen, p.categoria));
    }

    filtrarProductos(categoria) {
        if (categoria === '') {
            return this.productos;
        } else {
            return this.productos.filter(producto => producto.categoria === categoria);
        }
    }

    mostrarProductos(categoria) {
        const catalogoDiv = document.getElementById('productos');
        catalogoDiv.innerHTML = '';
        const productosFiltrados = this.filtrarProductos(categoria);
        productosFiltrados.forEach(producto => {
            catalogoDiv.innerHTML += producto.toHTML();
        });
    }
}

class Carrito {
    constructor() {
        this.productos = [];
        this.totalProductos = 0;
        this.totalPagar = 0;
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        this.totalProductos++;
        this.totalPagar += producto.precio;
        this.actualizarCarrito();
    }

    quitarProducto(nombreProducto) {
        const index = this.productos.findIndex(producto => producto.nombre === nombreProducto);
        if (index !== -1) {
            this.totalPagar -= this.productos[index].precio;
            this.productos.splice(index, 1);
            this.totalProductos--;
            this.actualizarCarrito();
        }
    }

    actualizarCarrito() {
        const carritoProductosDiv = document.getElementById('carrito-productos');
        carritoProductosDiv.innerHTML = '';
        this.productos.forEach(producto => {
            carritoProductosDiv.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
        });
        document.getElementById('total-productos').textContent = this.totalProductos;
        document.getElementById('total-pagar').textContent = this.totalPagar.toFixed(2);
    }
}

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

function agregarAlCarrito(nombreProducto) {
    const producto = catalogo.productos.find(p => p.nombre === nombreProducto);
    if (producto) {
        carrito.agregarProducto(producto);
    }
}
