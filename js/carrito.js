
const flechaInicio = document.querySelector(".flechaInicio");
const productosCarrito = document.querySelector("#contenedorProductos");
const precioProducto = document.querySelector(".tituloTotal")
const resumen = document.querySelector(".contenedorResumen")
const contenedorCarrito = document.querySelector(".contenedorCarrito")
const carritoVacio = document.querySelector(".empty")
const TextocantidadProductos = document.querySelector(".parrafoProductos")
const cantidadProductos = document.querySelectorAll("input.cantidadProductos")
const botonFinalizarCompra = document.querySelector("#finalizarCompra")

let carrito = JSON.parse(localStorage.getItem("carrito"))

flechaInicio.addEventListener("click", () => {
    window.location.href = "inicio.html";
});

function productosCarro(producto) {
    return `<div class="card">
        <div class="imagenProducto">
            <img src="${producto.imagen}" id="productoImagen">
        </div>
        <div class="descripcionProducto">
            <div class="headerCard">
                <p class="tituloProducto">${producto.titulo}</p>
                <p class="precioProducto">Precio: ${producto.precio}</p>
            </div>
            <div class="footercard"> 
                <button class="eliminarProducto" id="${producto.id}">Eliminar</button>   
            </div>
        </div>
    </div>`;
}


function cargarProductos() {
    if (carrito && carrito.length > 0) {
        productosCarrito.innerHTML = "";
        carrito.forEach((producto) => {
            productosCarrito.innerHTML += productosCarro(producto);
        });

        cantProductos()
        montoCarrito()
        eliminarProductoCarrito()
    } else{
        estiloCarroVacio()
    }

}

function montoCarrito() {
    let precioFinal = carrito.reduce((acumulador, producto) => acumulador + parseFloat(producto.precio), 0);
    
    let precioFormateado = precioFinal.toLocaleString();

    precioProducto.innerHTML = `Precio total: ${precioFormateado}`;
}

function cantProductos(){
    let numeroProductos = carrito.length
    TextocantidadProductos.innerHTML = `Productos(${numeroProductos})`
}

function eliminarProductoCarrito() {
    const botonEliminarProducto = document.querySelectorAll(".eliminarProducto");
    console.table(carrito);

    botonEliminarProducto.forEach((boton) => {
        boton.addEventListener("click", (el) => {
            let id = parseInt(el.target.id);
            let elementoEliminarIndex = carrito.findIndex((producto) => producto.id === id);

            if (elementoEliminarIndex !== -1) {
                carrito.splice(elementoEliminarIndex, 1);
                console.table(carrito);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                cargarProductos()
                mostrarAlerta()
            }
        });
    });

}

function limpiarCarrito(){
    botonFinalizarCompra.addEventListener("click",()=>{
        localStorage.removeItem("carrito")
        if(carrito){
            estiloCarroVacio()
        }
   
    })
}

function mostrarAlerta() {
    Toastify({
        text: "Producto Eliminado del Carrito",
        className: "alertAgregarCarrito",
        style: {
          background: "linear-gradient(to right, #ff1111, #ff6e6e)",
        },
        offset: {
            x: 500, 
            y: 10 
          },
      }).showToast();
}

function alertaSweet(){
    botonFinalizarCompra.addEventListener("click",()=>{
        Swal.fire({
            title: "Tu compra a sido realizada!",
            text: "Gracias por confiar en Tecno!",
            icon: "success"
          });
    })
}

function estiloCarroVacio(){
    resumen.style.display = "none"
    contenedorCarrito.style.display = "none"
    carritoVacio.style.display = "flex"
}

cargarProductos();
alertaSweet()
limpiarCarrito()