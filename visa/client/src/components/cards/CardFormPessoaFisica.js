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
        nome= {props.nome}
        apelido= {props.apelido}
        sexo= {props.sexo}
        datanascimento= {props.datanascimento}
        rg= {props.rg}
        ssp= {props.ssp}
        cpf= {props.cpf}
        cartaosus= {props.cartaosus}
        endereco= {props.endereco}
        numero= {props.numero}
        bairro= {props.bairro}
        complemento= {props.complemento}
        municipio= {props.municipio}
        pontodereferencia= {props.pontodereferencia}
        contato1= {props.contato1}
        contato2= {props.contato2}
        pai= {props.pai}
        mae= {props.mae}
        responsavel= {props.responsavel}
        bolsafamilia= {props.bolsafamilia}
        beneficiodeprestacaocontinuada= {props.beneficiodeprestacaocontinuada}
        nis= {props.nis}
        cid10= {props.cid10}
        datainclusao= {props.datainclusao}
        datadesligamento= {props.datadesligamento}
        usoimagem= {props.usoimagem}
        listPessoaFisica={props.listPessoaFisica}
        setListPessoaFisica={props.setListPessoaFisica}
        id={props.id_pessoa}
      />

      {/* ESTA PARTE DE BAIXO É O CARD QUE APARECE AS INFORMAÇÕES - ADICIONEI O PRINCIPAL */}

      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">Nome:{props.nome} - {props.apelido} - {props.sexo}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-cartegory"> Responsável:{props.responsavel} - Data de inclusão:{props.datainclusao} - data de nascimento:{props.datanascimento} </p>
        <h3 className="card-cost"> </h3>
      </div>
    </>
  );
}
