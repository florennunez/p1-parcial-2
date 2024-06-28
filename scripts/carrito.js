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