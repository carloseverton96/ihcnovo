import React, { useEffect, useState } from "react";
import Axios from "axios";

import CardFormServicoSocial from "../cards/CardFormServicoSocial";

export default function ServicoSocial() {
  const [values, setValues] = useState({});
  const [listServicoSocial, setListServicoSocial] = useState([]);

  const validateForm = () => {
    return true;
  };

  const handleRegisterServicoSocial = async () => {
    if (!validateForm()) return;

    try {
      const response = await Axios.post("http://localhost:3001/register/pessoa-fisica", values);

      if (response.status === 200) {
        const updatedListServicoSocial = await fetchListServicoSocial();
        setListServicoSocial(updatedListServicoSocial);
        setValues({});
      } else {
        console.error("Erro no cadastro:", response);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const fetchListServicoSocial = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/getCards/servico-social");
      if (response.status === 200) {
        return response.data;
      } else {
        console.error("Erro ao buscar lista:", response);
        return [];
      }
    } catch (error) {
      console.error("Erro:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchListServicoSocial().then((data) => setListServicoSocial(data));
  }, []);

  const handleAddValues = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      
      <div className="container cardBoxForm">
        <div className="register-container">
          <h1 className="register-title">Serviço social</h1>

          <br />Caracteristica do Domicilio<br />

          <input
            type="text"
            name="tipodomicilio"
            placeholder="Tipo de Domicílio"
            className="register-input"
            value={values.tipodomicilio || ''}
            onChange={handleAddValues}
          />
         
          <input
            type="text"
            name="numerocomodos"
            placeholder="Número de Cômodos"
            className="register-input"
            value={values.numerocomodos || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="tipodeconstrucao"
            placeholder="Tipo de Construcao"
            className="register-input"
            value={values.tipodeconstrucao || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="abastecimentoagua"
            placeholder="Abastecimento de Água"
            className="register-input"
            value={values.abastecimentoagua || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="tratamentodeagua"
            placeholder="Tratamento de Água"
            className="register-input"
            value={values.tratamentodeagua || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="energiaeletrica"
            placeholder="Energia Elétrica"
            className="register-input"
            value={values.energiaeletrica || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="escoamentosanitario"
            placeholder="Escoamento Sanitario"
            className="register-input"
            value={values.escoamentosanitario || ''}
            onChange={handleAddValues}
          />

          <input
            type="text"
            name="destinolixo"
            placeholder="Destino do Lixo"
            className="register-input"
            value={values.destinolixo || ''}
            onChange={handleAddValues}
          />

          <br /> Inputs de ComposicaoFamiliar <br />
          
          <table>
          <thead>
    <tr>
      <th>Nome</th>
      <th>Vínculo Familiar</th>
      <th>Data de Nascimento</th>
      <th>Ocupação</th>
      <th>Vínculo Empregatício</th>
      <th>Renda</th>
      <th>Escolaridade</th>
      <th>Rede Escolar</th>
    </tr>
  </thead>
            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia01"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar01"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento01"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao01"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio01"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda01"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade01"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar01"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>
            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia02"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar02 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar02"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar02 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento01"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento02 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao02"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao02 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio02"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio02 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda02"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda02 || ''}
                  onChange={handleAddValues}
                />
              </th>

              <th>
                <input
                  type="text"
                  name="escolaridade02"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade02 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar02"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar02 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia03"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar03 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar03"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar03 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento03"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento03 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao03"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao03 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio03"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio03 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda03"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda03 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade03"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade03 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar03"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar03 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia04"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar04 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar04"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar04 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento04"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento04 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao04"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao04 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio04"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio04 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda04"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda04 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade04"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade04 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar04"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar04 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              continuar a partir daqui.
              <th>
                <input
                  type="text"
                  name="nomefamilia01"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar01"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento01"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao01"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio01"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda01"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade01"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar01"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia01"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar01"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento01"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao01"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio01"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda01"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade01"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar01"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia01"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar01"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento01"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao01"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio01"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda01"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade01"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar01"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia01"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar01"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento01"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao01"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio01"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda01"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade01"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade01 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar01"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar01 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>
          </table>
          

          <br /> Inputs de DespesaFamiliar <br />
          <input
            type="text"
            name="tipoDespesa"
            placeholder="Tipo de Despesa"
            className="register-input"
            value={values.tipoDespesa || ''}
            onChange={handleAddValues}
          />
          <input
            type="number"
            name="valorDespesa"
            placeholder="Valor da Despesa"
            className="register-input"
            value={values.valorDespesa || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="frequenciaDespesa"
            placeholder="Frequência da Despesa"
            className="register-input"
            value={values.frequenciaDespesa || ''}
            onChange={handleAddValues}
          />

          {/* Inputs de ParticipacaoProgramasSAS */}
          <input
            type="text"
            name="programa"
            placeholder="Programa"
            className="register-input"
            value={values.programa || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="beneficios"
            placeholder="Benefícios"
            className="register-input"
            value={values.beneficios || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="dataInicio"
            placeholder="Data de Início"
            className="register-input"
            value={values.dataInicio || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="dataFim"
            placeholder="Data de Fim"
            className="register-input"
            value={values.dataFim || ''}
            onChange={handleAddValues}
          />

verificar posição:
<input
  type="text"
  name="agentesaude"
  placeholder=" Agente de Saúde"
  className="register-input"
  value={values.agentesaude}
  onChange={handleAddValues}
/>
<textarea
  name="observacoes"
  className="register-input"
  placeholder="Observações"
  value={values.observacoes}
  onChange={handleAddValues}
></textarea>

          <button onClick={handleRegisterServicoSocial} className="register-button">
            Cadastrar
          </button>
        </div>

        {typeof listServicoSocial !== "undefined" && listServicoSocial.sort((a, b) => b.id - a.id).map((value) => {
          return (
            <CardFormServicoSocial
              key={value.id}
              listServicoSocial={listServicoSocial}
              setListServicoSocial={setListServicoSocial}
              {...value}
            />
          );
        })}
      </div>
    </>
  );
}
