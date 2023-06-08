import React, { useState } from 'react';
import '../css/Login.css';

const Login = ({ handlePageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica de autenticación y manejo de errores
    if (email === 'usuario@example.com' && password === 'contraseña') {
      // Autenticación exitosa
      setError('');
      console.log('Inicio de sesión exitoso');
    } else {
      // Autenticación fallida
      setError('Credenciales inválidas');
    }

    // Restablecer campos del formulario
    setEmail('');
    setPassword('');
  };

  const handleSignupClick = () => {
    handlePageChange('signup');
  };

  const handleForgotPasswordClick = () => {
    handlePageChange('forgotPassword');
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <div className="options">
        <span>¿No tienes una cuenta?</span>
        <button onClick={handleSignupClick}>Crear usuario</button>
        <span>¿Olvidaste tu contraseña?</span>
        <button onClick={handleForgotPasswordClick}>Recuperar contraseña</button>
      </div>
    </div>
  );
};

export default Login;
