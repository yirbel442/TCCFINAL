function abrirMenu() {
    const menu = document.getElementById('lista-menu');
    menu.classList.toggle('ativo');
}
// Array com os dados dos depoimentos
const testimonials = [
    {
        image: "./img/depoimento3.jpeg", // Coloque aqui a foto da moça de óculos
        text: '"A melhor! sou cliente a anos, você arrasa sempre, amei meu cabelo ficou liso demais muito obrigada."',
        name: "Mariana Silva",
        role: "Cliente há 2 anos"
    },
    {
        image: "./img/depoimento.jpeg", // Coloque aqui a foto da moça de cabelo cacheado
        text: '" Gosto muito do trabalho da edilene, não troco por ninguém sensacional!!"',
        name: "Beatriz Costa",
        role: "Cliente de Cabelo e Unhas"
    },
    {
        image: "./img/depoimento2.jpeg", // Coloque aqui a foto da moça de blusa laranja
        text: '"Gostei bastante, fui recebida e tratada muito bem, além das minhas unhas ficarem lindas demais."',
        name: "Carla Mendes",
        role: "Cliente VIP"
    }
];

let currentIndex = 0;
const imgElement = document.getElementById('clientImage');
const textElement = document.getElementById('testimonialText');
const nameElement = document.getElementById('clientName');
const roleElement = document.getElementById('clientRole');

// Função para atualizar o conteúdo com efeito de fade
function updateTestimonial() {
    imgElement.style.opacity = 0;
    textElement.style.opacity = 0;

    setTimeout(() => {
        imgElement.src = testimonials[currentIndex].image;
        textElement.innerText = testimonials[currentIndex].text;
        nameElement.innerText = testimonials[currentIndex].name;
        roleElement.innerText = testimonials[currentIndex].role;

        imgElement.style.opacity = 1;
        textElement.style.opacity = 1;
    }, 300); 
}

// Função do botão Próximo
function nextTestimonial() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    updateTestimonial();
}

// Função do botão Anterior
function prevTestimonial() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }
    updateTestimonial();
}

// Inicializa o primeiro depoimento quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    updateTestimonial();
});