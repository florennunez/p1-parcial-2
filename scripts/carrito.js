class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        const index = this.items.findIndex(item => item.nombre === producto.nombre);
        if (index === -1) {  // Solo agrega el producto si no está en el carrito
            this.items.push(producto);
            this.actualizarCarrito();
        }
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

    quitarProducto(nombreProducto) {
        const index = this.items.findIndex(producto => producto.nombre === nombreProducto);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.actualizarCarrito();
        }
    }

    vaciarCarrito() {
        this.items = [];
        this.actualizarCarrito();
    }
}