// src/components/FormDialogPessoaFisica.js

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
    id_pessoa: props.id_pessoa || "",
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

  useEffect(() => {
    if (props.id_pessoa !== undefined && props.id_pessoa !== editValues.id_pessoa) {
      setEditValues((prevValues) => ({
        ...prevValues,
        id_pessoa: props.id_pessoa,
      }));
    }
  }, [props.id_pessoa, editValues.id_pessoa]);

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
    if (!editValues.id_pessoa) {
      alert("Erro: id_pessoa está faltando nos valores de edição!");
      return;
    }

    Axios.put("http://localhost:3001/edit", {
      id_pessoa: editValues.id_pessoa,
      nome: editValues.nome,
      apelido: editValues.apelido,
      sexo: editValues.sexo,
      datanascimento: editValues.datanascimento,
      rg: editValues.rg,
      ssp: editValues.ssp,
      cpf: editValues.cpf,
      cartaosus: editValues.cartaosus,
      endereco: editValues.endereco,
      numero: editValues.numero,
      bairro: editValues.bairro,
      complemento: editValues.complemento,
      municipio: editValues.municipio,
      pontodereferencia: editValues.pontodereferencia,
      contato1: editValues.contato1,
      contato2: editValues.contato2,
      pai: editValues.pai,
      mae: editValues.mae,
      responsavel: editValues.responsavel,
      bolsafamilia: editValues.bolsafamilia,
      valorbolsafamilia: editValues.valorbolsafamilia,
      beneficiodeprestacaocontinuada: editValues.beneficiodeprestacaocontinuada,
      nis: editValues.nis,
      cid10: editValues.cid10,
      datainclusao: editValues.datainclusao,
      datadesligamento: editValues.datadesligamento,
      usodeimagem: editValues.usodeimagem,
    }).then(() => {
      const updatedListPessoaFisica = props.listPessoaFisica.map((value) => {
        if (value.id_pessoa === editValues.id_pessoa) {
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
    Axios.delete(`http://localhost:3001/delete/${editValues.id_pessoa}`).then(() => {
      props.setListPessoaFisica(
        props.listPessoaFisica.filter((value) => value.id_pessoa !== editValues.id_pessoa)
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
          id="id_pessoa"
          label="ID"
          value={editValues.id_pessoa}
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

        {/* Add other TextField components as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button color="primary" onClick={handleDeletePessoafisica}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleEditPessoafisica}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
