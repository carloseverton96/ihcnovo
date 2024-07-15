import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialogPessoaFisica(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    nome: props.nome,
    apelido: props.apelido,
    sexo: props.sexo,
    datanascimento: props.datanascimento,
    rg: props.rg,
    ssp: props.ssp,
    cpf: props.cpf,
    cartaosus: props.cartaosus,
    endereco: props.endereco,
    numero: props.numero,
    bairro: props.bairro,
    complemento: props.complemento,
    municipio: props.municipio,
    pontodereferencia: props.pontodereferencia,
    contato1: props.contato1,
    contato2: props.contato2,
    pai: props.pai,
    mae: props.mae,
    responsavel: props.responsavel,
    bolsafamilia: props.bolsafamilia,
    beneficiodeprestacaocontinuada: props.beneficiodeprestacaocontinuada,
    nis: props.nis,
    cid10: props.cid10,
    datainclusao: props.datainclusao,
    datadesligamento: props.datadesligamento,
    usoimagem: props.usoimagem,
  });

  const handleChangeValues = (event) => {
    const { id, value } = event.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditPessoaFisica = () => {
    Axios.put("http://localhost:3001/pessoa-fisica/edit", editValues)
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
        console.error("There was an error updating the person!", error);
      });
    handleClose();
  };

  const handleDeletePessoaFisica = () => {
    Axios.delete(`http://localhost:3001/pessoa-fisica/delete/${editValues.id}`)
      .then(() => {
        props.setListPessoaFisica(
          props.listPessoaFisica.filter((value) => value.id_pessoa !== editValues.id_pessoa)
        );
      })
      .catch((error) => {
        console.error("There was an error deleting the person!", error);
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
            id="id"
            label="ID"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            defaultValue={props.nome}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            margin="dense"
            id="apelido"
            label="Apelido"
            defaultValue={props.apelido}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="sexo"
            label="Sexo"
            defaultValue={props.sexo}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="datanascimento"
            label="Data de Nascimento"
            defaultValue={props.datanascimento}
            type="date"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="rg"
            label="RG"
            defaultValue={props.rg}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="ssp"
            label="SSP"
            defaultValue={props.ssp}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="cpf"
            label="CPF"
            defaultValue={props.cpf}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="cartaosus"
            label="Cartão SUS"
            defaultValue={props.cartaosus}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="endereco"
            label="Endereço"
            defaultValue={props.endereco}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="numero"
            label="Número"
            defaultValue={props.numero}
            type="number"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="bairro"
            label="Bairro"
            defaultValue={props.bairro}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="complemento"
            label="Complemento"
            defaultValue={props.complemento}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="municipio"
            label="Município"
            defaultValue={props.municipio}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="pontodereferencia"
            label="Ponto de Referência"
            defaultValue={props.pontodereferencia}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="contato1"
            label="1º Contato"
            defaultValue={props.contato1}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="contato2"
            label="2º Contato"
            defaultValue={props.contato2}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="pai"
            label="Pai"
            defaultValue={props.pai}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="mae"
            label="Mãe"
            defaultValue={props.mae}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="responsavel"
            label="Responsável"
            defaultValue={props.responsavel}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="bolsafamilia"
            label="Bolsa Família"
            defaultValue={props.bolsafamilia}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="valorbolsafamilia"
            label="Valor Bolsa Família"
            defaultValue={props.valorbolsafamilia}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="beneficiodeprestacaocontinuada"
            label="Benefício de Prestação Continuada"
            defaultValue={props.beneficiodeprestacaocontinuada}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="nis"
            label="NIS"
            defaultValue={props.nis}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="cid10"
            label="CID-10"
            defaultValue={props.cid10}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="datainclusao"
            label="Data de Inclusão"
            defaultValue={props.datainclusao}
            type="date"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="datadesligamento"
            label="Data de Desligamento"
            defaultValue={props.datadesligamento}
            type="date"
            fullWidth
            onChange={handleChangeValues}
          />
          <TextField
            margin="dense"
            id="usoimagem"
            label="Uso de Imagem"
            defaultValue={props.usoimagem}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />
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
}
