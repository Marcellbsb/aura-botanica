import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AuthForm from '../../components/AuthForm/AuthForm';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aqui
    console.log('Register submitted:', { name, email, password, confirmPassword });
  };

  return (
    <div className="register-page">
      
      
      <main className="register-main">
        <div className="register-container">
          <div className="register-image">
            <img src='/images/img-reg.png' alt="Planta decorativa" />
          </div>
          
          <div className="register-form">
            <h2>Junte-se à Aura Botânica</h2>
            <p>Crie sua conta e comece sua jornada verde</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <AuthForm 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                showConfirmPassword={true}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                buttonText="Cadastrar"
              />
            </form>
            
            <div className="register-links">
              <p>Já tem uma conta? <Link to="/login">Faça login</Link></p>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default Register;