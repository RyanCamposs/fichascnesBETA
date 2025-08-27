let pdfCount = 0;
let formCount = 0;

async function gerarPDF() {
    try {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            console.error('jsPDF não está carregado');
            alert('Erro: Biblioteca jsPDF não carregada.');
            return;
        }

        const form = document.getElementById("formConteudo");
        if (!form) {
            alert("Erro: Formulário não encontrado!");
            return;
        }

        const formTitle = document.getElementById("formTitle").textContent;
        let y = 30;
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 10;

        // Coletar dados do formulário
        const campos = {};
        const inputs = form.querySelectorAll("input, select, textarea");
        inputs.forEach((el) => {
            let label = el.name;
            const span = el.closest(".campo")?.querySelector("span");
            if (span) label = span.innerText.replace(":", "").trim();
            campos[label] = el.value || "-";
        });

        // ====================
        // FUNÇÕES AUXILIARES
        // ====================

        const addHeader = () => {
            doc.setFillColor(240, 248, 255); // fundo azul clarinho
            doc.rect(0, 0, pageWidth, 20, 'F');

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.setTextColor(0, 60, 120);
            doc.text(formTitle, pageWidth / 2, 13, { align: 'center' });

            doc.setDrawColor(180, 180, 180);
            doc.line(margin, 20, pageWidth - margin, 20);
        };

        const addFooter = () => {
            doc.setDrawColor(200, 200, 200);
            doc.line(margin, pageHeight - 15, pageWidth - margin, pageHeight - 15);

            doc.setFont('helvetica', 'italic');
            doc.setFontSize(8);
            doc.setTextColor(120, 120, 120);
            doc.text(`Página ${doc.internal.getCurrentPageInfo().pageNumber}`, pageWidth - margin, pageHeight - 8, { align: 'right' });
        };

        const checkPageBreak = (requiredHeight) => {
            if (y + requiredHeight > pageHeight - 20) {
                doc.addPage();
                y = 30;
                addHeader();
                addFooter();
            }
        };

        const addTableSection = (title, fields) => {
            checkPageBreak(30 + fields.length * 10);

            // Título da seção
            doc.setFillColor(230, 240, 255); // azul suave
            doc.setDrawColor(180, 180, 180);
            doc.rect(margin, y, pageWidth - 2 * margin, 8, 'FD');

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.setTextColor(0, 70, 140);
            doc.text(title, margin + 2, y + 6);
            y += 12;

            // Campos
            doc.setFont('times', 'normal');
            doc.setFontSize(8);
            const tableWidth = pageWidth - 2 * margin;
            const labelWidth = tableWidth * 0.4;
            const valueWidth = tableWidth * 0.6;

            fields.forEach(([label, value], index) => {
                checkPageBreak(10);

                // Zebra
                if (index % 2 === 0) {
                    doc.setFillColor(245, 245, 245);
                    doc.rect(margin, y, tableWidth, 8, 'F');
                }

                doc.setDrawColor(200, 200, 200);
                doc.rect(margin, y, labelWidth, 8);
                doc.rect(margin + labelWidth, y, valueWidth, 8);

                doc.setTextColor(0, 0, 0);
                doc.text(label, margin + 2, y + 5);
                doc.setFont('helvetica', 'normal');
                doc.text(value?.toString() || '-', margin + labelWidth + 2, y + 5);

                y += 6;
            });
            y += 4;
        };

        const addObservations = (text) => {
            checkPageBreak(30 + (text.length > 0 ? 20 : 10));

            doc.setFillColor(230, 240, 255);
            doc.setDrawColor(180, 180, 180);
            doc.rect(margin, y, pageWidth - 2 * margin, 8, 'FD');

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.setTextColor(0, 70, 140);
            doc.text('OBSERVAÇÕES', margin + 2, y + 6);
            y += 12;

            doc.setFont('times', 'normal');
            doc.setFontSize(10);
            const obs = doc.splitTextToSize(text || '-', pageWidth - 2 * margin - 4);
            doc.setDrawColor(200, 200, 200);
            doc.rect(margin, y, pageWidth - 2 * margin, obs.length * 6 + 4);
            doc.text(obs, margin + 2, y + 6);
            y += obs.length * 6 + 10;
        };

        // ====================
        // CONSTRUÇÃO DO PDF
        // ====================
        addHeader();
        addFooter();
        
        // Seção: Dados do Profissional ( Ficha 31)
        if (formTitle === "Ficha 31") {
            const professionalFields = [
                ['Nome completo', campos['Nome completo']],
                ['CPF', campos['CPF']],
                ['CNS', campos['CNS']],
                ['Nome da Mãe', campos['Nome da Mãe']],
                ['Nome do Pai', campos['Nome do Pai']],
                ['Data de Nascimento', campos['Data de Nascimento']],
                ['Municipio', campos['Municipio']],
                ['UF', campos['UF']],
                ['Telefone', campos['Telefone']],
                ['Email', campos['Email']]
            ];
            addTableSection('DADOS DO PROFISSIONAL', professionalFields);

            // Seção: Dados do Estabelecimento
            const establishmentFields = [
                ['CNES', campos['CNES']],
                ['Nome fantasia do Estabelecimento', campos['Nome fantasia do Estabelecimento']],
                ['CBO/Especialidade', campos['CBO/Especialidade']],
                ['Atend.SUS', campos['Atend.SUS']],
                ['CH Amb.', campos['CH Amb.']],
                ['CH Hosp', campos['CH Hosp']],
                ['CH Outros', campos['CH Outros']],
                ['Registro no Conselho de Classe', campos['Registro no Conselho de Classe']],
                ['Órgão Emissor', campos['Órgão Emissor']],
                ['UF Conselho', campos['UF Conselho']],
                ['Forma de Contratação com o Estabelecimento', campos['Forma de Contratação com o Estabelecimento']],
                ['Forma de Contratação com o Empregador', campos['Forma de Contratação com o Empregador']],
                ['Detalhamento da Forma de Contratação', campos['Detalhamento da Forma de Contratação']],
                ['CNPJ', campos['CNPJ']],
        
            ]; 
            addTableSection('DADOS DO PROFISSIONAL', establishmentFields);
            addObservations(campos['Observações']);



            // FICHA PROFISSIONAL COM EQUIPE (PDF)
        }else if (formTitle === "Ficha 33") {
    // Seção Dados do Profissional
    const professionalFields = [
        ['Nome completo', campos['Nome completo']],
        ['CPF', campos['CPF']],
        ['CNS', campos['CNS']],
        ['Telefone', campos['Telefone']],
        ['Email', campos['Email']]
    ];
    addTableSection('DADOS DO PROFISSIONAL', professionalFields);

    // Estabelecimento Cedente
    const cedenteFields = [
        ['CNES Cedente', campos['CNES Cedente']],
        ['Nome Fantasia do Cedente', campos['Nome fantasia do Cedente']],
        ['CBO do Profissional Cedido', campos['CBO do Profissional Cedido']],
        ['CH Amb', campos['CH Amb']],
        ['CH Hosp', campos['CH Hosp']],
        ['CH Outros', campos['CH Outros']],
        ['Registro no Conselho Profissional Cedido', campos['Registro no Conselho Profissional Cedido']],
        ['Órgão Emissor Cedente', campos['Órgão Emissor Cedente']],
        ['UF Conselho Cedente', campos['UF Conselho Cedente']],
        ['Atend SUS', campos['Atend SUS']],
        ['Contratação Estabelecimento Cedente', campos['Contratação Estabelecimento Cedente']],
        ['Contratação Empregador Cedente', campos['Contratação Empregador Cedente']],
        ['Detalhamento Cedente', campos['Detalhamento Cedente']],
        ['CNPJ Cedente', campos['CNPJ Cedente']]
    ];
    addTableSection('ESTABELECIMENTO CEDENTE', cedenteFields);

    // Estabelecimento Receptor
    const receptorFields = [
        ['CNES Receptor', campos['CNES Receptor']],
        ['Nome Fantasia do Receptor', campos['Nome Fantasia do Receptor']],
        ['CBO Receptor', campos['CBO Receptor']],
        ['CH Amb Receptor', campos['CH Amb Receptor']],
        ['CH Hosp Receptor', campos['CH Hosp Receptor']],
        ['CH Outros Receptor', campos['CH Outros Receptor']],
        ['Registro no Conselho Receptor', campos['Registro no Conselho Receptor']],
        ['Órgão Emissor Receptor', campos['Órgão Emissor Receptor']],
        ['UF Conselho Receptor', campos['UF Conselho Receptor']],
        ['Atend SUS Receptor', campos['Atend SUS Receptor']],
        ['Forma de Contratação Estabelecimento Receptor', campos['Forma de Contratação Estabelecimento Receptor']],
        ['Forma de Contratação Empregador Receptor', campos['Forma de Contratação Empregador Receptor']],
        ['Detalhamento da Contratação Receptor', campos['Detalhamento da Contratação Receptor']],
        ['CNPJ Receptor', campos['CNPJ Receptor']]
    ];
    addTableSection('ESTABELECIMENTO RECEPTOR', receptorFields);

    // Observações
    addObservations(campos['Observações']);
}


        
        else if (formTitle === "Ficha 32") {
            const professionalFields = [
                ['Nome completo', campos['Nome completo']],
                ['CPF', campos['CPF']],
                ['CNS', campos['CNS']],
                ['Nome da Mãe', campos['Nome da Mãe']],
                ['Nome do Pai', campos['Nome do Pai']],
                ['Data de Nascimento', campos['Data de Nascimento']],
                ['Municipio', campos['Municipio']],
                ['UF', campos['UF']],
                ['Telefone', campos['Telefone']],
                ['Email', campos['Email']]
            ];
            addTableSection('DADOS DO PROFISSIONAL', professionalFields);

            // Seção: Dados do Estabelecimento
            const establishmentFields = [
                ['CNES', campos['CNES']],
                ['Nome fantasia do Estabelecimento', campos['Nome fantasia do Estabelecimento']],
                ['CBO/Especialidade', campos['CBO/Especialidade']],
                ['Atend.SUS', campos['Atend.SUS']],
                ['CH Amb.', campos['CH Amb.']],
                ['CH Hosp', campos['CH Hosp']],
                ['CH Outros', campos['CH Outros']],
                ['Registro no Conselho de Classe', campos['Registro no Conselho de Classe']],
                ['Órgão Emissor', campos['Órgão Emissor']],
                ['UF Conselho', campos['UF Conselho']],
                ['Forma de Contratação com o Estabelecimento', campos['Forma de Contratação com o Estabelecimento']],
                ['Forma de Contratação com o Empregador', campos['Forma de Contratação com o Empregador']],
                ['Detalhamento da Forma de Contratação', campos['Detalhamento da Forma de Contratação']],
                ['CNPJ', campos['CNPJ']],
        
            ]; 
            addTableSection('DADOS DO PROFISSIONAL', establishmentFields);
        
                const dadosDaEquipe = [
                    ['INE da Equipe', campos['INE da Equipe']],
                    ['Tipificação da Equipe', campos['Tipificação da Equipe']],
                    ['Pertencente a equipe minima?', campos['Pertencente a equipe minima?']]
                ]
                 addTableSection('Dados da Equipe', dadosDaEquipe);

                 addObservations(campos['Observações']);

        } 
        else if (formTitle === "Ficha 1") {   // FICHA 1 PDF
            const professionalFields = [
                ['CNPJ da Empresa', campos['CNPJ da Empresa']],
                ['CNES da Empresa', campos['CNES da Empresa']],
                ['Situação', campos['Situacao']],
                ['Tipo de Estabelecimento', campos['Tipo de Estabelecimento']],
                ['Razão Social', campos['Razão Social']],
                ['Nome Fantasia', campos['Nome Fantasia']],
                ['Logradouro', campos['Logradouro']],
                ['Numero', campos['Numero']],
                ['Bairro', campos['Bairro']],
                ['Municipio', campos['Municipio']]
            ];
            addTableSection('DADOS DO PROFISSIONAL', professionalFields);

            // Seção: Dados do Estabelecimento
            const establishmentFields = [
                ['Diretor da Empresa', campos['Diretor da Empresa']],
                ['Registro Conselho de Classe', campos['Registro Conselho de Classe']],
                ['Numero do Alvara', campos['Numero do Alvara']],
                ['Data de Expedição', campos['Data de Expedição']],
                ['Órgão Expedidor', campos['Órgão Expedidor']],
            ];
            addTableSection('DADOS DO ESTABELECIMENTO', establishmentFields);
            
        } 
// Recupera assinaturas do localStorage
const assinaturaResp = localStorage.getItem('assinaturaResponsavel');
const assinaturaProf = localStorage.getItem('assinaturaProfissional');

// Espaço para assinaturas
checkPageBreak(60);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Assinatura do Responsável:', margin, y);
doc.text('Assinatura do Profissional:', pageWidth/2 + margin, y);

// Inserir imagens (se existirem)
if (assinaturaResp) {
  doc.addImage(assinaturaResp, 'PNG', margin, y + 5, 80, 40);
}
if (assinaturaProf) {
  doc.addImage(assinaturaProf, 'PNG', pageWidth/2 + margin, y + 5, 80, 40);
}

y += 75; // avança espaço


        // ====================
        // SALVAR PDF
        // ====================
        pdfCount++;
        if (document.getElementById("pdfCount")) {
            document.getElementById("pdfCount").textContent = pdfCount;
        }
        if (document.getElementById("dashboard")) {
            document.getElementById("dashboard").classList.remove("hidden");
        }

        const safeTitle = formTitle.replace(/\s+/g, '-').toLowerCase();
        const fileName = `${safeTitle || 'ficha'}-servico.pdf`;

        doc.save(fileName);

    } catch (error) {
        console.error('Erro na função gerarPDF():', error);
        alert('Erro na geração do PDF: ' + (error && error.toString ? error.toString() : JSON.stringify(error)));
    }
}