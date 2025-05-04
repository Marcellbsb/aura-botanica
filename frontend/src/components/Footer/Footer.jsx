import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLeaf, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-container">
            <FaLeaf className="leaf-icon" />
            <h3>Aura Botânica</h3>
          </div>
          <p className="footer-description">Transformando espaços com a beleza da natureza desde 2023.</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-links-container">
          <div className="footer-links-section">
            <h3 className="footer-title">Navegação</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Plantas</a></li>
              <li><a href="/products">Acessórios</a></li>
              <li><a href="/about">Sobre Nós</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-contact">
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:contato@aurabotanica.com">contato@aurabotanica.com</a>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+5511987654321">(11) 98765-4321</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aura Botânica. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;