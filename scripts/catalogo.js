class Catalogo {
    constructor() {
        this.productos = [];
    }

    cargarProductos(data) {
        this.productos = data;
    }

    filtrarProductos(categoria) {
        if (categoria === '') {
            return this.productos; // Si no hay categoría, devuelve todos los productos
        }
        return this.productos.filter(producto => producto.categoria === categoria);
    }

    mostrarProductos(categoria) {
        const catalogoDiv = document.getElementById('productos');
    // Limpiar el contenido actual
    while (catalogoDiv.firstChild) {
        catalogoDiv.removeChild(catalogoDiv.firstChild);
    }
    const productosFiltrados = this.filtrarProductos(categoria);

    productosFiltrados.forEach(producto => {
        // Crear contenedor para cada producto
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        // Crear y configurar elementos para nombre, descripción y precio
        const nombreEl = document.createElement('h2');
        nombreEl.textContent = producto.nombre;
        const descripcionEl = document.createElement('p');
        descripcionEl.textContent = producto.descripcion;
        const precioEl = document.createElement('p');
        precioEl.textContent = `Precio: $${producto.precio}`;

        // Agregar elementos al div del producto
        productoDiv.appendChild(nombreEl);
        productoDiv.appendChild(descripcionEl);
        productoDiv.appendChild(precioEl);

        // Agregar el div del producto al contenedor del catálogo
        catalogoDiv.appendChild(productoDiv);
        });
    }
}
