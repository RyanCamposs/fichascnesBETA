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

        // Funções auxiliares
        const addHeader = () => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(16);
            doc.setTextColor(0, 0, 0);
            doc.text(formTitle, pageWidth / 2, 15, { align: 'center' });
            doc.setLineWidth(0.5);
            doc.setDrawColor(100, 100, 100);
            doc.line(margin, 20, pageWidth - margin, 20);
        };

        const addFooter = () => {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.text(`Página ${doc.internal.getCurrentPageInfo().pageNumber}`, pageWidth - margin - 10, pageHeight - 10, { align: 'right' });
        };

        const checkPageBreak = (requiredHeight) => {
            if (y + requiredHeight > pageHeight) {
                doc.addPage();
                y = 30;
                addHeader();
                addFooter();
            }
        };

        const addTableSection = (title, fields) => {
            checkPageBreak(30 + fields.length * 10);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.setFillColor(0, 200, 200);
            doc.rect(margin, y, pageWidth - 2 * margin, 8, 'F');
            doc.setTextColor(0, 0, 0);
            doc.text(title, margin + 2, y + 6);
            y += 10;

            doc.setFont('times', 'normal');
            doc.setFontSize(10);
            doc.setDrawColor(0, 0, 0);

            const tableWidth = pageWidth - 2 * margin;
            const labelWidth = tableWidth * 0.4;
            const valueWidth = tableWidth * 0.6;

            fields.forEach(([label, value]) => {
                checkPageBreak(10);
                doc.rect(margin, y, labelWidth, 8);
                doc.rect(margin + labelWidth, y, valueWidth, 8);
                doc.text(label, margin + 2, y + 6);
                doc.text(value?.toString() || '-', margin + labelWidth + 2, y + 6);
                y += 8;
            });
            y += 5;
        };

        const addObservations = (text) => {
            checkPageBreak(30 + (text.length > 0 ? 20 : 10));
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.setFillColor(0, 200, 200);
            doc.rect(margin, y, pageWidth - 2 * margin, 8, 'F');
            doc.setTextColor(0, 0, 0);
            doc.text('OBSERVAÇÕES', margin + 2, y + 6);
            y += 10;

            doc.setFont('times', 'normal');
            doc.setFontSize(10);
            doc.setDrawColor(100, 100, 100);
            const obs = doc.splitTextToSize(text || '-', pageWidth - 2 * margin - 4);
            doc.rect(margin, y, pageWidth - 2 * margin, obs.length * 6 + 4);
            doc.text(obs, margin + 2, y + 6);
            y += obs.length * 6 + 10;
        };

        // Adiciona header e footer iniciais
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
        } else if (formTitle === "Ficha 32") {
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

        } else if (formTitle === "Ficha 1") {   // FICHA 1 PDF
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

        // Campo de assinatura
        checkPageBreak(20);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('Assinatura e Carimbo do(a) Responsável:', margin, y);
        doc.setLineWidth(0.5);
        doc.setDrawColor(100, 100, 100);
        doc.line(margin, y + 5, pageWidth - margin, y + 5);
        y += 10;

        // Salvar o PDF
         pdfCount++;
        if (document.getElementById("pdfCount")) {
            document.getElementById("pdfCount").textContent = pdfCount;
        }
        if (document.getElementById("dashboard")) {
            document.getElementById("dashboard").classList.remove("hidden");
        }

        // Salvar o PDF
        // nome do arquivo com extensão correta
        const safeTitle = formTitle.replace(/\s+/g, '-').toLowerCase();
        const fileName = `${safeTitle || 'ficha'}-servico.pdf`;

        // Debug: checar se pdf tem conteúdo
        try {
            const pdfBlobCheck = doc.output("blob");
            console.log("Tamanho do blob gerado:", pdfBlobCheck.size);
            if (!pdfBlobCheck || pdfBlobCheck.size === 0) {
                alert("Erro: O PDF gerado está vazio.");
                return;
            }
        } catch (e) {
            console.warn("Não foi possível verificar o blob do PDF:", e);
        }

        // Se estiver rodando no navegador (sem Cordova)
        if (typeof window.cordova === "undefined") {
            console.log("Rodando no navegador, usando jsPDF.save()");
            try {
                doc.save(fileName);
            } catch (e) {
                console.error("Erro ao salvar via doc.save():", e);
                alert("Erro ao salvar PDF no navegador: " + e.toString());
            }
            return;
        }

        // Se for Cordova Android (tentativa segura)
        try {
            const platformId = window.cordova?.platformId || '';
            const fileSystemDirectory = window.cordova?.file?.dataDirectory || null;

            if (platformId.toLowerCase() === "android") {
                console.log("Iniciando salvamento do PDF no Android (Cordova)");
                const pdfBlob = doc.output("blob");
                if (!pdfBlob || pdfBlob.size === 0) {
                    alert("Erro: O PDF gerado está vazio.");
                    return;
                }

                if (!fileSystemDirectory) {
                    alert("Erro: Nenhum diretório de arquivo disponível (cordova.file.dataDirectory ausente).");
                    return;
                }

                window.resolveLocalFileSystemURL(fileSystemDirectory, function (dirEntry) {
                    dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
                        fileEntry.createWriter(function (writer) {
                            writer.onwriteend = function () {
                                alert("PDF salvo com sucesso: " + fileName);
                                if (cordova.plugins && cordova.plugins.fileOpener2) {
                                    cordova.plugins.fileOpener2.open(
                                        fileEntry.toURL(),
                                        "application/pdf"
                                    );
                                }
                            };
                            writer.onerror = function (error) {
                                alert("Erro ao salvar PDF: " + error.toString());
                            };
                            writer.write(pdfBlob);
                        }, function (err) {
                            alert("Erro ao criar writer: " + err.toString());
                        });
                    }, function (err) {
                        alert("Erro ao obter/criar arquivo: " + err.toString());
                    });
                }, function (err) {
                    alert("Erro ao acessar o diretório do sistema de arquivos: " + err.toString());
                });
            } else {
                alert("Plataforma Cordova não suportada para salvamento automático: " + platformId);
            }
        } catch (e) {
            alert("Erro durante salvamento em Cordova: " + e.toString());
            console.error(e);
        }

    } catch (error) {
        // erro geral
        console.error('Erro na função gerarPDF():', error);
        alert('Erro na geração do PDF: ' + (error && error.toString ? error.toString() : JSON.stringify(error)));
    }
}