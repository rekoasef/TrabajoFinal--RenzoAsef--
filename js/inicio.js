
const tarjetasProductos = document.querySelector(".contenedorCard");
const buscadorProductos = document.querySelector("#buscadorProductos")
const botonFiltro = document.querySelector("button.activarFiltro")
const contenedorFiltro = document.querySelector(".contenedorFiltro");
const inputFiltroPrecio = document.querySelector("#precio")
const botonFiltrar = document.querySelector(".botonFiltro")
const carritoCompras = document.querySelector("#carroDeCompras")
const inputCategoria = document.querySelector("#inputCategoria")
const URL = "../productos.json"

const productos = []

/*const productos = [ {id: 1,categoria: "Notebook" ,imagen: "../img/computadoras/lenovo.png", titulo:"Notebook Lenovo V15-IGL iron gray 15.6, Intel Pentium Silver N5030 4GB de RAM 1TB HDD, Intel UHD Graphics 605 1366x768px FreeDOS", descripcion1: "Procesador Intel Pentium Silver.",descripcion2:"Memoria RAM de 4GB.",descripcion3:"Resolución de 1366x768 px.",descripcion4:"Placa de video Intel UHD Graphics 605.",precio:"650000"},
                    {id: 2,categoria: "Celular" ,imagen: "../img/celulares/iphone14.png", titulo:"Apple iPhone 14 Pro (1 TB) - Color oro", descripcion1: "Pantalla Super Retina XDR de 6.1 pulgadas(2), siempre activa con tecnología ProMotion.",descripcion2:"Dynamic Island, una forma nueva y mágica de interactuar con tu iPhone.",descripcion3:"Cámara gran angular de 48MP para una resolución hasta 4 veces mayor.",descripcion4:"Modo Cine ahora en 4K Dolby Vision de hasta 30cps.",precio:"1800000"},
                    {id: 3,categoria: "Celular" ,imagen: "../img/celulares/Iphone12.png", titulo:"Apple iPhone 12 (128 GB) - Negro -", descripcion1: "Pantalla Super Retina XDR de 6.1 pulgadas. (1)",descripcion2:"Ceramic Shield, más resistente que cualquier vidrio de smartphone.",descripcion3:"Chip A14 Bionic, el más rápido en un smartphone.",descripcion4:"Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), modo.Noche, Deep Fusion, HDR Inteligente 3 y grabación de video 4K HDR en Dolby Vision.",precio:"1100000"},
                    {id: 4,categoria: "Notebook" ,imagen: "../img/computadoras/Notebook1.png", titulo:"Laptop gamer Legion 5 Gen 6 (15.6`, AMD)", descripcion1: "Procesadores hasta AMD Ryzen™ 7 y tarjetas gráficas NVIDIA® GeForce RTX™ serie 30 o AMD Radeon™ RX opcionales",descripcion2:"Imágenes increíbles en la pantalla hasta WQHD de 15.6” y Dolby Vision™ opcional",descripcion3:"Sonido Nahimic 3D y teclado Legion Truestrike para precisión milimétrica",descripcion4:"Laptop para gaming equipada con todo lo que necesitas para ganar",precio:"1200000"},
                    {id: 5,categoria: "Televisor" ,imagen: "../img/televisores/Televisor1.png", titulo:"Smart TV LED 55`` BGH B5522US6A Android", descripcion1: "Pantalla ULED de 55`` para colores vivos y detalles nítidos",descripcion2:"Resolución 4K para una experiencia visual inigualable",descripcion3:"Smart TV con Android TV y apps como Netflix y Disney+",descripcion4:"Conectividad WiFi para disfrutar de contenidos en streaming",precio:"850000"},
                    {id: 6,categoria: "Notebook" ,imagen: "../img/computadoras/Notebook2.png", titulo:"Notebook Dell Inspiron 3525 Amd Ryzen 5 16gb Ssd 1tb W11", descripcion1: "Memoria RAM: 16 GB",descripcion2:"Con pantalla táctil: No",descripcion3:"Tamaño de la pantalla: 15.5",descripcion4:"Color: Plata",precio:"470000"},
                    {id: 7,categoria: "Celular" ,imagen: "../img/celulares/Celular3.png", titulo:" Samsung Galaxy S23 Ultra 12gb 256gb Color Green", descripcion1: "Pantalla Dynamic AMOLED 2X de 6.8 con alta visibilidad",descripcion2:"Cámara trasera de 200 Mpx y frontal de 12 Mpx con modo nocturno",descripcion3:"Batería de 5000 mAh con carga rápida e inalámbrica",descripcion4:"Procesador Snapdragon 735 con 12 GB de RAM y 256 GB de almacenamiento",precio:"870000"},
                    {id: 8,categoria: "Televisor" ,imagen: "../img/televisores/Televisor2.png", titulo:"Tv Led Smart Hd 32p C32and Con Android Rca", descripcion1: "Su resolución es HD.",descripcion2:"Cuenta con conexión HDMI y USB.",descripcion3:"Dimensiones: 71.8cm de ancho, 47cm de alto, 18cm de profundidad.",descripcion4:"Entretenimiento y conectividad en un mismo lugar.",precio:"120000"},
                    {id: 9,categoria: "Televisor" ,imagen: "../img/televisores/Televisor3.png", titulo:"Smart Tv Noblex Dq50x9500pi Qled 4k 50'' Con Google Tv", descripcion1: "Dimensiones: 116cm de ancho, 65.2cm de alto, 7.6cm de profundidad.",descripcion2:"Google Assistant incorporado.",descripcion3:"Sistema operativo Google TV.",descripcion4:"Su resolución es 4K.",precio:"300000"},
                    {id: 10,categoria: "Notebook" ,imagen: "../img/computadoras/Notebook3.png", titulo:"Samsung Galaxy Book3 15.6 Intel Core I3 6 Núcleos 8gb 256gb", descripcion1: "Procesador Intel i3.",descripcion2:"Memoria RAM de 8GB.",descripcion3:"Pantalla FHD PLS de 15.6",descripcion4:"Placa de video Intel Iris Xe.",precio:"520000"},
                    {id: 11,categoria: "Televisor" ,imagen: "../img/televisores/Televisor4.png", titulo:"Smart Tv Uhd 4k 65 Bgh Android", descripcion1: "Su resolución es 4K.",descripcion2:"Cuenta con conexión HDMI y USB.",descripcion3:"Entretenimiento y conectividad en un mismo lugar.",descripcion4:"Tamaño de la pantalla: 65`` (10 cm)",precio:"450000"},
                    {id: 12,categoria: "Celular" ,imagen: "../img/celulares/iphone11.png", titulo:" Apple iPhone 11 (128 GB) - Negro", descripcion1: "Pantalla LCD Liquid Retina HD de 6.1 pulgadas. (3)",descripcion2:"resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros).",descripcion3:"Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps.",descripcion4:"Cámara frontal TrueDepth de 12 MP con modo Retrato, video 4K y video en cámara lenta.",precio:"700000"},
                    {id: 13,categoria: "Notebook" ,imagen: "../img/computadoras/notebook4.png", titulo:"Samsung Galaxy Book3 15.6 Intel Core I3 6 Núcleos 8gb 256gb", descripcion1: "Procesador Intel i3.",descripcion2:"Memoria RAM de 8GB.",descripcion3:"Pantalla FHD PLS de 15.6.",descripcion4:"Placa de video Intel Iris Xe.",precio:"520000"}]
Se paso al archivo productos.json*/



