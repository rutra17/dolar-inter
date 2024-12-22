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
}

// Calcula os valores com base no input
function calculateTotal() {
    const dollarValue = document.getElementById("dollarInput").value;
    const nubankCotacao = 6.18;
    const interCotacao = 6.25;

    // Calcula total Nubank
    const totalNubank = (dollarValue * nubankCotacao).toFixed(2);
    document.getElementById("nubankTotal").innerText = `R$ ${totalNubank}`;
    document.getElementById("valueDisplay").innerText = `R$ ${totalNubank}`;

    // Calcula total Inter
    const totalInter = (dollarValue * interCotacao).toFixed(2);
    document.getElementById("interTotal").innerText = `R$ ${totalInter}`;
}

// Permite cálculo com tecla "Enter"
function handleKeyPress(event) {
    if (event.key === "Enter") {
        calculateTotal();
    }
}

// Carrega a aba padrão
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("defaultTab").click();
});
