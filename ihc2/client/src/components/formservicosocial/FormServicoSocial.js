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
              
              <th>
                <input
                  type="text"
                  name="nomefamilia05"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar05 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar05"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar05 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento05"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento05 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao05"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao05 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio05"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio05 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda05"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda05 || ''}
                  onChange={handleAddValues}
                />
              </th>

              <th>
                <input
                  type="text"
                  name="escolaridade05"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade05 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar06"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar06 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia06"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar06 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar06"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar06 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento06"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento06 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao06"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao06 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio06"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio06 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda06"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda06 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade06"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade06 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar06"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar06 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia07"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar07 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar07"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar07 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento07"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento07 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao07"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao07 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio07"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio07 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda07"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda07 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade07"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade07 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar07"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar07 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  name="nomefamilia08"
                  placeholder="Nome do Familiar"
                  className="register-input"
                  value={values.nomefamiliar08 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculofamiliar08"
                  placeholder="Vinculo Familiar"
                  className="register-input"
                  value={values.vinculofamiliar08 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="number"
                  name="datanascimento08"
                  placeholder="data nascimento"
                  className="register-input"
                  value={values.datanascimento08 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="ocupacao08"
                  placeholder="Ocupação"
                  className="register-input"
                  value={values.ocupacao08 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="vinculoempregaticio08"
                  placeholder="Vinculo Empregaticio"
                  className="register-input"
                  value={values.vinculoempregaticio08 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="renda08"
                  placeholder="Renda R$"
                  className="register-input"
                  value={values.renda08 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="escolaridade08"
                  placeholder="Escolaridade"
                  className="register-input"
                  value={values.escolaridade08 || ''}
                  onChange={handleAddValues}
                />
              </th>
              <th>
                <input
                  type="text"
                  name="redeescolar08"
                  placeholder="Rede Escolar"
                  className="register-input"
                  value={values.redeescolar08 || ''}
                  onChange={handleAddValues}
                />
              </th>
            </tr>
          </table>
          
          
          <input
  type="text"
  name="psf"
  placeholder="psf"
  className="register-input"
  value={values.psf}
  onChange={handleAddValues}
/>
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


          <br /> Inputs de DespesaFamiliar <br />

          
        <label htmlFor="aluguel">Aluguel (R$):</label>
        <input
          type="number"
          id="aluguel"
          name="aluguel"
          value={values.aluguel}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="planoSaude">Plano de Saúde (R$):</label>
        <input
          type="number"
          id="planoSaude"
          name="planoSaude"
          value={values.planoSaude}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="alimentacao">Alimentação (R$):</label>
        <input
          type="number"
          id="alimentacao"
          name="alimentacao"
          value={values.alimentacao}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="agua">Água (R$):</label>
        <input
          type="number"
          id="agua"
          name="agua"
          value={values.agua}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="luz">Luz (R$):</label>
        <input
          type="number"
          id="luz"
          name="luz"
          value={values.luz}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="gas">Gás (R$):</label>
        <input
          type="number"
          id="gas"
          name="gas"
          value={values.gas}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="medicacao">Medicação (R$):</label>
        <input
          type="number"
          id="medicacao"
          name="medicacao"
          value={values.medicacao}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="transporte">Transporte (R$):</label>
        <input
          type="number"
          id="transporte"
          name="transporte"
          value={values.transporte}
          onChange={handleAddValues}
        />
      
    
        <label htmlFor="outrasDespesas">Outras Despesas (R$):</label>
        <input
          type="number"
          id="outrasDespesas"
          name="outrasDespesas"
          value={values.outrasDespesas}
          onChange={handleAddValues}
        />
      

      <br />Participação em programas do SAS<br />

          <input
            type="text"
            name="programahabitacional"
            placeholder="Programa Habitacional"
            className="register-input"
            value={values.programahabitacional || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="programadoleite"
            placeholder="Programa do Leite"
            className="register-input"
            value={values.programadoleite || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="aluguelsocial"
            placeholder="Aluguel Social"
            className="register-input"
            value={values.aluguelsocial || ''}
            onChange={handleAddValues}
          />
          <input
            type="text"
            name="primeiropasso"
            placeholder="Primeiro Passo"
            className="register-input"
            value={values.primeiropasso || ''}
            onChange={handleAddValues}
          />

<input
            type="text"
            name="laudomedico"
            placeholder="Laudo Médico"
            className="register-input"
            value={values.laudomedico || ''}
            onChange={handleAddValues}
          />
          
          <input
            type="text"
            name="vinculo"
            placeholder="vinculo (IHC/SESAU)"
            className="register-input"
            value={values.vinculo || ''}
            onChange={handleAddValues}
          />

<input
            type="text"
            name="demandas"
            placeholder="Demandas"
            className="register-input"
            value={values.demandas || ''}
            onChange={handleAddValues}
          />

<input
            type="text"
            name="encaminhamentos"
            placeholder="Encaminhamentos"
            className="register-input"
            value={values.encaminhamentos || ''}
            onChange={handleAddValues}
          />




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
