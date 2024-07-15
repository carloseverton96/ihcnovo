import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialogPessoaFisica(props) {
  const [editValues, setEditValues] = useState({
    id: "",
    nome: "",
    apelido: "",
    sexo: "",
    datanascimento: "",
    rg: "",
    ssp: "",
    cpf: "",
    cartaosus: "",
    endereco: "",
    numero: "",
    bairro: "",
    complemento: "",
    municipio: "",
    pontodereferencia: "",
    contato1: "",
    contato2: "",
    pai: "",
    mae: "",
    responsavel: "",
    bolsafamilia: "",
    valorbolsafamilia: "",
    beneficiodeprestacaocontinuada: "",
    nis: "",
    cid10: "",
    datainclusao: "",
    datadesligamento: "",
    usodeimagem: "",
  });

  useEffect(() => {
    setEditValues({
      id: props.id || "",
      nome: props.nome || "",
      apelido: props.apelido || "",
      sexo: props.sexo || "",
      datanascimento: props.datanascimento || "",
      rg: props.rg || "",
      ssp: props.ssp || "",
      cpf: props.cpf || "",
      cartaosus: props.cartaosus || "",
      endereco: props.endereco || "",
      numero: props.numero || "",
      bairro: props.bairro || "",
      complemento: props.complemento || "",
      municipio: props.municipio || "",
      pontodereferencia: props.pontodereferencia || "",
      contato1: props.contato1 || "",
      contato2: props.contato2 || "",
      pai: props.pai || "",
      mae: props.mae || "",
      responsavel: props.responsavel || "",
      bolsafamilia: props.bolsafamilia || "",
      valorbolsafamilia: props.valorbolsafamilia || "",
      beneficiodeprestacaocontinuada: props.beneficiodeprestacaocontinuada || "",
      nis: props.nis || "",
      cid10: props.cid10 || "",
      datainclusao: props.datainclusao || "",
      datadesligamento: props.datadesligamento || "",
      usodeimagem: props.usodeimagem || "",
    });
  }, [props]);

  const handleChangeValues = (event) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [event.target.id]: event.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditPessoafisica = () => {
    if (!editValues.id) {
      alert("Erro: id está faltando nos valores de edição!");
      return;
    }

    // Formatar a data de nascimento para 'YYYY-MM-DD'
    const formattedValues = {
      ...editValues,
      datanascimento: editValues.datanascimento.split('T')[0], // Pegar apenas a parte da data 'YYYY-MM-DD'
    };

    Axios.put("http://localhost:3001/pessoa-fisica/edit", formattedValues).then(() => {
      const updatedListPessoaFisica = props.listPessoaFisica.map((value) => {
        if (value.id === editValues.id) {
          return { ...editValues };
        } else {
          return value;
        }
      });

      props.setListPessoaFisica(updatedListPessoaFisica);
    });

    handleClose();
  };

  const handleDeletePessoafisica = () => {
    Axios.delete(`http://localhost:3001/pessoa-fisica/delete/${editValues.id}`).then(() => {
      props.setListPessoaFisica(
        props.listPessoaFisica.filter((value) => value.id !== editValues.id)
      );
    });

    handleClose();
  };

  return (
    <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editar</DialogTitle>
      <DialogContent>
        <TextField
          disabled
          margin="dense"
          id="id"
          label="ID"
          value={editValues.id}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="nome"
          label="Nome"
          value={editValues.nome}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="apelido"
          label="Apelido"
          value={editValues.apelido}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="sexo"
          label="Sexo"
          value={editValues.sexo}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="datanascimento"
          label="Data de Nascimento"
          value={editValues.datanascimento}
          onChange={handleChangeValues}
          type="date"
          fullWidth
        />
        <TextField
          margin="dense"
          id="rg"
          label="RG"
          value={editValues.rg}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="ssp"
          label="SSP"
          value={editValues.ssp}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="cpf"
          label="CPF"
          value={editValues.cpf}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="cartaosus"
          label="Cartão SUS"
          value={editValues.cartaosus}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="endereco"
          label="Endereço"
          value={editValues.endereco}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="numero"
          label="Número"
          value={editValues.numero}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="bairro"
          label="Bairro"
          value={editValues.bairro}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="complemento"
          label="Complemento"
          value={editValues.complemento}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="municipio"
          label="Município"
          value={editValues.municipio}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="pontodereferencia"
          label="Ponto de Referência"
          value={editValues.pontodereferencia}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="contato1"
          label="Contato 1"
          value={editValues.contato1}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="contato2"
          label="Contato 2"
          value={editValues.contato2}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="pai"
          label="Pai"
          value={editValues.pai}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="mae"
          label="Mãe"
          value={editValues.mae}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="responsavel"
          label="Responsável"
          value={editValues.responsavel}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="bolsafamilia"
          label="Bolsa Família"
          value={editValues.bolsafamilia}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="valorbolsafamilia"
          label="Valor da Bolsa Família"
          value={editValues.valorbolsafamilia}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="beneficiodeprestacaocontinuada"
          label="Benefício de Prestação Continuada"
          value={editValues.beneficiodeprestacaocontinuada}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="nis"
          label="NIS"
          value={editValues.nis}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="cid10"
          label="CID-10"
          value={editValues.cid10}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="datainclusao"
          label="Data de Inclusão"
          value={editValues.datainclusao}
          onChange={handleChangeValues}
          type="date"
          fullWidth
        />
        <TextField
          margin="dense"
          id="datadesligamento"
          label="Data de Desligamento"
          value={editValues.datadesligamento}
          onChange={handleChangeValues}
          type="date"
          fullWidth
        />
        <TextField
          margin="dense"
          id="usodeimagem"
          label="Uso de Imagem"
          value={editValues.usodeimagem}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDeletePessoafisica} color="secondary">
          Excluir
        </Button>
        <Button onClick={handleEditPessoafisica} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
