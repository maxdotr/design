import {
  Container,
  Image,
  Nav,
  Navbar,
  NavLink,
  NavItem,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import bike from '../imgs/bikeimg.jpg';
import bars from '../imgs/barimg.jpg';
import tires from '../imgs/tireimg.jpg';
import styles from './Newsletter.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tirebanner from '../imgs/tirebanner.jpg';
import cart from '../imgs/cart.png';
import logo from '../imgs/logo.png';
import React from 'react';

const Newsletter = () => {
  return (
    <Container className={styles.newsContainer} fluid>
      <Row>
        <Col lg='6' md='12'>
          <h1>Don't forget to sign up for our newsletter!</h1>
        </Col>
        <Col>
          <Form.Control
            type='email'
            placeholder='Enter email'
            className={styles.newsForm}
          />
          <Button variant='primary' type='submit' className={styles.newsButton}>
            Sign Up!
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Newsletter;
