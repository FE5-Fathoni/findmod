import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Home.css";

// import image
import Fb from "../images/Facebook icon.png";
import Ig from "../images/twitter icon.png";
import LinkedIn from "../images/lindedin icon.png";

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="pe-5" xs={6}>
            <h1 className="color-text">Finmod.id</h1>
            <p>
              Platform penilaian online untuk startup dan UMKM. Ini lebih cepat
              dan lebih hemat biaya daripada cara tradisional.
            </p>
            <div className="d-flex justify-content-start gap-2">
              <img className="sosmed" src={Fb} alt="" />
              <img className="sosmed" src={Ig} alt="" />
              <img className="sosmed" src={LinkedIn} alt="" />
            </div>
          </Col>
          {/* <Col xs={3}></Col> */}
          <Col className="ps-5" xs={3}>
            <h3>Findmod</h3>
            <p>About</p>
            <p>Price</p>
            <p>Karir</p>
            <p>Contact</p>
          </Col>
          <Col className="ps-5" xs={3}>
            <h3>Product</h3>
            <p>Laporan Penilaian</p>
            <p>Metode</p>
            <p>Akurasi Data</p>
          </Col>
        </Row>
        <p className="mt-3 text-center">All Rights Reserved @2022</p>
      </Container>
    </div>
  );
}

export default Footer;
