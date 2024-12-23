// Alterna entre abas
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");

    // Atualizar o valor em reais ao mudar de aba
    updateValueDisplay(tabName);
}

// Atualiza o valor em reais no display
function updateValueDisplay(tabName) {
    const dollarValue = document.getElementById("dollarInput").value || 0;
    const rate = tabName === "Nubank" ? 6.18 : 6.25;
    const total = dollarValue > 0 ? `R$ ${(dollarValue * rate).toFixed(2)}` : "R$";
    document.getElementById("valueDisplay").innerText = total;
}

// Calcula os valores com base no input
function calculateTotal() {
    const dollarValue = document.getElementById("dollarInput").value;
    const nubankRate = 6.18;
    const interRate = 6.25;

    // Calcula total Nubank
    const totalNubank = (dollarValue * nubankRate).toFixed(2);
    document.getElementById("nubankTotal").innerText = `R$ ${totalNubank}`;
    document.getElementById("nubankCompra").innerText = `R$ ${nubankRate}`;
    document.getElementById("nubankVenda").innerText = `R$ ${(nubankRate + 0.01).toFixed(2)}`;

    // Calcula total Inter
    const totalInter = (dollarValue * interRate).toFixed(2);
    document.getElementById("interTotal").innerText = `R$ ${totalInter}`;
    document.getElementById("interCompra").innerText = `R$ ${interRate}`;
    document.getElementById("interVenda").innerText = `R$ ${(interRate + 0.02).toFixed(2)}`;

    // Exibe as informações ocultas
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
        element.classList.remove("hidden");
    });

    // Exibe a última cotação
    document.getElementById("lastQuote").classList.remove("hidden");
}

// Permite cálculo com tecla "Enter"
function handleKeyPress(event) {
    if (event.key === "Enter") {
        calculateTotal();
    }
}

// Obtém a última cotação do dólar comercial
function fetchDollarQuote() {
    const date = new Date();
    document.getElementById("lastQuoteDateTime").innerText = date.toLocaleString("pt-BR");
}

// Carrega a aba padrão
document.addEventListener("DOMContentLoaded", function () {
    fetchDollarQuote();
    document.getElementById("defaultTab").click();
});
