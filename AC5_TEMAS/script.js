document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    // Comprobar el tema actual o aplicar el tema guardado
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);

    // Cambiar tema al hacer clic
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("light") ? "light" : "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";

        document.body.classList.replace(currentTheme, newTheme);
        localStorage.setItem("theme", newTheme); // Guardar en localStorage
    });
});
