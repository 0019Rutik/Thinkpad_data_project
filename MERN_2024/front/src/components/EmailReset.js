import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmailReset = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your password reset logic here
    // e.g., Send an email with a reset link using a backend API

    alert('Password reset link sent!'); // Placeholder logic for now
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: '400px' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Reset Password</h5>
          <p className="card-text text-center mb-4">Did you forget your password?</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-light" style={{ backgroundColor: '#aa17ee' }}>Reset Password</button>
            </div>
          </form>
          <p className="card-text text-center">Put your email to reset password</p>
          <p className="card-text text-center">Remembered your password? <a href="/">Back to Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default EmailReset;