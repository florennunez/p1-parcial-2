class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        const index = this.items.findIndex(item => item.nombre === producto.nombre);
        if (index === -1) {
            this.items.push({ ...producto, cantidad: 1 });
        } else {
            this.items[index].cantidad += 1;
        }
        this.actualizarCarrito();
        this.mostrarMensaje('Producto agregado al carrito');
    }

    actualizarCarrito() { 
        const carritoDiv = document.getElementById('carrito');
        carritoDiv.innerHTML = '';
        let totalPrecio = 0;

        this.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item', 'mb-3');
            const nombreEl = document.createElement('h3');
            nombreEl.textContent = item.nombre;
            const cantidadEl = document.createElement('p');
            cantidadEl.textContent = `Cantidad: ${item.cantidad}`;
            const precioEl = document.createElement('p');
            const totalItemPrecio = item.precio * item.cantidad;
            precioEl.textContent = `Precio: $${totalItemPrecio}`;
            totalPrecio += totalItemPrecio;
            itemDiv.appendChild(nombreEl);
            itemDiv.appendChild(cantidadEl);
            itemDiv.appendChild(precioEl);
            carritoDiv.appendChild(itemDiv);
        }); 

        const totalPrecioDiv = document.createElement('div');
        totalPrecioDiv.classList.add('total', 'mt-3');
        const totalPrecioEl = document.createElement('h3');
        totalPrecioEl.textContent = `Total: $${totalPrecio}`;
        totalPrecioDiv.appendChild(totalPrecioEl);
        carritoDiv.appendChild(totalPrecioDiv);
    }

    mostrarMensaje(mensaje) {
        const mensajeDiv = document.getElementById('mensaje');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.classList.add('mostrar');
        console.log("funciona");
    }

    quitarProducto(nombreProducto) {
        const index = this.items.findIndex(producto => producto.nombre === nombreProducto);
        if (index !== -1) {
            if (this.items[index].cantidad > 1) {
                this.items[index].cantidad -= 1;
            } else {
                this.items.splice(index, 1);
            }
            this.actualizarCarrito();
        }
    }

    vaciarCarrito() {
        this.items = [];
        this.actualizarCarrito();
    }
}