function recibirProductos(){
    fetch(URL)
    .then((response)=>response.json())
    .then((data)=>productos.push(...data))
    .then(()=>cargarCards())
}


let carrito = []

function cards(producto) {
    return `
      <div class="card">
          <div class="imagenProducto">
              <img src="${producto.imagen}" id="productoImagen">
          </div>
          <div class="descripcionProducto">
              <h4 class="tituloProducto">${producto.titulo}</h4>
              <ul>
                  <li>${producto.descripcion1}</li>
                  <li>${producto.descripcion2}</li>
                  <li>${producto.descripcion3}</li>
                  <li>${producto.descripcion4}</li>
              </ul>
              <div class="footercard">
                  <button id="${producto.id}" class="agregarProductos">Add to cart</button>
                  <p class="precio" id="precio">Precio: ${producto.precio}</p>   
              </div>
          </div>
      </div>
    `;
}


function cargarCards() {
    if (productos.length > 0) {
        tarjetasProductos.innerHTML = "";
        productos.forEach((producto) => {
            tarjetasProductos.innerHTML += cards(producto);
        });
        cargarCarrito();
        verCarrito()
         
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo cargar el carrito!"
          });
    }
    
}

//FUNCIONALIDAD PARA CARGAR EL CARRITO
function cargarCarrito() {
    const botonesCarrito = document.querySelectorAll(".agregarProductos");
    botonesCarrito.forEach((boton) => {
        boton.addEventListener("click", (el) => {
            const id = parseInt(el.target.id);
            const productoSeleccionado = productos.find((producto) => producto.id === id);
            console.log(carrito)
            carrito.push(productoSeleccionado);
            console.table(carrito);
            mostrarAlerta()
            guardarCarritoEnLocalStorage();
        });
       
    });

}

