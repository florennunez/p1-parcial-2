class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        this.items.push(producto);
        this.actualizarCarrito();
    }

    actualizarCarrito() { 
        const carritoDiv = document.getElementById('carrito');
        carritoDiv.innerHTML = '';
        this.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item', 'mb-3');
            const nombreEl = document.createElement('h3');
            nombreEl.textContent = item.nombre;
            const precioEl = document.createElement('p');
            precioEl.textContent = `Precio: $${item.precio}`;
            itemDiv.appendChild(nombreEl);
            itemDiv.appendChild(precioEl);
            carritoDiv.appendChild(itemDiv);
        }); 
    }

    quitarProducto(no) {
        const index = this.productos.findIndex(producto => producto.nombre === nombreProducto);
        if (index !== -1) {
            this.productos.splice(index, 1);
            this.actualizarCarrito();
        }
    }

    vaciarCarrito() {
        this.items = [];
        this.actualizarCarrito();
    }
}