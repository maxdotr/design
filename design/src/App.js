import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Content from './components/Content';
import BestSellers from './components/BestSellers';
import React from 'react';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <BestSellers />
      <Content />
    </React.Fragment>
  );
}

export default App;
