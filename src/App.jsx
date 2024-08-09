import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing react-router-dom

import viteLogo from '/vite.svg';
import NavBar from './NavBar'; 
import Login from './Login';
import About from './About';
import Foreman from './Pages/Foreman';
import './App.css';

function App() {
  //[item, function] use state allows for a variable to be stored and updated
  const [language, setLanguage] = useState('en');
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement login logic
  };
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <>
      <Router>
        <NavBar language={language} />
        <Routes>
          <Route path={`/Login`} element={<Login language={language} />} />
          <Route path={`/About`} element={<About language={language} />} />
          <Route path={`/Foreman`} element={<Foreman />} />
          <Route path="*" element={<Login language={language} />} />
        </Routes>
      </Router>
      
      <div style={{ position: 'fixed', bottom: 0, right: 0 }}>
        <button onClick={toggleLanguage}>
          {language === 'en' ? 'Change to Spanish' : 'Cambiar a Inglés'}
        </button>
        <p>
          {language === 'en' ? 'Hello, welcome to our website!' : 'Hola, ¡bienvenido a nuestro sitio web!'}
        </p>
      </div>
    </>
  );
}

export default App;