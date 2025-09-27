
document.addEventListener('DOMContentLoaded', () => {
    // Asegúrate de que tu código anterior del burger menu esté aquí...

    const typingElement = document.getElementById('typing-text');
    
    // Frases a escribir y borrar
    const phrases = [
        "Hola, soy Keider Cabrera",
        "Frontend Developer",
        "Diseñador de Interfaces",
        "Experto en UX/UI" // ¡Puedes añadir tus mejores habilidades!
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // Velocidad de escritura (milisegundos)
    const deletingSpeed = 60; // Velocidad de borrado (milisegundos)
    const pauseTime = 1500; // Pausa antes de borrar (milisegundos)

    function type() {
        if (!typingElement) return; // Salir si el elemento no existe

        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Lógica de Borrado
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Lógica de Escritura
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Terminó de escribir, ahora pausa y empieza a borrar
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Terminó de borrar, ahora cambia a la siguiente frase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Cicla al inicio
            speed = typingSpeed;
        }

        setTimeout(type, speed);
    }

    // Inicia la animación
    type();
});