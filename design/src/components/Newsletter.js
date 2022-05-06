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
import icons from '../imgs/icons.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import tirebanner from '../imgs/tirebanner.jpg';
import cart from '../imgs/cart.png';
import logo from '../imgs/logo.png';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

const Newsletter = () => {
  return (
    <Container className={`${styles.newsContainer} mx-auto`} fluid>
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
      <Row>
        <Image
          fluid
          src={icons}
          href='#'
          className={`${styles.iconImgs} mx-auto`}
        />
      </Row>
      <p className={styles.copy}>
        © 2022 All Rights Reserved Trek Mountain Bikes LLC |{' '}
        <Link to='/contact' className={styles.contactLink}>
          Contact
        </Link>
      </p>
      <Outlet />
    </Container>
  );
};

export default Newsletter;
