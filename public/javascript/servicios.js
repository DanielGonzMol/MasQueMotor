document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.more-details-btn');
// Selecciona todos los botones "Más detalles"
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceCard = button.closest('.service-card');
            // Encuentra el contenedor de la tarjeta de servicio más cercana
            const extraDetails = serviceCard.querySelector('.extra-details');

            // Alterna la visibilidad de los detalles adicionales
            if (extraDetails.style.display === 'none' || extraDetails.style.display === '') {
                extraDetails.style.display = 'block';
            } else {
                extraDetails.style.display = 'none';
            }
        });
    });
});
