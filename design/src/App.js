import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Content from './components/Content';
import BestSellers from './components/BestSellers';
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact.js';
import Navigation from './components/Navigation';
import Newsletter from './components/Newsletter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
