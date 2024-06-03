import React, { useState } from 'react';
import './LoginButton.css';

const LoginButton = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form has been successfully submitted');
    setShowLogin(false);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div className="login-container">
      <button className="open-login-btn" onClick={handleLoginClick}>
        Login
      </button>

      {showLogin && (
        <div className="overlay">
          <div className="login-card">
            <button className="close-btn" onClick={handleClose}>×</button>
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
