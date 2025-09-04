// Alternar tema claro/escuro

const themeToggle = document.getElementById("themeToggle");
const ficha = document.getElementById("fichaSection")
themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    ficha.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};