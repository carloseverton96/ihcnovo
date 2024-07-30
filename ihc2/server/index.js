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
      id INT AUTO_INCREMENT PRIMARY KEY,\
      nome VARCHAR(250),\
      apelido VARCHAR(255),\
      sexo VARCHAR(255),\
      datanascimento VARCHAR(255),\
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
      datainclusao VARCHAR(255),\
      datadesligamento VARCHAR(255),\
      usodeimagem VARCHAR(255),\
tipodomicilio VARCHAR(255),\
numerocomodos VARCHAR(255),\
tipodeconstrucao VARCHAR(255),\
abastecimentoagua VARCHAR(255),\
tratamentodeagua VARCHAR(255),\
energiaeletrica VARCHAR(255),\
escoamentosanitario VARCHAR(255),\
destinolixo VARCHAR(255),\
nomefamilia01 TEXT,\
    vinculofamiliar01 TEXT,\
    datanascimento01 TEXT,\
    ocupacao01 TEXT,\
    vinculoempregaticio01 TEXT,\
    renda01 TEXT,\
    escolaridade01 TEXT,\
    redeescolar01 TEXT,\
    nomefamilia02 TEXT,\
    vinculofamiliar02 TEXT,\
    datanascimento02 TEXT,\
    ocupacao02 TEXT,\
    vinculoempregaticio02 TEXT,\
    renda02 TEXT,\
    escolaridade02 TEXT,\
    redeescolar02 TEXT,\
    nomefamilia03 TEXT,\
    vinculofamiliar03 TEXT,\
    datanascimento03 TEXT,\
    ocupacao03 TEXT,\
    vinculoempregaticio03 TEXT,\
    renda03 TEXT,\
    escolaridade03 TEXT,\
    redeescolar03 TEXT,\
    nomefamilia04 TEXT,\
    vinculofamiliar04 TEXT,\
    datanascimento04 TEXT,\
    ocupacao04 TEXT,\
    vinculoempregaticio04 TEXT,\
    renda04 TEXT,\
    escolaridade04 TEXT,\
    redeescolar04 TEXT,\
    nomefamilia05 TEXT,\
    vinculofamiliar05 TEXT,\
    datanascimento05 TEXT,\
    ocupacao05 TEXT,\
    vinculoempregaticio05 TEXT,\
    renda05 TEXT,\
    escolaridade05 TEXT,\
    redeescolar05 TEXT,\
    nomefamilia06 TEXT,\
    vinculofamiliar06 TEXT,\
    datanascimento06 TEXT,\
    ocupacao06 TEXT,\
    vinculoempregaticio06 TEXT,\
    renda06 TEXT,\
    escolaridade06 TEXT,\
    redeescolar06 TEXT,\
    nomefamilia07 TEXT,\
    vinculofamiliar07 TEXT,\
    datanascimento07 TEXT,\
    ocupacao07 TEXT,\
    vinculoempregaticio07 TEXT,\
    renda07 TEXT,\
    escolaridade07 TEXT,\
    redeescolar07 TEXT,\
    nomefamilia08 TEXT,\
    vinculofamiliar08 TEXT,\
    datanascimento08 TEXT,\
    ocupacao08 TEXT,\
    vinculoempregaticio08 TEXT,\
    renda08 TEXT,\
    escolaridade08 TEXT,\
    redeescolar08 TEXT,\
