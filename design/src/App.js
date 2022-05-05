import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import BestSellers from './components/BestSellers';
import React from 'react';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <BestSellers />
    </React.Fragment>
  );
}

export default App;
