import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CardFormPessoaFisica from '../cards/CardFormPessoaFisica';

const PessoaFisicaPage = () => {
  const [listPessoaFisica, setListPessoaFisica] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

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

  useEffect(() => {
    fetchListPessoaFisica().then((data) => {
      setListPessoaFisica(data);
      setFilteredResults(data);
    });
  }, []);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    filterResults(value);
  };

  const filterResults = (value) => {
    const lowercasedValue = value.toLowerCase();
    const results = listPessoaFisica.filter(item =>
      item.nome.toLowerCase().includes(lowercasedValue) ||
      item.id.toString().includes(lowercasedValue) ||
      item.cpf.includes(lowercasedValue)
    );
    setFilteredResults(results);
  };

  return (
    <div className="container cardBoxForm">
      <input
        type="text"
        placeholder="Filtrar por Nome, ID ou CPF"
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredResults.length > 0 ? (
        filteredResults.sort((a, b) => b.id - a.id).map((value) => (
          <CardFormPessoaFisica
            key={value.id}
            listPessoaFisica={filteredResults}
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
            bolsafamilia={value.bolsafamilia}
            beneficiodeprestacaocontinuada={value.beneficiodeprestacaocontinuada}
            nis={value.nis}
            cid10={value.cid10}
            datainclusao={value.datainclusao}
            datadesligamento={value.datadesligamento}
            usodeimagem={value.usodeimagem}
          />
        ))
      ) : (
        <p>Nenhum resultado encontrado</p>
      )}
    </div>
  );
};

export default PessoaFisicaPage;
