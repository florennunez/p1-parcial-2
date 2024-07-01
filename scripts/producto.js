class Producto {
    constructor(imagen, nombre, descripcion, precio, categoria) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
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
