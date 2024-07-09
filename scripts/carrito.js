class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        const index = this.items.findIndex(item => item.nombre === producto.nombre);
        if (index === -1) {  // Si el producto no está en el carrito, agregarlo
            this.items.push({ ...producto, cantidad: 1 });
        } else {  // Si el producto ya está en el carrito, incrementar la cantidad
            this.items[index].cantidad += 1;
        }
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
            const cantidadEl = document.createElement('p');
            cantidadEl.textContent = `Cantidad: ${item.cantidad}`;
            const precioEl = document.createElement('p');
            precioEl.textContent = `Precio: $${item.precio * item.cantidad}`;  // Actualizar el precio total por la cantidad
            itemDiv.appendChild(nombreEl);
            itemDiv.appendChild(cantidadEl);
            itemDiv.appendChild(precioEl);
            carritoDiv.appendChild(itemDiv);
        }); 
    }

    quitarProducto(nombreProducto) {
        const index = this.items.findIndex(producto => producto.nombre === nombreProducto);
        if (index !== -1) {
            if (this.items[index].cantidad > 1) {
                this.items[index].cantidad -= 1;  // Decrementar la cantidad si es mayor que 1
            } else {
                this.items.splice(index, 1);  // Eliminar el producto si la cantidad es 1
            }
            this.actualizarCarrito();
        }
    }

    vaciarCarrito() {
        this.items = [];
        this.actualizarCarrito();
    }
}
