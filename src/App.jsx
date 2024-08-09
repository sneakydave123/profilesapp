import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing react-router-dom

import viteLogo from '/vite.svg';
import NavBar from './NavBar'; 
import Login from './Login';
import About from './About';
import './App.css';

function App() {
  //[item, function] use state allows for a variable to be stored and updated
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path={`/${language === 'en' ? 'login' : 'inicio'}`} element={<Login language={language} />} />
          <Route path={`/${language === 'en' ? 'about' : 'acerca'}`} element={<About language={language} />} />
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