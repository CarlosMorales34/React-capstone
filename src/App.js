import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Landing_Page from './components/Landing_Page/LandingPage';
import SignupForm from './components/Sign-up/sign-up'; 
import LoginForm from './components/Login/login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page/>} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm/>} />
          {/* Otras rutas de tu aplicación */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
