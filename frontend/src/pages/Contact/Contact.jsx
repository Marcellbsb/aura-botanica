import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      
      
      <main className="contact-main">
        <section className="contact-hero">
          <div className="hero-content">
            <h1>Fale Conosco</h1>
            <p>Estamos aqui para ajudar e responder qualquer dúvida sobre suas plantas.</p>
          </div>
        </section>

        <div className="contact-container">
          <section className="contact-info">
            <h2>Nossas Informações</h2>
            
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h3>Endereço</h3>
                <p>Rua das Flores, 123<br />Jardim Botânico<br />São Paulo - SP</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhone className="info-icon" />
              <div>
                <h3>Telefone</h3>
                <p>(11) 98765-4321</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>contato@aurabotanica.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaClock className="info-icon" />
              <div>
                <h3>Horário de Atendimento</h3>
                <p>Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 14h</p>
              </div>
            </div>
          </section>

          <section className="contact-form-section">
            <h2>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Enviar Mensagem</button>
            </form>
          </section>
        </div>

        <section className="contact-map">
          <iframe
            title="Localização Aura Botânica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658447536!3d-23.565734367638194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1623866429649!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>

      
    </div>
  );
};

export default Contact;