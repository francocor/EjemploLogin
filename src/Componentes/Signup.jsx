import React, { useState } from 'react';
import '../css/Signup.css';

const Signup = ({ handlePageChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica para crear un nuevo usuario
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Restablecer campos del formulario
    setEmail('');
    setPassword('');

    // Cambiar a la página de inicio de sesión
    handlePageChange('login');
  };

  const handleLoginClick = () => {
    handlePageChange('login');
  };

  return (
    <div className="signup-container">
      <h2>Crear usuario nuevo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <button type="submit">Crear usuario</button>
      </form>
      <div className="options">
        <span>¿Ya tienes una cuenta?</span>
        <button onClick={handleLoginClick}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Signup;


