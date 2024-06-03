import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom'; // Import useHistory hook
import { useNavigate } from 'react-router-dom';

import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory(); // Access history using useHistory hook
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/home');
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUsername('');
        setPassword('');
        // Use history object to redirect to home page upon successful login
        // history.push('/home');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
