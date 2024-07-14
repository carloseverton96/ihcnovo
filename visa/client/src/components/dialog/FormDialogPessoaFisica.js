//este é a parte que surge uma caixa de formulário para atualizar ou deletar algum cadastro.

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
    id_pessoa: props.id_pessoa,
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

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditPessoaFisica = () => {
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
    beneficiodeprestacaocontinuada: editValues.beneficiodeprestacaocontinuada,
    nis: editValues.nis,
    cid10: editValues.cid10,
    datainclusao: editValues.datainclusao,
    datadesligamento: editValues.datadesligamento,
    usoimagem: editValues.usoimagem,

    }).then(() => {
      // Crie um novo array para armazenar os dados atualizados
      const updatedListPessoaFisica = props.listPessoaFisica.map((value) => {
        // Verifique se o ID corresponde ao valor editado
        if (value.id_pessoa === editValues.id_pessoa) {
          // Retorne um novo objeto com os dados atualizados
          return {
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
            beneficiodeprestacaocontinuada: editValues.beneficiodeprestacaocontinuada,
            nis: editValues.nis,
            cid10: editValues.cid10,
            datainclusao: editValues.datainclusao,
            datadesligamento: editValues.datadesligamento,
            usoimagem: editValues.usoimagem,
          };
        } else {
          // Retorne o valor original para outros itens
          return value;
        }
      });

      // Atualize o estado com o novo array usando a prop recebida
      props.setListPessoaFisica(updatedListPessoaFisica);
    });
    handleClose();
  };
  
  const handleDeletePessoaFisica = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id_pessoa}`).then(() => {
      props.setListPessoaFisica(
        props.listPessoaFisica.filter((value) => {
          return value.id_pessoa !== editValues.id_pessoa;
        })
      );
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
            label="id_pessoa"
            defaultValue={props.id_pessoa}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cnpj"
            label="cnpj"
            defaultValue={props.cnpj}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
         

          <TextField
            margin="dense"
            id="esfempresaunidade"
            label="ESF/EMPRESA/UNIDADE"
            defaultValue={props.esfempresaunidade}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="razaosocial"
            label="Razão Social"
            defaultValue={props.razaosocial}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="nomefantasia"
            label="Nome Fantasia"
            defaultValue={props.nomefantasia}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="cnes"
            label="CNES"
            defaultValue={props.cnes}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="cpfresponsavellegal"
            label="CPF Responsável Legal"
            defaultValue={props.cpfresponsavellegal}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="nomeresponsavellegal"
            label="Nome Responsável Legal"
            defaultValue={props.nomeresponsavellegal}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="cpfresponsaveltecnico"
            label="CPF Responsável Técnico"
            defaultValue={props.cpfresponsaveltecnico}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="nomeresponsaveltecnico"
            label="Nome Responsável Técnico"
            defaultValue={props.nomeresponsaveltecnico}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

          <TextField
            margin="dense"
            id="numeroresponsaveltecnico"
            label="Nº Conselho de Classe"  
            defaultValue={props.numeroresponsaveltecnico}
            type="number"
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
            label="Nº"
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
            id="anocadastro"
            label="Ano de Cadastro"  defaultValue={props.anocadastro}
            type="text"
            fullWidth
            onChange={handleChangeValues}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary" onClick={handleDeletePessoaFisica}>
            Excluir
          </Button>
          <Button color="primary" onClick={handleEditPessoaFisica}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
