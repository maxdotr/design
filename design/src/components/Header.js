import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';
import mBike from '../imgs/mBike.jpg';
import React from 'react';

const Header = () => {
  return (
    <Container className={styles.headerContainer} fluid>
      <h1 className={styles.overImageOne}>RIP THOSE MOUNTAINS TO SHREDS!</h1>
    </Container>
  );
};

export default Header;
