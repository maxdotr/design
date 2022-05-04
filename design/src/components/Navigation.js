import {
  Container,
  Image,
  Nav,
  Navbar,
  NavLink,
  NavItem,
} from 'react-bootstrap';
import styles from './Navigation.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../imgs/cart.png';
import React from 'react';

const Navigation = () => {
  return (
    <Navbar className={styles.navContainer} expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link href='#home'>Products</Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
            <Nav.Link href='#link'>FAQ</Nav.Link>
            <Nav.Link href='#link'>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href='#link'>
          <img src={cart} className={styles.cartImage} />
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;
