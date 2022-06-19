import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  Carousel,
  ButtonGroup,
  ToggleButton,
  Form,
} from "react-bootstrap";
import "../styles/Home.css";

// import image
import StartUp from "../images/Startup.png";
import Group from "../images/Group 103.png";
import StartUpLife from "../images/Startup life-pana 2.png";
import Image2 from "../images/image (2).png";

// import background
import BG1 from "../images/BG.png";
import Frame from "../images/Frame 108.png";
import Diamond from "../images/Diamond.png";
import Group3 from "../images/Group 3.png";
import Close from "../images/close 1.png";

// import Logo
import Fb from "../images/Facebook icon.png";
import Ig from "../images/twitter icon.png";
import LinkedIn from "../images/lindedin icon.png";
import Methode from "../images/Methode.png";
import Paper from "../images/Paper.png";
import Shield from "../images/Shield dark.png";
import Vector from "../images/Vector.png";
import EditSquare from "../images/Edit Square.png";
import Dollar from "../images/Dollar.png";
import Tanimore from "../images/tanimore_logo_1_font blue-01 1.png";
import Logos from "../images/Logos.png";

function Home() {
  const [demoValue, setDemoValue] = useState("1");
  const [radioValue, setRadioValue] = useState("1");

  const demos = [
    { name: "Coba Demo", value: "1" },
    { name: "Beli Sekarang", value: "2" },
  ];
  const radios = [
    { name: "Yearly", value: "1" },
    { name: "Monthly", value: "2" },
  ];

  return (
    <div>
      <Container fluid className="py-5">
        {/* baris 1 */}
        <Container>
          <Row style={{ backgroundImage: `url(${BG1})` }}>
            <Col className="pe-5 mt-5">
              <h1>Ceritakan Tentang Startup Anda</h1>
              <p>
                Kami akan membantu menganalisa dan memahami bagaimana
                berharganya perushaan anda
              </p>
              <div className="d-flex justify-content-center gap-5 m-3">
                {demos.map((el, i) => (
                  <ToggleButton
                    key={i}
                    id={`radio-${i}`}
                    type="radio"
                    variant={i % 2 ? "outline-primary" : "outline-primary"}
                    name="radio"
                    value={el.value}
                    checked={demoValue === el.value}
                    size="lg"
                    onChange={(e) => setDemoValue(e.currentTarget.value)}
                  >
                    {el.name}
                  </ToggleButton>
                ))}
              </div>
              <div className="d-flex justify-content-center ">
                <p class="bordered"></p>
                <img className="sosmed" src={Fb} alt="" />
                <img className="sosmed" src={Ig} alt="" />
                <img className="sosmed" src={LinkedIn} alt="" />
                <p class="bordered"></p>
              </div>
            </Col>
            <Col>
              <Card.Img src={StartUp} alt="" />
            </Col>
          </Row>
          <img src={Frame} alt="" />
        </Container>

        {/* baris 2 */}
        <Container>
          <div
            style={{
              backgroundImage: `url(${Diamond})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center my-5">
              <h1>Mengapa Harus Kami</h1>
              <p1>
                Karena kami memiliki beberapa keunggulan dalam menyajikan maupun
                mengola data yang telah kami dapatkan untuk penilaian perusahan
                tersebut
              </p1>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap text-center gap-5">
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <Button className="btn-methode" variant="light">
                    <Card.Img
                      className="img-keunggulan"
                      variant="top"
                      src={Methode}
                      alt=""
                    />
                  </Button>
                </div>

                <Card.Body>
                  <Card.Title>Metode Penilaian</Card.Title>
                  <Card.Text>
                    Metode penilaian dilakukan dari berbagai sudut pandang untuk
                    medapatkan hasil yang komprehensif
                  </Card.Text>
                  <p className="color-text">Learn more</p>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <Button className="btn-paper" variant="light">
                    <Card.Img
                      className="img-keunggulan"
                      variant="top"
                      src={Paper}
                      alt=""
                    />
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title>Laporan Penilaian</Card.Title>
                  <Card.Text>
                    Laporan penilaian dibuat secara profesional, sangat
                    terperinci dan mudah untuk di download
                  </Card.Text>
                  <p className="color-text">Learn more</p>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <Button className="btn-shield" variant="light">
                    <Card.Img
                      className="img-keunggulan"
                      variant="top"
                      src={Shield}
                      alt=""
                    />
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title>Kerahasian Data</Card.Title>
                  <Card.Text>
                    Data yang telah kami dapatkan dijamin kerahasiannya tidak
                    akan kami menjual atau membagikannya
                  </Card.Text>
                  <p className="color-text">Learn more</p>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <Button className="btn-vector" variant="light">
                    <Card.Img
                      className="img-keunggulan"
                      variant="top"
                      src={Vector}
                      alt=""
                    />
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title>Keakuratan Data</Card.Title>
                  <Card.Text>
                    Sumber data disesuaikan berdasarkan negara dan industrinya
                    untuk mendapatkan keakuratan
                  </Card.Text>
                  <p className="color-text">Learn more</p>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <Button className="btn-paper" variant="light">
                    <Card.Img
                      className="img-keunggulan"
                      variant="top"
                      src={EditSquare}
                      alt=""
                    />
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title>Penyesuaian Parameter Penilaian</Card.Title>
                  <Card.Text>
                    Dapat menyesuaikan Parameter Penilaian untuk mempermudah
                    anda
                  </Card.Text>
                  <p className="color-text">Learn more</p>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <Button className="btn-dollar" variant="light">
                    <Card.Img
                      className="img-keunggulan"
                      variant="top"
                      src={Dollar}
                      alt=""
                    />
                  </Button>
                </div>
                <Card.Body>
                  <Card.Title>Membantu Proyeksi Keuangan</Card.Title>
                  <Card.Text>
                    Kami menyediakan default berdasarkan kinerja rata-rata
                    perusahaan di industri yang sama
                  </Card.Text>
                  <p className="color-text">Learn more</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>

        {/* baris 3 */}
        <Container>
          <Row
            className="my-5 "
            style={{
              backgroundImage: `url(${Group3})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <Col>
              <Card.Img src={Group} alt="" />
            </Col>
            <Col>
              <h1>Platform Sangat Mudah Untuk Digunakan</h1>
              <p>
                Finmod merupakan satu - satuny platform penilain online
                menyeluruh untuk startup yang ada di indonesia dengan metode
                penilaian yang dilakukan dari berbagai sudut pandang jika
                diperlukan, Anda dapat memutuskan untuk menggunakan subset dari
                5 metode yang tersedia untuk medapatkan hasil yang komprehensif.
              </p>
              <Button variant="outline-primary" size="lg" active>
                Beli Sekarang
              </Button>
            </Col>
          </Row>
        </Container>

        {/* baris 4 */}
        <Container>
          <Row className="my-5">
            <Col>
              <h1>Kami Dipercaya banyak Startup & UMKM Indonesia</h1>
              <p>
                Sudah banyak startup indonesia yang mempercai kami sebagai
                platform penilaian online untuk perusahaan mereka, Sekarang
                gilliran anda untuk mengetahui seberapa berharganya perusahaan
                anda
              </p>
              <div className="d-flex gap-3">
                <div>
                  <h3 className="color-text">130K+</h3>
                  <p>Perusahaan</p>
                </div>
                <div>
                  <h3 className="color-text">100K+</h3>
                  <p>Indonesia</p>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img src={StartUpLife} alt="" />
            </Col>
          </Row>
        </Container>

        {/* baris 5 */}
        <Container>
          <div
            className="text-center my-5"
            style={{ backgroundImage: `url(${BG1})` }}
          >
            <h3 className="py-5 mt-5">
              Di Berbagai Negara Sudah Menggunakan Finmod
            </h3>
            <p>
              Tidak hanya di indonesia tapi beberapa perusahaan di negara lain
              menggunakan findmod untuk mempelajari, memantau, dan mengembangkan
              penilaian perusahaan mereka
            </p>
            <div className="d-flex justify-content-between px-5">
              <div>
                <h3>125.500</h3>
                <p>Asia</p>
              </div>
              <div>
                <h3>500</h3>
                <p>Eropa</p>
              </div>
              <div>
                <h3>500</h3>
                <p>Amerika</p>
              </div>
              <div>
                <h3>3.550</h3>
                <p>Oceania</p>
              </div>
            </div>
          </div>
        </Container>

        {/* baris 6 */}
        <Container>
          <div>
            <div
              style={{
                backgroundImage: `url(${Close})`,
                backgroundRepeat: "no-repeat",
              }}
              className="text-center py-5"
            >
              <h1>Apa Kata Client</h1>
              <p>
                Kami mendengarkan masukan dan apresiasi dari client kami di
                seluruh dunia yang telah percaya terhadap kami
              </p>
            </div>
            <Row className="d-flex gap-5">
              <Col className="mt-5">
                <Carousel>
                  <Carousel.Item>
                    <img src={Tanimore} alt="First slide" />
                    <p>
                      Finmod sangat membantu kami untuk menyiapkan laporan
                      Financial Model secara mudah dan lengkap yang dibutuhkan
                      untuk fase Fundraising kami kepada para calon investor di
                      perusahaan kami.
                    </p>
                    <h3>Ardiansyah</h3>
                    <p>CEO, Tanimore</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Tanimore} alt="Second slide" />
                    <p>
                      Finmod sangat membantu kami untuk menyiapkan laporan
                      Financial Model secara mudah dan lengkap yang dibutuhkan
                      untuk fase Fundraising kami kepada para calon investor di
                      perusahaan kami.
                    </p>
                    <h3>Ardiansyah</h3>
                    <p>CEO, Tanimore</p>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Tanimore} alt="Third slide" />
                    <p>
                      Finmod sangat membantu kami untuk menyiapkan laporan
                      Financial Model secara mudah dan lengkap yang dibutuhkan
                      untuk fase Fundraising kami kepada para calon investor di
                      perusahaan kami.
                    </p>
                    <h3>Ardiansyah</h3>
                    <p>CEO, Tanimore</p>
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col>
                <Card.Img style={{ width: "15rem" }} src={Image2} alt="" />
              </Col>
            </Row>
          </div>
        </Container>

        {/* baris 7 */}
        <Container>
          <Row className="mt-5">
            <Col>
              <h1>Patner Kami</h1>
              <p>
                Pelanggan yang menggunakan Finmod untuk menilai perusahaan
                mereka.
              </p>
            </Col>
            <Col>
              <Card.Img src={Logos} />
            </Col>
          </Row>
        </Container>

        {/* baris 8 */}
        <Container>
          <Row className="mt-5">
            <Col>
              <ButtonGroup className="Yearly-Montly">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-primary" : "outline-primary"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    size="lg"
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>
            <Col>
              <h1>Penilain yang tepat untuk rencana kedepan</h1>
            </Col>
            <div className="d-flex justify-content-center align-items-center flex-wrap text-center gap-5 mt-3">
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <h6>Starter</h6>
                </div>
                <Card.Body>
                  <h1>Free</h1>
                  <Card.Text>1 Perusahaan</Card.Text>
                  <Card.Text>Penilaian 1 Bulan</Card.Text>
                  <Card.Text>No Detail Report</Card.Text>
                  <p className="color-text">Get Started</p>
                </Card.Body>
              </Card>
              <Card
                className="text-white"
                style={{ width: "20rem", backgroundColor: "#4361ee" }}
              >
                <div className="mt-3">
                  <h6>Premium</h6>
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <h1>$29</h1>
                    <h5 className="mt-3">/month</h5>
                  </div>
                  <Card.Text>5 Perusahaan</Card.Text>
                  <Card.Text>Penilaian 6 Bulan</Card.Text>
                  <Card.Text>Detail Report</Card.Text>
                  <Button style={{ backgroundColor: "blue" }}>
                    Get Started
                  </Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }}>
                <div className="mt-3">
                  <h6>Enterprise</h6>
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-center">
                    <h1>$49</h1>
                    <h5 className="mt-3">/month</h5>
                  </div>
                  <Card.Text>10 Perusahaan</Card.Text>
                  <Card.Text>Penilaian 1 Tahun</Card.Text>
                  <Card.Text>Detail Report</Card.Text>
                  <p className="color-text">Get Started</p>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>

        {/* baris 9 */}
        <div
          className="text-center text-white py-4 my-5"
          style={{ backgroundColor: "#4361ee" }}
        >
          <h1>Mau Coba Gratis ?</h1>
          <p>
            Kalian bisa mencoba gratis terlebih dahulu selama 7 hari untuk
            melihat dan memahami apa yang kita lakukan dalam menilai perusahaan
            dengan menginput email yang akan dijadikan akun.{" "}
          </p>
          <Form className="d-flex justify-content-center">
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="form-email"
                type="email"
                placeholder="Email Address"
              />
            </Form.Group>
            <Button className="btn-submit" variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Home;
