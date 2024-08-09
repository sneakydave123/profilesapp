

import React, { useState } from 'react';
import './style.css';

function Login({ language }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement login logic
  };

  return (
    <div className='login-container'>
      <h1>KSR Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">{language === 'en' ? 'Username:' : language === 'es' ? 'Nombre de usuario:' : 'Nom d\'utilisateur:'}</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">{language === 'en' ? 'Password:' : language === 'es' ? 'Contraseña:' : 'Mot de passe:'}</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
