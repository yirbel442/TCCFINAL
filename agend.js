const numeroDona = "5511926376347";

const formulario = document.getElementById("formAgendamento");

// Permitir escolher somente um horário
const horarios = document.querySelectorAll('input[name="horario"]');

horarios.forEach(horario => {
    horario.addEventListener("change", function () {

        if (this.checked) {
            horarios.forEach(outroHorario => {
                if (outroHorario !== this) {
                    outroHorario.checked = false;
                }
            });
        }

    });
});

// Impedir datas anteriores ao dia atual
const campoData = document.getElementById("data");

const hoje = new Date();
hoje.setMinutes(hoje.getMinutes() - hoje.getTimezoneOffset());

campoData.min = hoje.toISOString().split("T")[0];

// Enviar agendamento para o WhatsApp
formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const data = campoData.value;
    const observacao = document.getElementById("observacao").value;

    const servicosSelecionados = document.querySelectorAll(
        'input[name="servicos"]:checked'
    );

    const horarioSelecionado = document.querySelector(
        'input[name="horario"]:checked'
    );

    // Verificar se escolheu algum serviço
    if (servicosSelecionados.length === 0) {
        alert("Por favor, selecione pelo menos um serviço.");
        return;
    }

    // Verificar se escolheu um horário
    if (!horarioSelecionado) {
        alert("Por favor, selecione um horário.");
        return;
    }

    // Organizar os serviços
    const listaServicos = Array.from(servicosSelecionados)
        .map(servico => servico.value)
        .join(", ");

    // Organizar a data
    const dataFormatada = data.split("-").reverse().join("/");

    // Criar a mensagem
    const mensagem = 
`Olá! Gostaria de solicitar um agendamento na EW Beauty.

Nome: ${nome}
Serviços: ${listaServicos}
Data: ${dataFormatada}
Horário: ${horarioSelecionado.value}
Observação: ${observacao || "Nenhuma"}

Aguardo a confirmação!`;

    // Codificar a mensagem para o WhatsApp
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Abrir WhatsApp
    const link = `https://wa.me/${numeroDona}?text=${mensagemCodificada}`;

    window.open(link, "_blank");

});
function abrirMenu() {
    const menu = document.getElementById('lista-menu');
    menu.classList.toggle('ativo');
}