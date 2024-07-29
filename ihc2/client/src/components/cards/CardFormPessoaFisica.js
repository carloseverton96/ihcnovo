import React from "react";
import "./card.css";
import FormDialogPessoaFisica from "../dialog/FormDialogPessoaFisica";

export default function CardFormPessoaFisica(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialogPessoaFisica
        open={open}
        setOpen={setOpen}
        id={props.id}
        nome={props.nome}
        apelido={props.apelido}
        sexo={props.sexo}
        datanascimento={props.datanascimento}
        rg={props.rg}
        ssp={props.ssp}
        cpf={props.cpf}
        cartaosus={props.cartaosus}
        endereco={props.endereco}
        numero={props.numero}
        bairro={props.bairro}
        complemento={props.complemento}
        municipio={props.municipio}
        pontodereferencia={props.pontodereferencia}
        contato1={props.contato1}
        contato2={props.contato2}
        pai={props.pai}
        mae={props.mae}
        responsavel={props.responsavel}
        bolsafamilia={props.bolsafamilia}
        beneficiodeprestacaocontinuada={props.beneficiodeprestacaocontinuada}
        nis={props.nis}
        cid10={props.cid10}
        datainclusao={props.datainclusao}
        datadesligamento={props.datadesligamento}
        usodeimagem={props.usodeimagem}
    tipodomicilio={props.tipodomicilio}
    numerocomodos={props.numerocomodos}
    tipodeconstrucao={props.tipodeconstrucao}
    abastecimentoagua={props.abastecimentoagua}
    tratamentodeagua={props.tratamentodeagua}
    energiaeletrica={props.energiaeletrica}
    escoamentosanitario={props.escoamentosanitario}
    destinolixo={props.destinolixo}
    nomefamilia01={props.nomefamilia01}
    vinculofamiliar01={props.vinculofamiliar01}
    datanascimento01={props.datanascimento01}
    ocupacao01={props.ocupacao01}
    vinculoempregaticio01={props.vinculoempregaticio01}
    renda01={props.renda01}
    escolaridade01={props.escolaridade01}
    redeescolar01={props.redeescolar01}
    nomefamilia02={props.nomefamilia02}
    vinculofamiliar02={props.vinculofamiliar02}
    datanascimento02={props.datanascimento02}
    ocupacao02={props.ocupacao02}
    vinculoempregaticio02={props.vinculoempregaticio02}
    renda02={props.renda02}
    escolaridade02={props.escolaridade02}
    redeescolar02={props.redeescolar02}
    nomefamilia03={props.nomefamilia03}
    vinculofamiliar03={props.vinculofamiliar03}
    datanascimento03={props.datanascimento03}
    ocupacao03={props.ocupacao03}
    vinculoempregaticio03={props.vinculoempregaticio03}
    renda03={props.renda03}
    escolaridade03={props.escolaridade03}
    redeescolar03={props.redeescolar03}
    nomefamilia04={props.nomefamilia04}
    vinculofamiliar04={props.vinculofamiliar04}
    datanascimento04={props.datanascimento04}
    ocupacao04={props.ocupacao04}
    vinculoempregaticio04={props.vinculoempregaticio04}
    renda04={props.renda04}
    escolaridade04={props.escolaridade04}
    redeescolar04={props.redeescolar04}
    nomefamilia05={props.nomefamilia05}
    vinculofamiliar05={props.vinculofamiliar05}
    datanascimento05={props.datanascimento05}
    ocupacao05={props.ocupacao05}
    vinculoempregaticio05={props.vinculoempregaticio05}
    renda05={props.renda05}
    escolaridade05={props.escolaridade05}
    redeescolar05={props.redeescolar05}
    nomefamilia06={props.nomefamilia06}
    vinculofamiliar06={props.vinculofamiliar06}
    datanascimento06={props.datanascimento06}
    ocupacao06={props.ocupacao06}
    vinculoempregaticio06={props.vinculoempregaticio06}
    renda06={props.renda06}
    escolaridade06={props.escolaridade06}
    redeescolar06={props.redeescolar06}
    nomefamilia07={props.nomefamilia07}
    vinculofamiliar07={props.vinculofamiliar07}
    datanascimento07={props.datanascimento07}
    ocupacao07={props.ocupacao07}
    vinculoempregaticio07={props.vinculoempregaticio07}
    renda07={props.renda07}
    escolaridade07={props.escolaridade07}
    redeescolar07={props.redeescolar07}
    nomefamilia08={props.nomefamilia08}
    vinculofamiliar08={props.vinculofamiliar08}
    datanascimento08={props.datanascimento08}
    ocupacao08={props.ocupacao08}
    vinculoempregaticio08={props.vinculoempregaticio08}
    renda08={props.renda08}
    escolaridade08={props.escolaridade08}
    redeescolar08={props.redeescolar08}
    psf={props.psf}
    agentesaude={props.agentesaude}
    observacoes={props.observacoes}
    aluguel={props.aluguel}
    planoSaude={props.planoSaude} 
    alimentacao={props.alimentacao} 
    agua={props.agua} 
    luz={props.luz} 
    gas={props.gas} 
    medicacao={props.medicacao} 
    transporte={props.transporte} 
    outrasDespesas={props.outrasDespesas} 
    programahabitacional={props.programahabitacional} 
    programadoleite={props.programadoleite} 
    primeiropasso={props.primeiropasso} 
    aluguelsocial={props.aluguelsocial} 
    laudomedico={props.laudomedico} 
    vinculo={props.vinculo} 
    demandas={props.demandas} 
    encaminhamentos={props.encaminhamentos}




        listPessoaFisica={props.listPessoaFisica}
        setListPessoaFisica={props.setListPessoaFisica}
      />



{/* o que aparece na tela: */}
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">
          Nome: {props.nome} - {props.apelido} - {props.sexo}
        </h1>
        <p className="card-id">{props.id}</p>
        <p className="card-category">
          Responsável: {props.responsavel} - Data de inclusão: {props.datainclusao} - Data de nascimento: {props.datanascimento}
        </p>
        <h3 className="card-cost"></h3>
      </div>
    </>
  );
}
