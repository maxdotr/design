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
import logo from '../imgs/logo.png';
import React from 'react';

const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar className={`${styles.navContainer} container-fluid`} expand='md'>
        <Container>
          <Navbar.Brand href='#home'>
            <img src={logo} className={styles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className={styles.collapseIcon}
          >
            <Nav>
              <Nav.Link href='#home' className={styles.navLink}>
                Products
              </Nav.Link>
              <Nav.Link href='#link' className={styles.navLink}>
                Contact
              </Nav.Link>
              <Nav.Link href='#link' className={styles.navLink}>
                FAQ
              </Nav.Link>
              <Nav.Link href='#link' className={styles.navLink}>
                Blog
              </Nav.Link>
            </Nav>
            <Nav.Link href='#link' className={`${styles.cartContainer} `}>
              <img src={cart} className={`${styles.cartImage} `} />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
