const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");


const initialDb = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
});

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ihc",
});

app.use(express.json());
app.use(cors());

// Função para criar o banco de dados e tabelas se não existirem
const createDatabaseAndTables = () => {
  initialDb.query("CREATE DATABASE IF NOT EXISTS ihc", (err) => {
    if (err) {
      console.error("Erro ao criar o banco de dados:", err);
      return;
    }

    db.query("CREATE TABLE IF NOT EXISTS pessoafisica (\
      id_pessoa INT AUTO_INCREMENT PRIMARY KEY,\
      nome VARCHAR(250),\
      apelido VARCHAR(255),\
      sexo VARCHAR(255),\
      datanascimento DATE,\
      rg VARCHAR(255),\
      ssp VARCHAR(255),\
      cpf VARCHAR(255),\
      cartaosus VARCHAR(255),\
      endereco VARCHAR(255),\
      numero VARCHAR(255),\
      bairro VARCHAR(255),\
      complemento VARCHAR(255),\
      municipio VARCHAR(255),\
      pontodereferencia VARCHAR(255),\
      contato1 VARCHAR(255),\
      contato2 VARCHAR(255),\
      pai VARCHAR(255),\
      mae VARCHAR(255),\
      responsavel VARCHAR(255),\
      bolsafamilia VARCHAR(255),\
      valorbolsafamilia VARCHAR(255),\
      beneficiodeprestacaocontinuada VARCHAR(255),\
      nis VARCHAR(255),\
      cid10 VARCHAR(255),\
      datainclusao DATE,\
      datadesligamento DATE,\
      usodeimagem VARCHAR(255)\
    )", (err) => {
      if (err) {
        console.error("Erro ao criar a tabela pessoafisica:", err);
      } else {
        console.log("Tabela pessoafisica criada ou já existe.");
      }
    });
  });
};

// Chamar a função para criar o banco de dados e tabelas
createDatabaseAndTables();

//REQUISIÇÕES PARA PESSOA FÍSICA
app.post("/register/pessoa-fisica", async (req, res) => {
  try {
    const {
      nome,
      apelido,
      sexo,
      datanascimento,
      rg,
      ssp,
      cpf,
      cartaosus,
      endereco,
      numero,
      bairro,
      complemento,
      municipio,
      pontodereferencia,
      contato1,
      contato2, 
      pai, 
      mae, 
      responsavel, 
      bolsafamilia,
      valorbolsafamilia,
      beneficiodeprestacaocontinuada, 
      nis, 
      cid10, 
      datainclusao, 
      datadesligamento, 
      usodeimagem
    } = req.body;

    

    const sql = `
      INSERT INTO pessoafisica (
        nome, apelido, sexo, datanascimento, rg, ssp, cpf, cartaosus, endereco,
        numero, bairro, complemento, municipio, pontodereferencia, contato1, contato2, pai, mae, responsavel, bolsafamilia, valorbolsafamilia, beneficiodeprestacaocontinuada, nis, cid10, datainclusao, datadesligamento, usodeimagem 
      ) VALUES (?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?)
    `;

    db.query(sql, [
      nome, apelido, sexo, datanascimento, rg, ssp, cpf, cartaosus, endereco,
      numero, bairro, complemento, municipio, pontodereferencia, contato1, contato2, pai, mae, responsavel, bolsafamilia, valorbolsafamilia, beneficiodeprestacaocontinuada, nis, cid10, datainclusao, datadesligamento, usodeimagem
    ], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ message: "Erro ao cadastrar pessoa física" });
      }
      res.send({ message: "Pessoa física cadastrada com sucesso!", id: result.insertId });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Erro ao cadastrar pessoa física" });
  }
});


