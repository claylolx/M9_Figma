// Referencia al boton de cambio de tema
const toggleThemeBtn = document.getElementById('toggle-theme');

// Comprobar y aplicar la preferencia guardada al cargar la página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Evento para cambiar el tema
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Guardar el estado actual en localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


