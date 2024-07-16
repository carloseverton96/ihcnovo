import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/Navigation';
import Login from './components/login/Login';
import './styles.css';
import FormPessoaFisica from './components/formpessoafisica/FormPessoaFisica';


const App = () => {
  return (
    
    <Router>
      <Navigation />
      
      <Routes>
        <Route path='/' element={ <Login/> } />
        
        <Route path="/pessoa-fisica" element={ <FormPessoaFisica /> } />
        {/* Adicione outras rotas conforme necessário */}
        
      </Routes>
    </Router>
  );
};

export default App;
