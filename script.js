// Variables para controlar el índice de la imagen visible
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item'); // Selecciona todos los elementos del carrusel
const totalItems = items.length; // Obtén el número total de elementos

// Botón "siguiente"
document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Regresar al principio
    }
    updateCarousel();
});

// Botón "anterior"
document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Regresar al final
    }
    updateCarousel();
});

// Función para actualizar el carrusel y mover las imágenes
function updateCarousel() {
    const offset = -currentIndex * 100; // Mueve el carrusel
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}
