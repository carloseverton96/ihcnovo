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

          {/* Inputs de CaracteristicaDomicilio */}
          <input
            type="text"
            name="tipoDomicilio"
            placeholder="Tipo de Domicílio"
            className="register-input"
            value={values.tipoDomicilio || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="numeroComodos"
            placeholder="Número de Cômodos"
            className="register-input"
            value={values.numeroComodos || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="materialPredominante"
            placeholder="Material Predominante"
            className="register-input"
            value={values.materialPredominante || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="abastecimentoAgua"
            placeholder="Abastecimento de Água"
            className="register-input"
            value={values.abastecimentoAgua || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="esgotamentoSanitario"
            placeholder="Esgotamento Sanitário"
            className="register-input"
            value={values.esgotamentoSanitario || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="energiaEletrica"
            placeholder="Energia Elétrica"
            className="register-input"
            value={values.energiaEletrica || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="destinoLixo"
            placeholder="Destino do Lixo"
            className="register-input"
            value={values.destinoLixo || ''}
            onChange={handleAddValues}
          />

          {/* Inputs de ComposicaoFamiliar */}
          <input
            type="text"
            name="nomeFamiliar"
            placeholder="Nome do Familiar"
            className="register-input"
            value={values.nomeFamiliar || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="parentesco"
            placeholder="Parentesco"
            className="register-input"
            value={values.parentesco || ''}
            onChange={handleAddValues}
          />
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            className="register-input"
            value={values.idade || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="escolaridade"
            placeholder="Escolaridade"
            className="register-input"
            value={values.escolaridade || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="ocupacao"
            placeholder="Ocupação"
            className="register-input"
            value={values.ocupacao || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="renda"
            placeholder="Renda"
            className="register-input"
            value={values.renda || ''}
            onChange={handleAddValues}
          />

          {/* Inputs de DespesaFamiliar */}
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
