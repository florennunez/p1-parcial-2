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
