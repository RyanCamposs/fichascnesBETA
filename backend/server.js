const express = require("express");
const cors = require("cors");
const db = require("./db");
const PDFDocument = require("pdfkit");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Página inicial -> lista todas as fichas
app.get("/", (req, res) => {
  db.all("SELECT * FROM fichas ORDER BY id DESC", [], (err, rows) => {
    if (err) return res.status(500).send("Erro ao carregar fichas.");

    let html = `
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>Fichas Geradas</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background: #f2f2f2; }
            tr:nth-child(even) { background: #f9f9f9; }
            a.button {
              display: inline-block;
              padding: 6px 12px;
              margin: 2px;
              background: #4CAF50;
              color: white;
              text-decoration: none;
              border-radius: 4px;
            }
            a.button:hover { background: #45a049; }
          </style>
        </head>
        <body>
          <h1>📋 Fichas Geradas</h1>
          <table>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Data</th>
              <th>Campos</th>
              <th>Ações</th>
            </tr>
    `;

    rows.forEach(row => {
      html += `
        <tr>
          <td>${row.id}</td>
          <td>${row.titulo}</td>
          <td>${row.data}</td>
          <td><pre>${JSON.stringify(JSON.parse(row.campos), null, 2)}</pre></td>
          <td>
            <a class="button" href="/fichas/${row.id}/pdf">📄 Exportar PDF</a>
          </td>
        </tr>
      `;
    });

    html += `
          </table>
        </body>
      </html>
    `;

    res.send(html);
  });
});

// API para salvar ficha
app.post("/api/fichas", (req, res) => {
  const { titulo, data, campos } = req.body;
  db.run(
    "INSERT INTO fichas (titulo, data, campos) VALUES (?, ?, ?)",
    [titulo, data, JSON.stringify(campos)],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, titulo, data, campos });
    }
  );
});

// Rota para exportar ficha em PDF
app.get("/fichas/:id/pdf", (req, res) => {
  const { id } = req.params;

  db.get("SELECT * FROM fichas WHERE id = ?", [id], (err, row) => {
    if (err) return res.status(500).send("Erro ao buscar ficha.");
    if (!row) return res.status(404).send("Ficha não encontrada.");

    const campos = JSON.parse(row.campos);

    // Cria PDF na memória
    const doc = new PDFDocument();
    res.setHeader("Content-Disposition", `attachment; filename=ficha-${row.id}.pdf`);
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);

    // Cabeçalho
    doc.fontSize(18).text("Formulário do CNES [Banco de dados]", { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`Título: ${row.titulo}`);
    doc.text(`Data: ${row.data}`);
    doc.moveDown();

    // Campos
    doc.fontSize(12).text("Campos preenchidos:");
    doc.moveDown();

    Object.entries(campos).forEach(([chave, valor]) => {
      doc.text(`${chave}: ${valor}`);
    });

    doc.end();
  });
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
