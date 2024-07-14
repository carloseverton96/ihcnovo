import React from "react";
import "./card.css";
import FormDialogPessoaFisica from "../dialog/dialogFormPessoaFisica";


export default function CardPessoaFisica(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialogPessoaFisica
        open={open}
        setOpen={setOpen}
        nome={props.nome}
        apelido={props.apelido}
        sexo={props.sexo} 
        matricula={props.matricula}
        email={props.email} 
        cpf={props.cpf} 
        conselhodeclasse={props.conselhodeclasse} 
        numeroconselhodeclasse={props.numeroconselhodeclasse}
        especialidade={props.especialidade} 
        endereco={props.endereco}
        numero={props.numero}
        bairro={props.bairro}
        complemento={props.complemento}
        municipio={props.municipio}
        contato3={props.contato3}
        contato4={props.contato4}
        anocadastro={props.anocadastro}
        listPessoaFisica={props.listPessoaFisica}  
        setListPessoaFisica={props.setListPessoaFisica}
        id={props.id_pessoa}
      />

      {/* ESTA PARTE DE BAIXO É O CARD QUE APARECE AS INFORMAÇÕES - ADICIONEI O PRINCIPAL */}

      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">nome:{props.nome} - Apelido:{props.apelido} - Conselho:{props.sexo} </h1>
        <p className="card-id">{props.id_pessoa}</p>
        <p className="card-cartegory"> Nº Conselho:{props.numeroconselhodeclasse} - Endereço:{props.endereco},{props.numero}, Bairro:{props.bairro} </p>
        <h3 className="card-cost"> </h3>
      </div>
    </>
  );
}
