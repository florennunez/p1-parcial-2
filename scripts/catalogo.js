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
