import React, { useState } from 'react';
import Login from './Componentes/Login';
import Signup from './Componentes/Signup';
import ForgotPassword from './Componentes/ForgotPassword';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login handlePageChange={handlePageChange} />;
      case 'signup':
        return <Signup handlePageChange={handlePageChange} />;
      case 'forgotPassword':
        return <ForgotPassword handlePageChange={handlePageChange} />;
      default:
        return <Login handlePageChange={handlePageChange} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;
