import React, { useEffect, useState } from "react";
import Axios from "axios";
import CardPessoaFisica from "../cards/cardFormPessoaFisica";
import Header from "../header";

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
      const response = await Axios.post("http://localhost:3001/register/pessoa-fisica", {
        ...values,
      });

      if (response.status === 200) {
        // Cadastro realizado com sucesso
        // Buscar a lista atualizada de Pessoas Físicas
        const updatedListPessoaFisica = await fetchListPessoaFisica();
        setListPessoaFisica(updatedListPessoaFisica);

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

  // Função para buscar a lista de Pessoas Físicas
  const fetchListPessoaFisica = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/getCards/pessoa-fisica");
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

  // Buscar a lista inicial de Pessoas Físicas no useEffect
  useEffect(() => {
    fetchListPessoaFisica().then((data) => setListPessoaFisica(data));
  }, []);

  // Função para lidar com a mudança de valores nos campos do formulário
  const handleAddValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      
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

<label htmlFor="sexo">Sexo:</label>
        <select id="sexo" 
        name="sexo" 
        value={values.sexo} 
        onChange={handleAddValues}> 
        <option 
        value="">Selecione</option> <option 
        value="masculino">Masculino</option> <option value="feminino">Feminino</option> <option 
        value="outro">Outro</option> 
        </select>

        <input
          type="date"
          name="datanascimento"
          placeholder="Data de Nascimento"
          className="register-input"
          value={values.datanascimento || ""}
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
          value="Juazeiro do Norte"
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

<label htmlFor="bolsaFamilia">Possui Bolsa Família: </label>
        <select id="bolsafamilia" 
        name="bolsafamilia" 
        value={values.bolsafamilia} 
        onChange={handleAddValues}> 
        <option value="Sim">Sim</option> 
        <option value="nao">Não</option>
        <option value="outro">Outro</option> 
        </select>
      
        <input
          type="text"
          name="valorbolsafamilia"
          placeholder="Valor do Bolsa Família"
          className="register-input"
          value={values.valorbolsafamilia || ""}
          onChange={handleAddValues}
        />

        <label htmlFor="beneficiodeprestacaocontinuada">Benefício de prestação continuada:</label>
        <select id="beneficiodeprestacaocontinuada" 
        name="beneficiodeprestacaocontinuada" 
        value={values.beneficiodeprestacaocontinuada} 
        onChange={handleAddValues}> 
        <option value="Sim">Sim</option> 
        <option value="não">Não</option>
        <option value="outro">Outro</option> 
        </select>

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

<label htmlFor="datainclusao">Data de Inclusão: </label>
        <input
          type="date"
          name="datainclusao"
          placeholder="Data de Inclusão"
          className="register-input"
          value={values.datainclusao || ""}
          onChange={handleAddValues}
        />

<label htmlFor="datadesligamento">data de desligamento: </label>
        <input
          type="date"
          name="datadesligamento"
          placeholder="Data de desligamento"
          className="register-input"
          value={values.datadesligamento || ""}
          onChange={handleAddValues}
        />

<label htmlFor="usodeimagem">Declaração de ciência e autorização de imagem: </label>
        <select id="usodeimagem" 
        name="usodeimagem" 
        value={values.usodeimagem} 
        onChange={handleAddValues}> 
        <option value="Sim">Sim</option> 
        <option value="não">Não</option>
        <option value="outro">Outro</option> 
        </select>

serviços:
          {/* Outros inputs do formulário... */}







          <button onClick={handleRegisterPessoaFisica} className="register-button">
            Cadastrar
          </button>

          <br></br>
          <br></br>
          </div>

      {typeof listPessoaFisica !== "undefined" && listPessoaFisica.sort((a, b) => b.id_pessoa - a.id_pessoa).map((value) => {
        return (
      // precisa ser atualizado conforme os inputs:

        <CardPessoaFisica
          key={value.id_pessoa}
          listPessoaFisica={listPessoaFisica}
          setListPessoaFisica={setListPessoaFisica}
          id_pessoa={value.id_pessoa}
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
          municipio={value.municipio}
          complemento={value.complemento}
          pontodereferencia={value.pontodereferencia}
          contato1={value.contato1}
          contato2={value.contato2}
          anocadastro={value.anocadastro}
          pai={value.pai}
          mae={value.mae}
          responsavel={value.responsavel}
          bolsaFamilia={value.bolsaFamilia}
          valorbolsafamilia={value.valorbolsafamilia}
          beneficiodeprestacaocontinuada={value.beneficiodeprestacaocontinuada}
          nis={value.nis}
          cid10={value.cid10}
          datainclusao={value.datainclusao}
          datadesligamento={value.datadesligamento}
          usodeimagem={value.usodeimagem}
          servicos={value.servicos}
        ></CardPessoaFisica>
        );
      })}


</div>
    </>
  );
}
