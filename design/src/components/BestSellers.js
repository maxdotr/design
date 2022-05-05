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
import styles from './BestSellers.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from '../imgs/cart.png';
import logo from '../imgs/logo.png';
import React from 'react';

const BestSellers = () => {
  return (
    <React.Fragment>
      <Container className={styles.bestContainer} fluid>
        <h1>Shop our best sellers:</h1>
      </Container>
      <Container className={styles.bestImgContainer} fluid>
        <Row className={`${styles.imgRow} mx-auto`}>
          <Col className={styles.bestRow}>
            <img src={bike} className={styles.bestImg} />
            <Container className={styles.bestLabels}>
              <h1 className={styles.bestText}>Bikes</h1>
            </Container>
          </Col>
          <Col className={styles.bestRow}>
            <img src={bars} className={styles.bestImg} />
            <Container className={styles.bestLabels}>
              <h1 className={styles.bestText}>Bars</h1>
            </Container>
          </Col>
          <Col className={styles.bestRow}>
            <img src={tires} className={styles.bestImg} />
            <Container className={styles.bestLabels}>
              <h1 className={styles.bestText}>Tires</h1>
            </Container>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default BestSellers;
