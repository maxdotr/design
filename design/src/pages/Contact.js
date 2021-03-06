import '../App.css';
import { Container } from 'react-bootstrap';
import Header from '../components/Header.js';
import Content from '../components/Content';
import BestSellers from '../components/BestSellers';
import React from 'react';
import Cont from '../components/Cont';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';

function Contact() {
  return (
    <React.Fragment>
      <Navigation />
      <Cont />
      <Newsletter />
    </React.Fragment>
  );
}

export default Contact;
