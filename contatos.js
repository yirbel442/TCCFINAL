function abrirMenu() {
    const menu = document.getElementById('lista-menu');
    menu.classList.toggle('ativo');
    document.querySelector(".navegacao").classList.toggle("ativo");
}





const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Pegando os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Número do WhatsApp da EW Beauty
    const telefone = "5511926376347";

    // Criando a mensagem
    const texto = `Olá! Meu nome é ${nome}.

Meu e-mail: ${email}

Minha mensagem: ${mensagem}`;

    // Criando o link do WhatsApp
    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    // Abrindo o WhatsApp
    window.open(link, "_blank");

});