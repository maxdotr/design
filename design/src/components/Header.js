import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';
import mBike from '../imgs/mBike.jpg';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Container className={styles.quipContainer} fluid>
        <h1 className={styles.overImageOne}>RIP THOSE MOUNTAINS TO SHREDS!</h1>
      </Container>
      <Container className={styles.buttonContainer} fluid>
        <Row>
          <Col>
            <Button variant='success' className={styles.headerButton}>
              Products
            </Button>
          </Col>
          <Col>
            <Link to='/contact'>
              <Button variant='dark' className={styles.headerButton}>
                Contact
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
