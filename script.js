// Función para desplazar el carrusel
function scrollCarousel(id, direction) {
  const container = document.getElementById(id);
  const scrollAmount = 320; // ajustá según el ancho de tus imágenes
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Función para abrir el popup con la imagen seleccionada
function openPopup(src) {
  const popup = document.getElementById('popup-container');
  const popupImage = document.getElementById('popup-image');
  popupImage.src = src;
  popup.classList.add('popup-visible');
}

// Función para cerrar el popup
function closePopup() {
  const popup = document.getElementById('popup-container');
  popup.classList.remove('popup-visible');
}

// Cargar y ocultar el loader al cargar la página
window.onload = function() {
  document.getElementById('loader').style.display = 'none';
};



//RESERVA


document.getElementById("form-reserva").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const personas = document.getElementById("personas").value;

  const telefono = "595982282143"; // tu WhatsApp

  const mensaje = 
    `Hola, quiero reservar una mesa.%0A%0A` +
    `👤 Nombre: ${nombre}%0A` +
    `📅 Fecha: ${fecha}%0A` +
    `⏰ Hora: ${hora}%0A` +
    `👥 Personas: ${personas}%0A%0A` +
    `Quedo atento/a a la confirmación.`;

  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, "_blank");
});
