import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navigation from "../routes/Navigation";
import CardFormPessoaFisica from "../cards/CardFormPessoaFisica";

export default function FormPessoaFisica() {
  
    const [values, setValues] = useState({});
    const [listPessoaFisica, setListPessoaFisica] = useState([]);
  
    // Função para validação de formulário
    const validateForm = () => {
      // Implementar lógica de validação para campos obrigatórios e outros requisitos
      // Retornar `true` se o formulário estiver válido, `false` caso contrário
      return true; // Substitua por sua lógica de validação
    };
  
    // Função para lidar com o envio do formulário
    const handleRegisterPessoaFisica = async () => {
      if (!validateForm()) return; // Validar antes de enviar
  
      try {
        const response = await Axios.post("http://localhost:3002/register/pessoa-fisica", {
          nome: values.nome,
          apelido: values.apelido,
          sexo: values.sexo,
          datanascimento: values.datanascimento,
          rg: values.rg,
          ssp: values.ssp,
          cpf: values.cpf,
          cartaosus: values.cartaosus,
          endereco: values.endereco,
          numero: values.numero,
          bairro: values.bairro,
          complemento: values.complemento,
          municipio: values.municipio,
          pontodereferencia: values.pontodereferencia,
          contato1: values.contato1,
          contato2: values.contato2,
          pai: values.pai,
          mae: values.mae,
          responsavel: values.responsavel,
          bolsafamilia: values.bolsafamilia,
          beneficiodeprestacaocontinuada: values.beneficiodeprestacaocontinuada,
          nis: values.nis,
          cid10: values.cid10,
          datainclusao: values.datainclusao,
          datadesligamento: values.datadesligamento,
          usodeimagem: values.usodeimagem,
          });
  
        if (response.status === 200) {
          // Cadastro realizado com sucesso
          // Buscar a lista atualizada de Pessoas Jurídicas
          const updatedList = await fetchListPessoaFisica();
          setListPessoaFisica(updatedList);
          
          // Limpar o formulário
          setValues({});
        } else {
          // Exibir mensagem de erro (implementar)
          console.error("Erro no cadastro:", response);
        }
      } catch (error) {
        console.error("Erro:", error);
      }
    };
  
    // Função para buscar a lista de Pessoas Jurídicas
    const fetchListPessoaFisica = async () => {
      try {
        const response = await Axios.get("http://localhost:3002/getCards");
        if (response.status === 200) {
          return response.data;
        } else {
          console.error("Erro ao buscar lista:", response);
          return []; // Retornar lista vazia em caso de erro
        }
      } catch (error) {
        console.error("Erro:", error);
        return []; // Retornar lista vazia em caso de erro
      }
    };
  
    // Buscar a lista inicial de Pessoas Jurídicas no useEffect
    useEffect(() => {
      fetchListPessoaFisica().then((data) => setListPessoaFisica(data));
    }, []);
  
    // Função para lidar com a mudança de valores nos campos do formulário
    const handleAddValues = (event) => {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });
    };

  return (
    <Navigation />,
    <div className="container cardBoxForm">
      
      <div className="register-container">
        <h1 className="register-title">Cadastro de Pessoa Física</h1>
        <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="register-input"
            value={values.nome || ""}
            onChange={handleAddValues}
          />

          <input
            type="text"
            name="apelido"
            placeholder="Apelido ou nome social"
            className="register-input"
            value={values.apelido || ""}
            onChange={handleAddValues}
          />
 
 sexo(M/F/O)
          <input
            type="text"
            name="sexo"
            placeholder="sexo"
            className="register-input"
            value={values.sexo || ""}
            onChange={handleAddValues}
          />


      <input
        type="text"
        name="datanascimento"
        placeholder="Data de Nascimento"
        className="register-input"
        value={values.datanascimento}
        onChange={handleAddValues}
      />
        
        <input
          type="text"
          name="rg"
          placeholder="RG"
          className="register-input"
          value={values.rg || ""}
          onChange={handleAddValues}
        />

        <input
          type="text"
          name="ssp"
          placeholder="SSP"
          className="register-input"
          value={values.ssp || ""}
          onChange={handleAddValues}
        />

        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          className="register-input"
          value={values.cpf || ""}
          onChange={handleAddValues}
        />
        
        <input
          type="text"
          name="cartaosus"
          placeholder="Cartão SUS"
          className="register-input"
          value={values.cartaosus || ""}
          onChange={handleAddValues}
        />

        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          className="register-input"
          value={values.endereco || ""}
          onChange={handleAddValues}
        />
        
        <input
          type="number"
          name="numero"
          placeholder="Nº"
          className="register-input"
          value={values.numero || ""}
          onChange={handleAddValues}
        />

<input
          type="text"
          name="bairro"
          placeholder="Bairro"
          className="register-input"
          value={values.bairro || ""}
          onChange={handleAddValues}
        />
        
        <input
          type="text"
          name="complemento"
          placeholder="Complemento"
          className="register-input"
          value={values.complemento || ""}
          onChange={handleAddValues}
        />
        
        <input
          type="text"
          name="municipio"
          placeholder="Município"
          className="register-input"
          value={values.municipio || ""}
          onChange={handleAddValues}
        />

        <input
          type="text"
          name="pontodereferencia"
          placeholder="Ponto de referência"
          className="register-input"
          value={values.pontodereferencia || ""}
          onChange={handleAddValues}
        />

        <input
          type="number"
          name="contato1"
          placeholder="1º Contato"
          className="register-input"
          value={values.contato1 || ""}
          onChange={handleAddValues}
        />
        
        <input
          type="number"
          name="contato2"
          placeholder="2º Contato"
          className="register-input"
          value={values.contato2 || ""}
          onChange={handleAddValues}
        />

        <input
          type="text"
          name="pai"
          placeholder="Nome do pai"
          className="register-input"
          value={values.pai || ""}
          onChange={handleAddValues}
        />

        <input
          type="text"
          name="mae"
          placeholder="Nome da mãe"
          className="register-input"
          value={values.mae || ""}
          onChange={handleAddValues}
        />

        <input
          type="text"
          name="responsavel"
          placeholder="Responsável"
          className="register-input"
          value={values.responsavel || ""}
          onChange={handleAddValues}
        />

Possui Bolsa Família:
<input
          type="text"
          name="bolsafamilia"
          placeholder="Bolsa familia"
          className="register-input"
          value={values.bolsafamilia || ""}
          onChange={handleAddValues}
        />
        
      
        <input
          type="text"
          name="valorbolsafamilia"
          placeholder="Valor do Bolsa Família"
          className="register-input"
          value={values.valorbolsafamilia || ""}
          onChange={handleAddValues}
        />

        Benefício de prestação continuada:
        <input
        type="text"  
        name="beneficiodeprestacaocontinuada" 
        placeholder="BPC"
        className="register-input"
        value={values.beneficiodeprestacaocontinuada  || ""} 
        onChange={handleAddValues}> 
         
        </input>
 
        <input
          type="text"
          name="nis"
          placeholder="nº do NIS"
          className="register-input"
          value={values.nis || ""}
          onChange={handleAddValues}
        />

        <input
          type="number"
          name="cid10"
          placeholder="CID 10"
          className="register-input"
          value={values.cid10 || ""}
          onChange={handleAddValues}
        />

Data de Inclusão:
        <input
          type="text"
          name="datainclusao"
          placeholder="Data de Inclusão"
          className="register-input"
          value={values.datainclusao}
          onChange={handleAddValues}
        />

data de desligamento:
        <input
          type="text"
          name="datadesligamento"
          placeholder="Data de desligamento"
          className="register-input"
          value={values.datadesligamento}
          onChange={handleAddValues}
        />

Declaração de ciência e autorização de imagem: 
<input
          type="text"
          name="usodeimagem"
          placeholder="Uso de imagem"
          className="register-input"
          value={values.usodeimagem || ""}
          onChange={handleAddValues}
        />

serviços:
     
        <button onClick={handleRegisterPessoaFisica} className="register-button">
          Cadastrar
        </button>
      </div>

      {typeof listPessoaFisica !== "undefined" &&
       listPessoaFisica.sort((a, b) => b.id - a.id).map((value) => {
        return (
        <CardFormPessoaFisica
          key={value.id}
          listPessoaFisica={listPessoaFisica}
          setListPessoaFisica={setListPessoaFisica}
          id={value.id}
          nome={value.nome}
          apelido={value.apelido}
          sexo={value.sexo}
          datanascimento={value.datanascimento}
          rg={value.rg}
          ssp={value.ssp}
          cpf={value.cpf}
          cartaosus={value.cartaosus}
          endereco={value.endereco}
          numero={value.numero}
          bairro={value.bairro}
          complemento={value.complemento}
          municipio={value.municipio}
          pontodereferencia={value.pontodereferencia}
          contato1={value.contato1}
          contato2={value.contato2}
          pai={value.pai}
          mae={value.mae}
          responsavel={value.responsavel}
          bolsafamilia= {value.bolsafamilia}
          beneficiodeprestacaocontinuada={value.beneficiodeprestacaocontinuada}
          nis={value.nis}
          cid10={value.cid10}
          datainclusao={value.datainclusao}
          datadesligamento={value.datadesligamento}
          usoimagem={value.usoimagem}
          



        ></CardFormPessoaFisica>
        );
    })}
    </div>
  );
}
