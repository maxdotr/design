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
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar className={`${styles.navContainer} container-fluid`} expand='md'>
        <Container>
          <Link to='/'>
            <Navbar.Brand href='#home'>
              <img src={logo} className={styles.logo} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className={styles.collapseIcon}
          >
            <Nav>
              <Link to='/' className={styles.routerLink}>
                <Nav.Link href='#home' className={styles.navLink}>
                  Products
                </Nav.Link>
              </Link>
              <Link to='/contact' className={styles.routerLink}>
                <Nav.Link href='#link' className={styles.navLink}>
                  Contact
                </Nav.Link>
              </Link>
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
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
