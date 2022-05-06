import {
  Container,
  Image,
  Nav,
  Navbar,
  NavLink,
  NavItem,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import bike from '../imgs/bikeimg.jpg';
import bars from '../imgs/barimg.jpg';
import tires from '../imgs/tireimg.jpg';
import styles from './Cont.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tirebanner from '../imgs/tirebanner.jpg';
import cart from '../imgs/cart.png';
import logo from '../imgs/logo.png';
import React from 'react';

const Cont = () => {
  return (
    <React.Fragment>
      <Container className={`${styles.contactContainer} mx-auto`} fluid>
        <Row className={`${styles.contactContainer} mx-auto`}>
          <Col className={`${styles.contactContainer} mx-auto`}>
            <br />
            <h1>Find us at:</h1>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12232.65385016629!2d-82.9994553!3d39.9600979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61a04b581c54213a!2sOhio%20Statehouse!5e0!3m2!1sen!2sus!4v1651856632824!5m2!1sen!2sus'
              width='600'
              height='450'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
            <h3>1 Capitol Square, Columbus, OH 43215</h3>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h1>Call us at:</h1>
            <Button variant='success' className={styles.phone}>
              1 (800) 843-2728
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cont;
