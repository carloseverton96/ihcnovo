import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navigation from "../routes/Navigation";



export default function FormServicoSocial() {
  
    const [values, setValues] = useState({});
    const [listServicoSocial, setListServicoSocial] = useState([]);
  
    // Função para validação de formulário
    const validateForm = () => {
      // Implementar lógica de validação para campos obrigatórios e outros requisitos
      // Retornar `true` se o formulário estiver válido, `false` caso contrário
      return true; // Substitua por sua lógica de validação
    };
  
    // Função para lidar com o envio do formulário
    const handleRegisterServicoSocial = async () => {
      if (!validateForm()) return; // Validar antes de enviar
  
      try {
        const response = await Axios.post("http://localhost:3002/register/servico-social", {
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
          // Buscar a lista atualizada de Servico Social
          const updatedList = await fetchListServicoSocial();
          setListServicoSocial(updatedList);
          
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
  
    // Função para buscar a lista de Servico Social
    const fetchListServicoSocial = async () => {
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
  
    // Buscar a lista inicial de Servico Social no useEffect
    useEffect(() => {
      fetchListServicoSocial().then((data) => setListServicoSocial(data));
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
        <h1 className="register-title">Servico Social</h1>
        {/* <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="register-input"
            value={values.nome || ""}
            onChange={handleAddValues}
          /> */}


     
        <button onClick={handleRegisterServicoSocial} className="register-button">
          Cadastrar
        </button>
      </div>

      {/* {typeof listServicoSocial !== "undefined" &&
       listServicoSocial.sort((a, b) => b.id - a.id).map((value) => {
        return (
        <CardFormServicoSocial
          key={value.id}
          listServicoSocial={listServicoSocial}
          setListServicoSocial={setListServicoSocial}
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
        />   */}



        
        {/* );
    })} */}
    </div>
  );
}
