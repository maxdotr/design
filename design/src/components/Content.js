import {
  Container,
  Image,
  Nav,
  Navbar,
  NavLink,
  NavItem,
  Row,
  Col,
} from 'react-bootstrap';
import bike from '../imgs/bikeimg.jpg';
import bars from '../imgs/barimg.jpg';
import tires from '../imgs/tireimg.jpg';
import styles from './Content.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import tirebanner from '../imgs/tirebanner.jpg';
import cart from '../imgs/cart.png';
import logo from '../imgs/logo.png';
import React from 'react';

const Content = () => {
  return (
    <Container className={styles.contentContainer} fluid>
      <Container className={styles.innerContent}>
        <h1 className={styles.contentText}>
          Read More: How our tires have 4x as much grip as all of our
          competitors. As reported by mountainbikescimag.com with awards given
          by The National Institute of Science.
        </h1>
      </Container>
    </Container>
  );
};

export default Content;
