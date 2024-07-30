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

      tipodomicilio: props.tipodomicilio || "",
      numerocomodos: props.numerocomodos || "",
      tipodeconstrucao: props.tipodeconstrucao || "",
      abastecimentoagua: props.abastecimentoagua || "",
      tratamentodeagua: props.tratamentodeagua || "",
      energiaeletrica: props.energiaeletrica || "",
      escoamentosanitario: props.escoamentosanitario || "",
      destinolixo: props.destinolixo || "",
      nomefamilia01: props.nomefamilia01 || "",
      vinculofamiliar01: props.vinculofamiliar01 || "",
      datanascimento01: props.datanascimento01 || "",
      ocupacao01: props.ocupacao01 || "",
      vinculoempregaticio01: props.vinculoempregaticio01 || "",
      renda01: props.renda01 || "",
      escolaridade01: props.escolaridade01 || "",
      redeescolar01: props.redeescolar01 || "",
      nomefamilia02: props.nomefamilia02 || "",
      vinculofamiliar02: props.vinculofamiliar02 || "",
      datanascimento02: props.datanascimento02 || "",
      ocupacao02: props.ocupacao02 || "",
      vinculoempregaticio02: props.vinculoempregaticio02 || "",
      renda02: props.renda02 || "",
      escolaridade02: props.escolaridade02 || "",
      redeescolar02: props.redeescolar02 || "",
      nomefamilia03: props.nomefamilia03 || "",
      vinculofamiliar03: props.vinculofamiliar03 || "",
      datanascimento03: props.datanascimento03 || "",
      ocupacao03: props.ocupacao03 || "",
      vinculoempregaticio03: props.vinculoempregaticio03 || "",
      renda03: props.renda03 || "",
      escolaridade03: props.escolaridade03 || "",
      redeescolar03: props.redeescolar03 || "",
      nomefamilia04: props.nomefamilia04 || "",
      vinculofamiliar04: props.vinculofamiliar04 || "",
      datanascimento04: props.datanascimento04 || "",
      ocupacao04: props.ocupacao04 || "",
      vinculoempregaticio04: props.vinculoempregaticio04 || "",
      renda04: props.renda04 || "",
      escolaridade04: props.escolaridade04 || "",
      redeescolar04: props.redeescolar04 || "",
      nomefamilia05: props.nomefamilia05 || "",
      vinculofamiliar05: props.vinculofamiliar05 || "",
      datanascimento05: props.datanascimento05 || "",
      ocupacao05: props.ocupacao05 || "",
      vinculoempregaticio05: props.vinculoempregaticio05 || "",
      renda05: props.renda05 || "",
      escolaridade05: props.escolaridade05 || "",
      redeescolar05: props.redeescolar05 || "",
      nomefamilia06: props.nomefamilia06 || "",
      vinculofamiliar06: props.vinculofamiliar06 || "",
      datanascimento06: props.datanascimento06 || "",
      ocupacao06: props.ocupacao06 || "",
      vinculoempregaticio06: props.vinculoempregaticio06 || "",
      renda06: props.renda06 || "",
      escolaridade06: props.escolaridade06 || "",
      redeescolar06: props.redeescolar06 || "",
      nomefamilia07: props.nomefamilia07 || "",
      vinculofamiliar07: props.vinculofamiliar07 || "",
      datanascimento07: props.datanascimento07 || "",
      ocupacao07: props.ocupacao07 || "",
      vinculoempregaticio07: props.vinculoempregaticio07 || "",
      renda07: props.renda07 || "",
      escolaridade07: props.escolaridade07 || "",
      redeescolar07: props.redeescolar07 || "",
      nomefamilia08: props.nomefamilia08 || "",
      vinculofamiliar08: props.vinculofamiliar08 || "",
      datanascimento08: props.datanascimento08 || "",
      ocupacao08: props.ocupacao08 || "",
      vinculoempregaticio08: props.vinculoempregaticio08 || "",
      renda08: props.renda08 || "",
      escolaridade08: props.escolaridade08 || "",
      redeescolar08: props.redeescolar08 || "",
      psf: props.psf || "",
      agentesaude: props.agentesaude || "",
      observacoes: props.observacoes || "",
      aluguel: props.aluguel || "",
      planoSaude: props.planoSaude || "", 
      alimentacao: props.alimentacao || "", 
      agua: props.agua || "", 
      luz: props.luz || "", 
      gas: props.gas || "", 
      medicacao: props.medicacao || "", 
      transporte: props.transporte || "", 
      outrasDespesas:props.outrasDespesas || "", 
      programahabitacional:props.programahabitacional || "", 
      programadoleite:props.programadoleite || "", 
      primeiropasso:props.primeiropasso || "", 
      aluguelsocial:props.aluguelsocial || "", 
      laudomedico:props.laudomedico || "", 
      vinculo:props.vinculo || "", 
      demandas:props.demandas || "", 
      encaminhamentos:props.encaminhamentos || "",


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
  
    Axios.put("http://localhost:3002/pessoa-fisica/edit", editValues)
      .then(() => {
        if (!props.listPessoaFisica) {
          console.error("listPessoaFisica is undefined");
          return;
        }
        const updatedListPessoaFisica = props.listPessoaFisica.map((value) => {
          if (value.id === editValues.id) {
            return { ...editValues };
          } else {
            return value;
          }
        });
  
        props.setListPessoaFisica(updatedListPessoaFisica);
      })
      .catch((error) => {
        console.error("Erro ao atualizar pessoa física:", error);
      });
  
    handleClose();
  };
  
  

  const handleDeletePessoafisica = () => {
    Axios.delete(`http://localhost:3002/pessoa-fisica/delete/${editValues.id}`).then(() => {
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
          type="text"
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
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="datadesligamento"
          label="Data de Desligamento"
          value={editValues.datadesligamento}
          onChange={handleChangeValues}
          type="text"
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


<TextField
  margin="dense"
  id="tipodomicilio"
  label="Tipo de Domicílio"
  value={editValues.tipodomicilio}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="numerocomodos"
  label="Número de Cômodos"
  value={editValues.numerocomodos}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="tipodeconstrucao"
  label="Tipo de Construção"
  value={editValues.tipodeconstrucao}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="abastecimentoagua"
  label="Abastecimento de Água"
  value={editValues.abastecimentoagua}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="tratamentodeagua"
  label="Tratamento de Água"
  value={editValues.tratamentodeagua}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="energiaeletrica"
  label="Energia Elétrica"
  value={editValues.energiaeletrica}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escoamentosanitario"
  label="Escoamento Sanitário"
  value={editValues.escoamentosanitario}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="destinolixo"
  label="Destino do Lixo"
  value={editValues.destinolixo}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia01"
  label="Nome da Família 01"
  value={editValues.nomefamilia01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar01"
  label="Vínculo Familiar 01"
  value={editValues.vinculofamiliar01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento01"
  label="Data de Nascimento 01"
  value={editValues.datanascimento01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao01"
  label="Ocupação 01"
  value={editValues.ocupacao01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio01"
  label="Vínculo Empregatício 01"
  value={editValues.vinculoempregaticio01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda01"
  label="Renda 01"
  value={editValues.renda01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade01"
  label="Escolaridade 01"
  value={editValues.escolaridade01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar01"
  label="Rede Escolar 01"
  value={editValues.redeescolar01}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia02"
  label="Nome da Família 02"
  value={editValues.nomefamilia02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar02"
  label="Vínculo Familiar 02"
  value={editValues.vinculofamiliar02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento02"
  label="Data de Nascimento 02"
  value={editValues.datanascimento02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao02"
  label="Ocupação 02"
  value={editValues.ocupacao02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio02"
  label="Vínculo Empregatício 02"
  value={editValues.vinculoempregaticio02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda02"
  label="Renda 02"
  value={editValues.renda02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade02"
  label="Escolaridade 02"
  value={editValues.escolaridade02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar02"
  label="Rede Escolar 02"
  value={editValues.redeescolar02}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia03"
  label="Nome da Família 03"
  value={editValues.nomefamilia03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar03"
  label="Vínculo Familiar 03"
  value={editValues.vinculofamiliar03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento03"
  label="Data de Nascimento 03"
  value={editValues.datanascimento03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao03"
  label="Ocupação 03"
  value={editValues.ocupacao03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio03"
  label="Vínculo Empregatício 03"
  value={editValues.vinculoempregaticio03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda03"
  label="Renda 03"
  value={editValues.renda03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade03"
  label="Escolaridade 03"
  value={editValues.escolaridade03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar03"
  label="Rede Escolar 03"
  value={editValues.redeescolar03}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia04"
  label="Nome da Família 04"
  value={editValues.nomefamilia04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar04"
  label="Vínculo Familiar 04"
  value={editValues.vinculofamiliar04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento04"
  label="Data de Nascimento 04"
  value={editValues.datanascimento04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao04"
  label="Ocupação 04"
  value={editValues.ocupacao04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio04"
  label="Vínculo Empregatício 04"
  value={editValues.vinculoempregaticio04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda04"
  label="Renda 04"
  value={editValues.renda04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade04"
  label="Escolaridade 04"
  value={editValues.escolaridade04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar04"
  label="Rede Escolar 04"
  value={editValues.redeescolar04}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia05"
  label="Nome da Família 05"
  value={editValues.nomefamilia05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar05"
  label="Vínculo Familiar 05"
  value={editValues.vinculofamiliar05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento05"
  label="Data de Nascimento 05"
  value={editValues.datanascimento05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao05"
  label="Ocupação 05"
  value={editValues.ocupacao05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio05"
  label="Vínculo Empregatício 05"
  value={editValues.vinculoempregaticio05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda05"
  label="Renda 05"
  value={editValues.renda05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade05"
  label="Escolaridade 05"
  value={editValues.escolaridade05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar05"
  label="Rede Escolar 05"
  value={editValues.redeescolar05}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia06"
  label="Nome da Família 06"
  value={editValues.nomefamilia06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar06"
  label="Vínculo Familiar 06"
  value={editValues.vinculofamiliar06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento06"
  label="Data de Nascimento 06"
  value={editValues.datanascimento06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao06"
  label="Ocupação 06"
  value={editValues.ocupacao06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio06"
  label="Vínculo Empregatício 06"
  value={editValues.vinculoempregaticio06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda06"
  label="Renda 06"
  value={editValues.renda06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade06"
  label="Escolaridade 06"
  value={editValues.escolaridade06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar06"
  label="Rede Escolar 06"
  value={editValues.redeescolar06}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia07"
  label="Nome da Família 07"
  value={editValues.nomefamilia07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar07"
  label="Vínculo Familiar 07"
  value={editValues.vinculofamiliar07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento07"
  label="Data de Nascimento 07"
  value={editValues.datanascimento07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao07"
  label="Ocupação 07"
  value={editValues.ocupacao07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio07"
  label="Vínculo Empregatício 07"
  value={editValues.vinculoempregaticio07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda07"
  label="Renda 07"
  value={editValues.renda07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade07"
  label="Escolaridade 07"
  value={editValues.escolaridade07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar07"
  label="Rede Escolar 07"
  value={editValues.redeescolar07}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="nomefamilia08"
  label="Nome da Família 08"
  value={editValues.nomefamilia08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculofamiliar08"
  label="Vínculo Familiar 08"
  value={editValues.vinculofamiliar08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="datanascimento08"
  label="Data de Nascimento 08"
  value={editValues.datanascimento08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="ocupacao08"
  label="Ocupação 08"
  value={editValues.ocupacao08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculoempregaticio08"
  label="Vínculo Empregatício 08"
  value={editValues.vinculoempregaticio08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="renda08"
  label="Renda 08"
  value={editValues.renda08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="escolaridade08"
  label="Escolaridade 08"
  value={editValues.escolaridade08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="redeescolar08"
  label="Rede Escolar 08"
  value={editValues.redeescolar08}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="psf"
  label="PSF"
  value={editValues.psf}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="agentesaude"
  label="Agente de Saúde"
  value={editValues.agentesaude}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="observacoes"
  label="Observações"
  value={editValues.observacoes}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="aluguel"
  label="Aluguel"
  value={editValues.aluguel}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="planoSaude"
  label="Plano de Saúde"
  value={editValues.planoSaude}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="alimentacao"
  label="Alimentação"
  value={editValues.alimentacao}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="agua"
  label="Água"
  value={editValues.agua}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="luz"
  label="Luz"
  value={editValues.luz}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="gas"
  label="Gás"
  value={editValues.gas}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="medicacao"
  label="Medicação"
  value={editValues.medicacao}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="transporte"
  label="Transporte"
  value={editValues.transporte}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="outrasDespesas"
  label="Outras Despesas"
  value={editValues.outrasDespesas}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="programahabitacional"
  label="Programa Habitacional"
  value={editValues.programahabitacional}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="programadoleite"
  label="Programa do Leite"
  value={editValues.programadoleite}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="primeiropasso"
  label="Primeiro Passo"
  value={editValues.primeiropasso}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="aluguelsocial"
  label="Aluguel Social"
  value={editValues.aluguelsocial}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="laudomedico"
  label="Laudo Médico"
  value={editValues.laudomedico}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="vinculo"
  label="Vínculo"
  value={editValues.vinculo}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="demandas"
  label="Demandas"
  value={editValues.demandas}
  onChange={handleChangeValues}
  type="text"
  fullWidth
/>
<TextField
  margin="dense"
  id="encaminhamentos"
  label="Encaminhamentos"
  value={editValues.encaminhamentos}
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
