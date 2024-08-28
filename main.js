document.addEventListener('DOMContentLoaded', () => {
  const translateBtn = document.getElementById('translateBtn');
  const elementsToTranslate = document.querySelectorAll('[data-en]');

  if (translateBtn) {
    // Define el idioma actual, predeterminado a español
    let currentLang = 'es';

    translateBtn.addEventListener('click', () => {
        if (currentLang === 'es') {
            // Cambiar a inglés
            elementsToTranslate.forEach(element => {
                element.textContent = element.getAttribute('data-en');
            });
            translateBtn.textContent = 'Es';
            currentLang = 'en';
        } else {
            // Cambiar a español
            elementsToTranslate.forEach(element => {
                element.textContent = element.getAttribute('data-es');
            });
            translateBtn.textContent = 'En';
            currentLang = 'es';
        }
    });
  } else {
    console.error('Botón de traducción no encontrado');
  }

  const content = document.getElementById("content");
  if (content) {
    document.getElementById("trancision").style.display = "none";
    content.classList.add("show");
  } else {
    console.error('Contenido no encontrado');
  }
});
