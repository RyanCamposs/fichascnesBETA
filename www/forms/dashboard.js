let pdfCount = 0;
let formCount = 0;

function gerarPDF() {
  // Seu código existente de geração de PDF
  pdfCount++;
  document.getElementById("pdfCount").textContent = pdfCount;
  mostrarDashboard();
}

function abrirFormulario(ficha) {
  // Seu código existente para abrir formulário
  formCount++;
  document.getElementById("formCount").textContent = formCount;
  mostrarDashboard();
}

function mostrarDashboard() {
  document.getElementById("dashboard").classList.remove("hidden");
}