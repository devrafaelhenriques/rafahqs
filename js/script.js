// Verifica se há uma preferência de tema armazenada
const savedTheme = localStorage.getItem("theme");
const body = document.body;

if (savedTheme) {
    body.classList.add(savedTheme);
}

// Atualiza o tema ao alternar e salva a preferência
function toggleTheme() {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");

    // Obtém o tema atual após a troca
    const currentTheme = body.classList.contains("light-theme") ? "light-theme" : "dark-theme";

    // Salva a preferência do usuário
    localStorage.setItem("theme", currentTheme);
}

// Exemplo de uso com um botão
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", toggleTheme);



/* deslize para o portfloio */

// Função para rolar suavemente até a seção com o ID especificado
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
}

// Adiciona um ouvinte de evento de clique ao link "Portfólio"
document.querySelector('li a[href="#portfoliog"]').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Rola suavemente até a seção com o ID "portfoliog"
    scrollToSection('portfoliog');
});
