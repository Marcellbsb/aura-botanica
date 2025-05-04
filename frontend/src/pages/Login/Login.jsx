import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login aqui
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-page">
    
      
      <main className="login-main">
        <div className="login-container">
          <div className="login-image">
            <img src= '/images/img-lg.jpg' alt="Planta decorativa" />
           
          </div>
          
          <div className="login-form">
            <h2>Bem-vindo de volta à Aura Botânica</h2>
            <p>Entre na sua conta para continuar sua jornada verde</p>
            
            <AuthForm 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onSubmit={handleSubmit}
              buttonText="Entrar"
            />
            
            <div className="login-links">
              <p>Ainda não tem uma conta? <Link to="/register">Cadastre-se</Link></p>
              <p><Link to="/forgot-password">Esqueceu sua senha?</Link></p>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default Login;