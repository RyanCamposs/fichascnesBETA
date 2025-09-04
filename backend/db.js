const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

// Cria tabela se não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS fichas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      data TEXT,
      campos TEXT
    )
  `);
});

module.exports = db;
