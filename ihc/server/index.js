const express = require("express");
const app = express();
const mysql = require("mysql");

const cors = require("cors");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ihc",
});

app.use(express.json());
app.use(cors());

// Cadastro
app.post("/register/pessoa-fisica", async (req, res) => {
  try {
    const { nome, apelido } = req.body;

    const [result] = await pool.query(
      "INSERT INTO formpessoafisica (nome, apelido) VALUES (?, ?)",
      [nome, apelido]
    );

    res.send({ message: "Pessoa física cadastrada com sucesso!", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao cadastrar pessoa física" });
  }
});

// Busca
app.post("/search/pessoa-fisica", async (req, res) => {
  try {
    const { nome, apelido } = req.body;

    const [results] = await pool.query(
      "SELECT * FROM formpessoafisica WHERE nome = ? AND apelido = ?",
      [nome, apelido]
    );

    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao buscar pessoa física" });
  }
});

// Obter todas as pessoas físicas
app.get("/getCards/pessoa-fisica", async (req, res) => {
  try {
    const [results] = await pool.query("SELECT * FROM formpessoafisica");
    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao buscar pessoas físicas" });
  }
});

// Delete
app.delete("/delete/pessoa-fisica/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log('ID recebido para exclusão:', id); // Log para verificar o valor do `id_pessoa`

    const [result] = await pool.query(
      "DELETE FROM formpessoafisica WHERE (`id = ?`)",
      [id]
    );

    if (result.affectedRows === 0) {
      res.status(404).send({ message: "Pessoa física não encontrada" });
    } else {
      res.send({ message: "Pessoa física deletada com sucesso!" });
    }
  } catch (err) {
    console.error('Erro ao deletar pessoa física:', err); // Log detalhado do erro
    res.status(500).send({ message: "Erro ao deletar pessoa física" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
