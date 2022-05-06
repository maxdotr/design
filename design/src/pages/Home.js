import '../App.css';
import { Container } from 'react-bootstrap';
import Header from '../components/Header.js';
import Content from '../components/Content';
import BestSellers from '../components/BestSellers';
import React from 'react';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <BestSellers />
      <Content />
      <Newsletter />
    </React.Fragment>
  );
}

export default Home;