psf VARCHAR(255),\
agentesaude VARCHAR(255),\
observacoes VARCHAR(255),\
aluguel VARCHAR(255),\
planoSaude VARCHAR(255),\
alimentacao VARCHAR(255),\
agua VARCHAR(255),\
luz VARCHAR(255),\
gas VARCHAR(255),\
medicacao VARCHAR(255),\
transporte VARCHAR(255),\
outrasDespesas VARCHAR(255),\
programahabitacional VARCHAR(255),\
programadoleite VARCHAR(255),\
primeiropasso VARCHAR(255),\
aluguelsocial VARCHAR(255),\
laudomedico VARCHAR(255),\
vinculo VARCHAR(255),\
demandas VARCHAR(255),\
encaminhamentos VARCHAR(255)\
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
      usodeimagem,
      tipodomicilio,
      numerocomodos,
      tipodeconstrucao,
      abastecimentoagua,
      tratamentodeagua,
      energiaeletrica,
      escoamentosanitario,
      destinolixo,
      nomefamilia01,
      vinculofamiliar01,
      datanascimento01,
      ocupacao01,
      vinculoempregaticio01,
      renda01,
      escolaridade01,
      redeescolar01,
      nomefamilia02,
      vinculofamiliar02,
      datanascimento02,
      ocupacao02,
      vinculoempregaticio02,
      renda02,
      escolaridade02,
      redeescolar02,
      nomefamilia03,
      vinculofamiliar03,
      datanascimento03,
      ocupacao03,
      vinculoempregaticio03,
      renda03,
      escolaridade03,
      redeescolar03,
      nomefamilia04,
      vinculofamiliar04,
      datanascimento04,
      ocupacao04,
      vinculoempregaticio04,
      renda04,
      escolaridade04,
      redeescolar04,
      nomefamilia05,
      vinculofamiliar05,
      datanascimento05,
      ocupacao05,
      vinculoempregaticio05,
      renda05,
      escolaridade05,
      redeescolar05,
      nomefamilia06,
      vinculofamiliar06,
      datanascimento06,
      ocupacao06,
      vinculoempregaticio06,
      renda06,
      escolaridade06,
      redeescolar06,
      nomefamilia07,
      vinculofamiliar07,
      datanascimento07,
      ocupacao07,
      vinculoempregaticio07,
      renda07,
      escolaridade07,
      redeescolar07,
      nomefamilia08,
      vinculofamiliar08,
      datanascimento08,
      ocupacao08,
      vinculoempregaticio08,
      renda08,
      escolaridade08,
      redeescolar08,
      psf,
      agentesaude,
      observacoes,
      aluguel,
      planoSaude,
      alimentacao,
      agua,
      luz,
      gas,
      medicacao,
      transporte,
      outrasDespesas,
      programahabitacional,
      programadoleite,
      primeiropasso,
      aluguelsocial,
      laudomedico,
      vinculo,
      demandas,
      encaminhamentos
    } = req.body;

    const sql = `
      INSERT INTO pessoafisica (
        nome, apelido, sexo, datanascimento, rg, ssp, cpf, cartaosus, endereco,
        numero, bairro, complemento, municipio, pontodereferencia, contato1, contato2, pai, mae, responsavel, bolsafamilia, valorbolsafamilia, beneficiodeprestacaocontinuada, nis, cid10, datainclusao, datadesligamento, usodeimagem, tipodomicilio, numerocomodos, tipodeconstrucao, abastecimentoagua, tratamentodeagua, energiaeletrica, escoamentosanitario, destinolixo, nomefamilia01, vinculofamiliar01, datanascimento01, ocupacao01, vinculoempregaticio01, renda01, escolaridade01, redeescolar01, nomefamilia02, vinculofamiliar02, datanascimento02, ocupacao02, vinculoempregaticio02, renda02, escolaridade02, redeescolar02, nomefamilia03, vinculofamiliar03, datanascimento03, ocupacao03, vinculoempregaticio03, renda03, escolaridade03, redeescolar03, nomefamilia04, vinculofamiliar04, datanascimento04, ocupacao04, vinculoempregaticio04, renda04, escolaridade04, redeescolar04, nomefamilia05, vinculofamiliar05, datanascimento05, ocupacao05, vinculoempregaticio05, renda05, escolaridade05, redeescolar05, nomefamilia06, vinculofamiliar06, datanascimento06, ocupacao06, vinculoempregaticio06, renda06, escolaridade06, redeescolar06, nomefamilia07, vinculofamiliar07, datanascimento07, ocupacao07, vinculoempregaticio07, renda07, escolaridade07, redeescolar07, nomefamilia08, vinculofamiliar08, datanascimento08, ocupacao08, vinculoempregaticio08, renda08, escolaridade08, redeescolar08, psf, agentesaude, observacoes, aluguel, planoSaude, alimentacao, agua, luz, gas, medicacao, transporte, outrasDespesas, programahabitacional, programadoleite, primeiropasso, aluguelsocial, laudomedico, vinculo, demandas, encaminhamentos
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
      nome, apelido, sexo, datanascimento, rg, ssp, cpf, cartaosus, endereco,
      numero, bairro, complemento, municipio, pontodereferencia, contato1, contato2, pai, mae, responsavel, bolsafamilia, valorbolsafamilia, beneficiodeprestacaocontinuada, nis, cid10, datainclusao, datadesligamento, usodeimagem, tipodomicilio, numerocomodos, tipodeconstrucao, abastecimentoagua, tratamentodeagua, energiaeletrica, escoamentosanitario, destinolixo, nomefamilia01, vinculofamiliar01, datanascimento01, ocupacao01, vinculoempregaticio01, renda01, escolaridade01, redeescolar01, nomefamilia02, vinculofamiliar02, datanascimento02, ocupacao02, vinculoempregaticio02, renda02, escolaridade02, redeescolar02, nomefamilia03, vinculofamiliar03, datanascimento03, ocupacao03, vinculoempregaticio03, renda03, escolaridade03, redeescolar03, nomefamilia04, vinculofamiliar04, datanascimento04, ocupacao04, vinculoempregaticio04, renda04, escolaridade04, redeescolar04, nomefamilia05, vinculofamiliar05, datanascimento05, ocupacao05, vinculoempregaticio05, renda05, escolaridade05, redeescolar05, nomefamilia06, vinculofamiliar06, datanascimento06, ocupacao06, vinculoempregaticio06, renda06, escolaridade06, redeescolar06, nomefamilia07, vinculofamiliar07, datanascimento07, ocupacao07, vinculoempregaticio07, renda07, escolaridade07, redeescolar07, nomefamilia08, vinculofamiliar08, datanascimento08, ocupacao08, vinculoempregaticio08, renda08, escolaridade08, redeescolar08, psf, agentesaude, observacoes, aluguel, planoSaude, alimentacao, agua, luz, gas, medicacao, transporte, outrasDespesas, programahabitacional, programadoleite, primeiropasso, aluguelsocial, laudomedico, vinculo, demandas, encaminhamentos
    ], (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).send({ message: "Erro ao cadastrar pessoa física" });
      }
      res.send({ message: "Pessoa física cadastrada com sucesso!", id: result.insertId });
    });
  } catch (err) {
    console.error("Server Error:", err);
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
  const { tipodomicilio } = req.body;
  const { numerocomodos } = req.body;
  const { tipodeconstrucao } = req.body;
  const { abastecimentoagua } = req.body;
  const { tratamentodeagua } = req.body;
  const { energiaeletrica } = req.body;
  const { escoamentosanitario } = req.body;
  const { destinolixo } = req.body;
  const { nomefamilia01 } = req.body;
  const { vinculofamiliar01 } = req.body;
  const { datanascimento01 } = req.body;
  const { ocupacao01 } = req.body;
  const { vinculoempregaticio01 } = req.body;
  const { renda01 } = req.body;
  const { escolaridade01 } = req.body;
  const { redeescolar01 } = req.body;
  const { nomefamilia02 } = req.body;
  const { vinculofamiliar02 } = req.body;
  const { datanascimento02 } = req.body;
  const { ocupacao02 } = req.body;
  const { vinculoempregaticio02 } = req.body;
  const { renda02 } = req.body;
  const { escolaridade02 } = req.body;
  const { redeescolar02 } = req.body;
  const { nomefamilia03 } = req.body;
  const { vinculofamiliar03 } = req.body;
  const { datanascimento03 } = req.body;
  const { ocupacao03 } = req.body;
  const { vinculoempregaticio03 } = req.body;
  const { renda03 } = req.body;
  const { escolaridade03 } = req.body;
  const { redeescolar03 } = req.body;
  const { nomefamilia04 } = req.body;
  const { vinculofamiliar04 } = req.body;
  const { datanascimento04 } = req.body;
  const { ocupacao04 } = req.body;
  const { vinculoempregaticio04 } = req.body;
  const { renda04 } = req.body;
  const { escolaridade04 } = req.body;
  const { redeescolar04 } = req.body;
  const { nomefamilia05 } = req.body;
  const { vinculofamiliar05 } = req.body;
  const { datanascimento05 } = req.body;
  const { ocupacao05 } = req.body;
  const { vinculoempregaticio05 } = req.body;
  const { renda05 } = req.body;
  const { escolaridade05 } = req.body;
  const { redeescolar05 } = req.body;
  const { nomefamilia06 } = req.body;
  const { vinculofamiliar06 } = req.body;
  const { datanascimento06 } = req.body;
  const { ocupacao06 } = req.body;
  const { vinculoempregaticio06 } = req.body;
  const { renda06 } = req.body;
  const { escolaridade06 } = req.body;
  const { redeescolar06 } = req.body;
  const { nomefamilia07 } = req.body;
  const { vinculofamiliar07 } = req.body;
  const { datanascimento07 } = req.body;
  const { ocupacao07 } = req.body;
  const { vinculoempregaticio07 } = req.body;
  const { renda07 } = req.body;
  const { escolaridade07 } = req.body;
  const { redeescolar07 } = req.body;
  const { nomefamilia08 } = req.body;
  const { vinculofamiliar08 } = req.body;
  const { datanascimento08 } = req.body;
  const { ocupacao08 } = req.body;
  const { vinculoempregaticio08 } = req.body;
  const { renda08 } = req.body;
  const { escolaridade08 } = req.body;
  const { redeescolar08 } = req.body;
  const { psf } = req.body;
  const { agentesaude } = req.body;
  const { observacoes } = req.body;
  const { aluguel } = req.body;
  const { planoSaude } = req.body;
  const { alimentacao } = req.body;
  const { agua } = req.body;
  const { luz } = req.body;
  const { gas } = req.body;
  const { medicacao } = req.body;
  const { transporte } = req.body;
  const { outrasDespesas } = req.body;
  const { programahabitacional } = req.body;
  const { programadoleite } = req.body;
  const { primeiropasso } = req.body;
  const { aluguelsocial } = req.body;
  const { laudomedico } = req.body;
  const { vinculo } = req.body;
  const { demandas } = req.body;
  const { encaminhamentos } = req.body;  
  let mysql =
    "SELECT * from pessoafisica WHERE nome = ?, apelido = ?, sexo = ?, datanascimento = ?, rg = ?, ssp = ?, cpf = ?, cartaosus = ?, endereco = ?, numero = ?, bairro = ?, complemento = ?, municipio = ?, pontodereferencia = ?, contato1 = ?, contato2 = ?, pai = ?, mae = ?, responsavel = ?, bolsafamilia = ?, beneficiodeprestacaocontinuada = ?, nis = ?, cid10 = ?, datainclusao = ?, datadesligamento = ?, usodeimagem = ?,  tipodomicilio = ?, numerocomodos = ?, tipodeconstrucao = ?, abastecimentoagua = ?, tratamentodeagua = ?, energiaeletrica = ?, escoamentosanitario = ?, destinolixo = ?, nomefamilia01 = ?, vinculofamiliar01 = ?, datanascimento01 = ?, ocupacao01 = ?, vinculoempregaticio01 = ?, renda01 = ?, escolaridade01 = ?, redeescolar01 = ?, nomefamilia02 = ?, vinculofamiliar02 = ?, datanascimento02 = ?, ocupacao02 = ?, vinculoempregaticio02 = ?, renda02 = ?, escolaridade02 = ?, redeescolar02 = ?, nomefamilia03 = ?, vinculofamiliar03 = ?, datanascimento03 = ?, ocupacao03 = ?, vinculoempregaticio03 = ?, renda03 = ?, escolaridade03 = ?, redeescolar03 = ?, nomefamilia04 = ?, vinculofamiliar04 = ?, datanascimento04 = ?, ocupacao04 = ?, vinculoempregaticio04 = ?, renda04 = ?, escolaridade04 = ?, redeescolar04 = ?, nomefamilia05 = ?, vinculofamiliar05 = ?, datanascimento05 = ?, ocupacao05 = ?, vinculoempregaticio05 = ?, renda05 = ?, escolaridade05 = ?, redeescolar05 = ?, nomefamilia06 = ?, vinculofamiliar06 = ?, datanascimento06 = ?, ocupacao06 = ?, vinculoempregaticio06 = ?, renda06 = ?, escolaridade06 = ?, redeescolar06 = ?, nomefamilia07 = ?,vinculofamiliar07 = ?, datanascimento07 = ?, ocupacao07 = ?, vinculoempregaticio07 = ?, renda07 = ?, escolaridade07 = ?, redeescolar07 = ?, nomefamilia08 = ?, vinculofamiliar08 = ?, datanascimento08 = ?, ocupacao08 = ?, vinculoempregaticio08 = ?, renda08 = ?, escolaridade08 = ?, redeescolar08 = ?, psf = ?, agentesaude = ?, observacoes = ?, aluguel = ?, planoSaude = ?, alimentacao = ?, agua = ?, luz = ?, gas = ?, medicacao = ?, transporte = ?, outrasDespesas = ?, programahabitacional = ?, programadoleite = ?, primeiropasso = ?, aluguelsocial = ?, laudomedico = ?, vinculo = ?, demandas = ?, encaminhamentos = ?";
  db.query(mysql, [ nome, apelido, sexo, datanascimento, rg, ssp, cpf, cartaosus, endereco, numero, bairro, complemento, municipio, pontodereferencia, contato1, contato2, pai, mae, responsavel, bolsafamilia, beneficiodeprestacaocontinuada, nis, cid10, datainclusao, datadesligamento, usodeimagem, tipodomicilio, numerocomodos, tipodeconstrucao, abastecimentoagua, tratamentodeagua, energiaeletrica, escoamentosanitario, destinolixo, nomefamilia01, vinculofamiliar01, datanascimento01, ocupacao01, vinculoempregaticio01, renda01, escolaridade01, redeescolar01, nomefamilia02, vinculofamiliar02, datanascimento02, ocupacao02, vinculoempregaticio02, renda02, escolaridade02, redeescolar02, nomefamilia03, vinculofamiliar03, datanascimento03, ocupacao03, vinculoempregaticio03, renda03, escolaridade03, redeescolar03, nomefamilia04, vinculofamiliar04, datanascimento04, ocupacao04, vinculoempregaticio04, renda04, escolaridade04, redeescolar04, nomefamilia05, vinculofamiliar05, datanascimento05, ocupacao05, vinculoempregaticio05, renda05, escolaridade05, redeescolar05, nomefamilia06, vinculofamiliar06, datanascimento06, ocupacao06, vinculoempregaticio06, renda06, escolaridade06, redeescolar06, nomefamilia07,vinculofamiliar07, datanascimento07, ocupacao07, vinculoempregaticio07, renda07, escolaridade07, redeescolar07, nomefamilia08, vinculofamiliar08, datanascimento08, ocupacao08, vinculoempregaticio08, renda08, escolaridade08, redeescolar08, psf, agentesaude, observacoes, aluguel, planoSaude, alimentacao, agua, luz, gas, medicacao, transporte, outrasDespesas, programahabitacional, programadoleite, primeiropasso, aluguelsocial, laudomedico, vinculo, demandas, encaminhamentos ], (err, result) => {
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

app.put("/pessoa-fisica/edit", (req, res) => {
  try {
    const {
      id,
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
      tipodomicilio,
      numerocomodos,
      tipodeconstrucao,
      abastecimentoagua,
      tratamentodeagua,
      energiaeletrica,
      escoamentosanitario,
      destinolixo,
      nomefamilia01,
      vinculofamiliar01,
      datanascimento01,
      ocupacao01,
      vinculoempregaticio01,
      renda01,
      escolaridade01,
      redeescolar01,
      nomefamilia02,
      vinculofamiliar02,
      datanascimento02,
      ocupacao02,
      vinculoempregaticio02,
      renda02,
      escolaridade02,
      redeescolar02,
      nomefamilia03,
      vinculofamiliar03,
      datanascimento03,
      ocupacao03,
      vinculoempregaticio03,
      renda03,
      escolaridade03,
      redeescolar03,
      nomefamilia04,
      vinculofamiliar04,
      datanascimento04,
      ocupacao04,
      vinculoempregaticio04,
      renda04,
      escolaridade04,
      redeescolar04,
      nomefamilia05,
      vinculofamiliar05,
      datanascimento05,
      ocupacao05,
      vinculoempregaticio05,
      renda05,
      escolaridade05,
      redeescolar05,
      nomefamilia06,
      vinculofamiliar06,
      datanascimento06,
      ocupacao06,
      vinculoempregaticio06,
      renda06,
      escolaridade06,
      redeescolar06,
      nomefamilia07,
      vinculofamiliar07,
      datanascimento07,
      ocupacao07,
      vinculoempregaticio07,
      renda07,
      escolaridade07,
      redeescolar07,
      nomefamilia08,
      vinculofamiliar08,
      datanascimento08,
      ocupacao08,
      vinculoempregaticio08,
      renda08,
      escolaridade08,
      redeescolar08,
      psf,
      agentesaude,
      observacoes,
      aluguel,
      planoSaude,
      alimentacao,
      agua,
      luz,
      gas,
      medicacao,
      transporte,
      outrasDespesas,
      programahabitacional,
      programadoleite,
      primeiropasso,
      aluguelsocial,
      laudomedico,
      vinculo,
      demandas,
      encaminhamentos,
    } = req.body;

    if (!id) {
      return res.status(400).send("Erro: ID é obrigatório para atualizar os dados.");
    }

    const sql = `
      UPDATE pessoafisica
      SET nome = ?, apelido = ?, sexo = ?, datanascimento = ?, rg = ?, ssp = ?, cpf = ?, cartaosus = ?, endereco = ?, numero = ?, bairro = ?, complemento = ?, municipio = ?, pontodereferencia = ?, contato1 = ?, contato2 = ?, pai = ?, mae = ?, responsavel = ?, bolsafamilia = ?, valorbolsafamilia = ?, beneficiodeprestacaocontinuada = ?, nis = ?, cid10 = ?, datainclusao = ?, datadesligamento = ?, usodeimagem = ?,  tipodomicilio = ?, numerocomodos = ?, tipodeconstrucao = ?, abastecimentoagua = ?, tratamentodeagua = ?, energiaeletrica = ?, escoamentosanitario = ?, destinolixo = ?, nomefamilia01 = ?, vinculofamiliar01 = ?, datanascimento01 = ?, ocupacao01 = ?, vinculoempregaticio01 = ?, renda01 = ?, escolaridade01 = ?, redeescolar01 = ?, nomefamilia02 = ?, vinculofamiliar02 = ?, datanascimento02 = ?, ocupacao02 = ?, vinculoempregaticio02 = ?, renda02 = ?, escolaridade02 = ?, redeescolar02 = ?, nomefamilia03 = ?, vinculofamiliar03 = ?, datanascimento03 = ?, ocupacao03 = ?, vinculoempregaticio03 = ?, renda03 = ?, escolaridade03 = ?, redeescolar03 = ?, nomefamilia04 = ?, vinculofamiliar04 = ?, datanascimento04 = ?, ocupacao04 = ?, vinculoempregaticio04 = ?, renda04 = ?, escolaridade04 = ?, redeescolar04 = ?, nomefamilia05 = ?, vinculofamiliar05 = ?, datanascimento05 = ?, ocupacao05 = ?, vinculoempregaticio05 = ?, renda05 = ?, escolaridade05 = ?, redeescolar05 = ?, nomefamilia06 = ?, vinculofamiliar06 = ?, datanascimento06 = ?, ocupacao06 = ?, vinculoempregaticio06 = ?, renda06 = ?, escolaridade06 = ?, redeescolar06 = ?, nomefamilia07 = ?,vinculofamiliar07 = ?, datanascimento07 = ?, ocupacao07 = ?, vinculoempregaticio07 = ?, renda07 = ?, escolaridade07 = ?, redeescolar07 = ?, nomefamilia08 = ?, vinculofamiliar08 = ?, datanascimento08 = ?, ocupacao08 = ?, vinculoempregaticio08 = ?, renda08 = ?, escolaridade08 = ?, redeescolar08 = ?, psf = ?, agentesaude = ?, observacoes = ?, aluguel = ?, planoSaude = ?, alimentacao = ?, agua = ?, luz = ?, gas = ?, medicacao = ?, transporte = ?, outrasDespesas = ?, programahabitacional = ?, programadoleite = ?, primeiropasso = ?, aluguelsocial = ?, laudomedico = ?, vinculo = ?, demandas = ?, encaminhamentos = ?
      WHERE id = ?
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
      tipodomicilio,
      numerocomodos,
      tipodeconstrucao,
      abastecimentoagua,
      tratamentodeagua,
      energiaeletrica,
      escoamentosanitario,
      destinolixo,
      nomefamilia01,
      vinculofamiliar01,
      datanascimento01,
      ocupacao01,
      vinculoempregaticio01,
      renda01,
      escolaridade01,
      redeescolar01,
      nomefamilia02,
      vinculofamiliar02,
      datanascimento02,
      ocupacao02,
      vinculoempregaticio02,
      renda02,
      escolaridade02,
      redeescolar02,
      nomefamilia03,
      vinculofamiliar03,
      datanascimento03,
      ocupacao03,
      vinculoempregaticio03,
      renda03,
      escolaridade03,
      redeescolar03,
      nomefamilia04,
      vinculofamiliar04,
      datanascimento04,
      ocupacao04,
      vinculoempregaticio04,
      renda04,
      escolaridade04,
      redeescolar04,
      nomefamilia05,
      vinculofamiliar05,
      datanascimento05,
      ocupacao05,
      vinculoempregaticio05,
      renda05,
      escolaridade05,
      redeescolar05,
      nomefamilia06,
      vinculofamiliar06,
      datanascimento06,
      ocupacao06,
      vinculoempregaticio06,
      renda06,
      escolaridade06,
      redeescolar06,
      nomefamilia07,
      vinculofamiliar07,
      datanascimento07,
      ocupacao07,
      vinculoempregaticio07,
      renda07,
      escolaridade07,
      redeescolar07,
      nomefamilia08,
      vinculofamiliar08,
      datanascimento08,
      ocupacao08,
      vinculoempregaticio08,
      renda08,
      escolaridade08,
      redeescolar08,
      psf,
      agentesaude,
      observacoes,
      aluguel,
      planoSaude,
      alimentacao,
      agua,
      luz,
      gas,
      medicacao,
      transporte,
      outrasDespesas,
      programahabitacional,
      programadoleite,
      primeiropasso,
      aluguelsocial,
      laudomedico,
      vinculo,
      demandas,
      encaminhamentos,
      id,
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Erro ao atualizar os dados da pessoa física:", err);
        return res.status(500).send("Erro: Ocorreu um erro no banco de dados ao atualizar os dados da pessoa.");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send("Erro: Nenhuma pessoa física encontrada com o ID fornecido.");
      }

      res.send({ message: "Dados da pessoa física atualizados com sucesso!" });
    });
  } catch (error) {
    console.error("Erro inesperado ao tentar atualizar os dados da pessoa física:", error);
    res.status(500).send("Erro: Ocorreu um erro inesperado ao tentar atualizar os dados da pessoa.");
  }
});





app.delete("/pessoa-fisica/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM pessoafisica WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro: Ocorreu um erro no banco de dados ao excluir a pessoa.");
    } else {
      res.send(result);
    }
  });
});






//REQUISIÇÕES PARA SERVIÇO SOCIAL








app.listen(3002, () => {
  console.log("rodando na porta 3002");
});
