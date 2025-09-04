const express = require("express");
const cors = require("cors");
const db = require("./db");

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
            table { border-collapse: collapse;  }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background: #f2f2f2; }
            tr:nth-child(even) { background: #f9f9f9; }
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
            </tr>
    `;

    rows.forEach(row => {
      html += `
        <tr>
          <td>${row.id}</td>
          <td>${row.titulo}</td>
          <td>${row.data}</td>
          <td><pre>${JSON.stringify(JSON.parse(row.campos), null, 2)}</pre></td>
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

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
