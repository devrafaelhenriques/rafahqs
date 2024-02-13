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


// transição logo
window.addEventListener('load', function() {
    var imagem = document.getElementById('logo');
    imagem.style.opacity = 0;

    var fadeIn = function(timestamp) {
        imagem.style.opacity = Math.min(1, parseFloat(imagem.style.opacity) + 0.01); // Ajuste a velocidade conforme necessário
        if (parseFloat(imagem.style.opacity) < 1) {
            window.requestAnimationFrame(fadeIn);
        }
    };

    window.requestAnimationFrame(fadeIn); // Inicia o processo de fade-in
});


/* FAQ */

const buttons = document.querySelectorAll('.perguntas button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.parentElement.querySelector('p');
        const icon = button.querySelector('.seta');

        // Verifica se o FAQ está visível ou não
        const isVisible = faq.style.maxHeight;

        // Remove a classe 'show' de todos os FAQs
        document.querySelectorAll('.perguntas p').forEach(item => {
            item.style.maxHeight = null;
        });

        // Adiciona ou remove a altura máxima no FAQ clicado
        if (!isVisible || isVisible === '0px') {
            faq.style.maxHeight = faq.scrollHeight + "px";
        } else {
            faq.style.maxHeight = null;
        }

        // Girar a seta para cima ou para baixo
        icon.classList.toggle('rotate');
    });
});



// Remover a extensão .html da URL
if (location.pathname.match(/\.html$/)) {
    var newURL = location.pathname.replace(/\.html$/, '');
    window.history.replaceState({}, null, newURL);
}


// menu para mobile
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
