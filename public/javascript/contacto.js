document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación simple
    if (!nombre || !email || !mensaje) {
        showMessage("Por favor, completa todos los campos obligatorios.", "error");
        return;
    }

    // Mostrar mensaje de éxito
    showMessage("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.", "success");

    // Limpiar el formulario
    document.getElementById("contactForm").reset();
});

// Función para mostrar mensajes de éxito o error
function showMessage(message, type) {
    const messageContainer = document.getElementById("formMessage");

    messageContainer.textContent = message;
    messageContainer.className = 'form-message ' + type;

    setTimeout(function() {
        messageContainer.textContent = '';
    }, 5000);
}
