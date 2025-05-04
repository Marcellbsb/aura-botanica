import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src='/images/logo.png' alt="Aura Botânica" className="logo" />
        </Link>
        
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Plantas</Link></li>
            <li><Link to="/products">Acessórios</Link></li>
            <li>
  <Link 
    to="/#about-section" 
    onClick={(e) => {
      // Se já estiver na home, previne o reload
      if (window.location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById('about-section');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    Sobre
  </Link>
</li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </nav>

        <div className="user-actions">
          <Link to="/login" className="login-btn">Entrar</Link>
          <Link to="/register" className="register-btn">Cadastre-se</Link>
          <button className="cart-btn">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;