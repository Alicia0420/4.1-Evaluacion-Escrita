document.addEventListener("DOMContentLoaded", () => {
  const bienvenida = document.getElementById("bienvenida");
  const fecha = new Date();

  const spanFecha = document.createElement("span");
  spanFecha.className = "fecha";
  spanFecha.textContent = ` (${fecha.toLocaleString()})`;

  const spanMemorable = document.createElement("span");
  spanMemorable.className = "memorable";
  spanMemorable.textContent = "¡Buen provecho!";

  bienvenida.innerHTML = "¡Bienvenido a El Buen Sabor!";
  bienvenida.appendChild(spanFecha);
  bienvenida.appendChild(spanMemorable);

  mostrarMensajeMotivador();
});

function actualizarBienvenida() {
  const bienvenida = document.getElementById("bienvenida");
  const fecha = new Date();

  bienvenida.innerHTML = `¡Gracias por volver! <span class="fecha">(${fecha.toLocaleString()})</span>
    <span class="memorable">¡Disfruta tu visita!</span>`;

  const mensajeExtra = document.getElementById("mensajeExtra");
  const nuevoMensaje = document.createElement("p");
  nuevoMensaje.textContent = "Gracias por visitarnos. ¡Vuelve pronto!";
  mensajeExtra.appendChild(nuevoMensaje);
}

const menuDatos = {
  desayuno: [
    { nombre: "Yogur griego con granola y frutas frescas, acompañado de té verde", precio: "$70", imagen: "yogur.jpg" },
    { nombre: "Croissant con jamón serrano y queso brie, café con leche", precio: "$60", imagen: "croissant.jpg" }
  ],
  comida: [
    { nombre: "Milanesa de res con arroz rojo y ensalada", precio: "$70", imagen: "milanesa.jpg" },
    { nombre: "Carnitas con nopales y guacamole", precio: "$90", imagen: "carnitas.jpg" }
  ],
  cena: [
    { nombre: "Ensalada de pollo con lechuga, espinacas, manzana y nueces", precio: "$70", imagen: "ensalada.jpg" },
    { nombre: "Tostadas de aguacate con jitomate cherry y queso", precio: "$65", imagen: "tostadas.jpg" }
  ],
  brunch: [
    { nombre: "Hotcakes con miel y tocino crujiente", precio: "$75", imagen: "hotcakes.jpg" },
    { nombre: "Waffles con frutas, crema batida y miel de maple", precio: "$85", imagen: "waffles.jpg" }
  ]
};

function mostrarMenu(categoria) {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  if (!menuDatos[categoria]) {
    menu.textContent = "Menú no disponible.";
    return;
  }

  menuDatos[categoria].forEach(plato => {
    const item = document.createElement("div");
    item.className = "menu-item";

    const imagen = document.createElement("img");
    imagen.src = plato.imagen;
    imagen.alt = plato.nombre;
    imagen.style.width = "200px";
    imagen.style.borderRadius = "12px";

    const titulo = document.createElement("h3");
    titulo.textContent = plato.nombre;

    const precio = document.createElement("p");
    precio.textContent = `Precio: ${plato.precio}`;
    precio.style.fontWeight = "bold";

    item.appendChild(imagen);
    item.appendChild(titulo);
    item.appendChild(precio);

    menu.appendChild(item);
  });

  const mensajeExtra = document.getElementById("mensajeExtra");
  mensajeExtra.textContent = `Estás viendo el menú de ${categoria}. ¡Buen provecho!`;
}

function mostrarMensajeMotivador() {
  const frases = [
    "¡Hoy será un gran día!",
    "La comida es amor. ¡Disfrútala!",
    "Recuerda sonreír :)",
    "¡Buen provecho y buena vibra!"
  ];
  const seleccionada = frases[Math.floor(Math.random() * frases.length)];
  const mensaje = document.createElement("p");
  mensaje.textContent = seleccionada;
  mensaje.style.color = "#34495e";
  mensaje.style.fontWeight = "600";
  document.body.insertBefore(mensaje, document.body.firstChild);
}
function toggleAudio() {
  const audio = document.getElementById("audioAmbiente");
  audio.muted = !audio.muted;
}