app.post("/search", (req, res) => {
  const { nome } = req.body;
  const { apelido } = req.body;
  const { sexo } = req.body;
  const { datanascimento } = req.body;
  const { rg } = req.body;
  const { ssp } = req.body;
  const { cpf } = req.body;
  const { cartaosus } = req.body;
  const { endereco } = req.body;
  const { numero } = req.body;
  const { bairro } = req.body;
  const { complemento } = req.body;
  const { municipio } = req.body;
  const { pontodereferencia } = req.body;
  const { contato1 } = req.body;
  const { contato2 } = req.body;
  const { pai } = req.body;
  const { mae } = req.body;
  const { responsavel } = req.body;
  const { bolsafamilia } = req.body;
  const { beneficiodeprestacaocontinuada } = req.body;
  const { nis } = req.body;
  const { cid10 } = req.body;
  const { datainclusao } = req.body;
  const { datadesligamento } = req.body;
  const { usodeimagem } = req.body;
  
  let mysql =
    "SELECT * from pessoafisica WHERE nome = ?, apelido = ?, sexo = ?, datanascimento = ?, rg = ?, ssp = ?, cpf = ?, cartaosus = ?, endereco = ?, numero = ?, bairro = ?, complemento = ?, municipio = ?, pontodereferencia = ?, contato1 = ?, contato2 = ?, pai = ?, mae = ?, responsavel = ?, bolsafamilia = ?, beneficiodeprestacaocontinuada = ?, nis = ?, cid10 = ?, datainclusao = ?, datadesligamento = ?, usodeimagem = ?";
  db.query(mysql, [ nome, apelido, sexo, datanascimento, rg, ssp, cpf, cartaosus, endereco, numero, bairro, complemento, municipio, pontodereferencia, contato1, contato2, pai, mae, responsavel, bolsafamilia, beneficiodeprestacaocontinuada, nis, cid10, datainclusao, datadesligamento, usodeimagem ], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM pessoafisica";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/pessoa-fisica/edit/:id", async (req, res) => {
  try {
    const {
      id_pessoa,
      nome,
      apelido,
      sexo,
      datanascimento,
      rg,
      ssp,
      cpf,
      cartaosus,
      endereco,
      numero,
      bairro,
      complemento,
      municipio,
      pontodereferencia,
      contato1,
      contato2,
      pai,
      mae,
      responsavel,
      bolsafamilia,
      valorbolsafamilia,
      beneficiodeprestacaocontinuada,
      nis,
      cid10,
      datainclusao,
      datadesligamento,
      usodeimagem,
    } = req.body;
    
    const sql = `
      UPDATE pessoafisica
      SET nome = ?, apelido = ?, sexo = ?, datanascimento = ?, rg = ?, ssp = ?, cpf = ?, cartaosus = ?, 
          endereco = ?, numero = ?, bairro = ?, complemento = ?, municipio = ?, pontodereferencia = ?, 
          contato1 = ?, contato2 = ?, pai = ?, mae = ?, responsavel = ?, bolsafamilia = ?, valorbolsafamilia = ?, 
          beneficiodeprestacaocontinuada = ?, nis = ?, cid10 = ?, datainclusao = ?, datadesligamento = ?, usodeimagem = ?
      WHERE id_pessoa = ?
    `;
    
    const values = [
      nome,
      apelido,
      sexo,
      datanascimento,
      rg,
      ssp,
      cpf,
      cartaosus,
      endereco,
      numero,
      bairro,
      complemento,
      municipio,
      pontodereferencia,
      contato1,
      contato2,
      pai,
      mae,
      responsavel,
      bolsafamilia,
      valorbolsafamilia,
      beneficiodeprestacaocontinuada,
      nis,
      cid10,
      datainclusao,
      datadesligamento,
      usodeimagem,
      id_pessoa,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erro: Ocorreu um erro no banco de dados ao atualizar os dados da pessoa.");
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro: Ocorreu um erro inesperado ao tentar atualizar os dados da pessoa.");
  }
});



app.delete("/pessoa-fisica/delete/:id_pessoa", (req, res) => {
  const { id_pessoa } = req.params;
  const sql = "DELETE FROM pessoafisica WHERE id_pessoa = ?";

  db.query(sql, [id_pessoa], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro: Ocorreu um erro no banco de dados ao excluir a pessoa.");
    } else {
      res.send(result);
    }
  });
});






//REQUISIÇÕES PARA PESSOA FÍSICA





app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
