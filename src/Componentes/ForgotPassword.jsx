import React, { useState } from 'react';
import '../css/ForgotPassword.css';

const ForgotPassword = ({ handlePageChange }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica para recuperar la contraseña
    console.log('Email:', email);

    // Restablecer campos del formulario
    setEmail('');

    // Cambiar a la página de inicio de sesión
    handlePageChange('login');
  };

  const handleLoginClick = () => {
    handlePageChange('login');
  };

  return (
    <div className="forgot-password-container">
      <h2>Recuperar contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <button type="submit">Recuperar contraseña</button>
      </form>
      <div className="options">
        <span>¿Recuerdas tu contraseña?</span>
        <button onClick={handleLoginClick}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
