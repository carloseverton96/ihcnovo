

import React from 'react';
import { Link } from 'react-router-dom';
import FormPessoaFisica from '../formpessoafisica/FormPessoaFisica';
import Login from '../login/Login';



const Navigation = () => {
  return (
        <div className="app-navigation">
        <div className="container">
          <nav className="navigation">
            <Link to="/" className="navbar-brand"></Link>
            <ul>
              <li className="list-item">
                <Link to="/home" className="nav-link">I  H  C</Link>
              </li>
             

              <li className="list-item">  
                <Link to="/pessoa-fisica" className="nav-link">Pessoa Física</Link>
              </li>

              <li className="list-item">  
                <Link to="/servico-social" className="nav-link">Serviço Social</Link>
              </li>
          </ul>
        </nav>
      </div>
    </div>

  );
};

export default Navigation;