//MOSTRAR ALERTA CUANDO SE AÑADE UN PRODUCTO
function mostrarAlerta() {
    Toastify({
        text: "Producto Agregado Al Carrito",
        className: "alertAgregarCarrito",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        offset: {
            x: 500, 
            y: 10 
          },
      }).showToast();
}

//FUNCIONALIDAD DEL BUSCADOR (FILTRADO)
buscadorProductos.addEventListener("search", ()=>{
    let textoBuscar = buscadorProductos.value.trim().toUpperCase()
    let resultado = productos.filter((producto)=>producto.titulo.toUpperCase().includes(textoBuscar))
    console.table(resultado)

    tarjetasProductos.innerHTML = ""

    resultado.forEach((producto)=>{
        tarjetasProductos.innerHTML += cards(producto)
        cargarCarrito()
    })
    
})

//FUNCIONALIDAD DEL CARRITO
function verCarrito(){
    carritoCompras.addEventListener("mouseover",()=>{
        carritoCompras.title = ("Haga click para ver el carrito")
    })

    carritoCompras.addEventListener("click",()=>{
        console.table(carrito)
    })
}

//APARECER Y DESAPARECER FILTRO
botonFiltro.addEventListener("click", () => {
    if (contenedorFiltro.style.display === "flex") {
        // Si el filtro está visible, ocúltalo
        contenedorFiltro.style.display = "none";
        botonFiltro.textContent = "Desplegar Filtro";
    } else {
        // Si el filtro está oculto, muéstralo
        contenedorFiltro.style.display = "flex";
        botonFiltro.textContent = "Ocultar Filtro";
    }
});


// Función de filtrado con precio y categoría
function filtrarProductos() {
    const precioMax = parseFloat(inputFiltroPrecio.value.trim());
    const categoria = inputCategoria.value.trim().toUpperCase();

    let resultadoFiltro;

    if (!isNaN(precioMax) && categoria === "") {
        // Aca filtro por precio
        resultadoFiltro = productos.filter((producto) => parseFloat(producto.precio) <= precioMax);
    } else if (isNaN(precioMax) && categoria !== "") {
        // Aca filtro solo por categoria
        resultadoFiltro = productos.filter((producto) => producto.categoria.toUpperCase().includes(categoria));
    } else if (!isNaN(precioMax) && categoria !== "") {
        // Aca filtro por ambas opciones
        resultadoFiltro = productos.filter((producto) => 
            parseFloat(producto.precio) <= precioMax && producto.categoria.toUpperCase().includes(categoria)
        );
    } else {
        // No aplicar filtros
        resultadoFiltro = productos;
    }
    if(resultadoFiltro !== 0){
        tarjetasProductos.innerHTML = "";

        resultadoFiltro.forEach((producto) => {
            tarjetasProductos.innerHTML += cards(producto);
        });
        cargarCarrito();
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Producto no encontrado!",
          });
    }

}

function sacarFiltro() {
    const botonSacarFiltro = document.querySelector(".sacarFiltro");

    botonSacarFiltro.addEventListener("click", () => {
        tarjetasProductos.innerHTML = "";
        productos.forEach((producto) => {
            tarjetasProductos.innerHTML += cards(producto);
            cargarCarrito();
        });
    });
}


// Asociar la función de filtrado al evento click del botón de filtro
botonFiltrar.addEventListener("click", () => {
    filtrarProductos();
});



//practicar esto
function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

carritoCompras.addEventListener("click",()=>{
    window.location.href = "carrito.html"
})

recibirProductos()
cargarCarritoDesdeLocalStorage()
sacarFiltro()



