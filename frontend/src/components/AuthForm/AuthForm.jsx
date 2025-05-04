import React from 'react';
import './AuthForm.css';

const AuthForm = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showConfirmPassword = false,
  onSubmit,
  buttonText
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="6"
        />
      </div>

      {showConfirmPassword && (
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirme sua senha</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
          />
        </div>
      )}

      <button type="submit" className="auth-button">
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;