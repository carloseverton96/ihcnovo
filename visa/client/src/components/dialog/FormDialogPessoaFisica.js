import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

const FormDialogPessoaFisica = (props) => {
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
    usoimagem: props.usoimagem || "",
  });

  useEffect(() => {
    if (props.id_pessoa !== undefined && props.id_pessoa !== editValues.id_pessoa) {
      setEditValues({
        ...editValues,
        id_pessoa: props.id_pessoa,
      });
    }
  }, [props.id_pessoa]);

  const handleFieldChange = (event) => {
    const { id, value } = event.target;
    setEditValues({
      ...editValues,
      [id]: value,
    });
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditPessoaFisica = () => {
    if (!editValues.id_pessoa) {
      alert("Erro: id_pessoa está faltando nos valores de edição!");
      return;
    }

    const url = `http://localhost:3001/pessoa-fisica/edit/${editValues.id_pessoa}`;
    Axios.put(url, editValues)
      .then(() => {
        const updatedListPessoaFisica = props.listPessoaFisica.map((value) => {
          if (value.id_pessoa === editValues.id_pessoa) {
            return { ...editValues };
          }
          return value;
        });
        props.setListPessoaFisica(updatedListPessoaFisica);
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao atualizar a pessoa!", error);
      });

    handleClose();
  };

  const handleDeletePessoaFisica = () => {
    Axios.delete(`http://localhost:3001/pessoa-fisica/delete/${editValues.id_pessoa}`)
      .then(() => {
        props.setListPessoaFisica(
          props.listPessoaFisica.filter((value) => value.id_pessoa !== editValues.id_pessoa)
        );
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao excluir a pessoa!", error);
      });

    handleClose();
  };

  return (
    <div>
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
            onChange={handleFieldChange}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="apelido"
            label="Apelido"
            value={editValues.apelido}
            onChange={handleFieldChange}
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="sexo"
            label="Sexo"
            value={editValues.sexo}
            onChange={handleFieldChange}
            type="text"
            fullWidth
          />
          {/* Adicione os outros campos de TextField aqui conforme necessário */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeletePessoaFisica} color="primary">
            Excluir
          </Button>
          <Button onClick={handleEditPessoaFisica} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialogPessoaFisica;
