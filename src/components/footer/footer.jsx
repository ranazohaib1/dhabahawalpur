import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area" color="#000000">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      {/* <img src="/img/logo.png" alt="Logo" /> */}
                      <img src="/img/logo-2.png" alt="Logo" />
                    </div>
                  </div>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p> */}
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt style={{color: "#654321"}} />
                        </div>
                        <div className="footer-address-info">
                          <p style={{color: "#000000"}}>Head Office, Jinnah Avenue (MB-2), APE Canal Road Bahawalpur. Pakistan</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt style={{color: "#654321"}}  />
                        </div>
                        <div className="footer-address-info">
                          <p style={{color: "#000000"}}>
                            <Link href="tel:+92 (62)-111-111-518" style={{color: "#000000"}}>+92 (62)-111-111-518</Link>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaEnvelope  style={{color: "#654321"}} />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="mailto:info@dhabahawalpur.com" style={{color: "#000000"}} >
                              info@dhabahawalpur.com
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <Link href="#" title="Facebook">
                          <FaFacebookF style={{color: "#654321"}}/>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Twitter">
                          <FaTwitter style={{color: "#654321"}}/>
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Linkedin">
                          <FaLinkedin style={{color: "#654321"}} />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" title="Youtube">
                          <FaYoutube style={{color: "#654321"}} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={9}>
                <h2></h2>
                <Row>
                  <Col xs={12} sm={6} xl={4}>
                    <div className="footer-widget footer-menu-widget clearfix">
                      <h4 className="footer-title" style={{color: "#654321"}}>Lahore Office</h4>
                      <div className="footer-menu">
                      <div className="footer-address">
                        <ul>
                          <li>
                            <div className="footer-address-icon">
                              <FaMapMarkerAlt style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p style={{color: "#000000"}}> DHA Bahawalpur T&R Sub office Lahore Plaza No. 58, Block MB, 2nd Floor Phase 6, DHA Lahore</p>
                            </div>
                          </li>
                          <li>
                            <div className="footer-address-icon">
                              <FaPhoneAlt style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p style={{color: "#000000"}}>
                                <Link href="tel:+92 42 37188529">+92 42 37188529, +92 345 0167777</Link>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="footer-address-icon">
                              <FaEnvelope style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p>
                                <Link href="mailto:info@dhabahawalpur.com" style={{color: "#000000"}}>
                                  info@dhabahawalpur.com
                                </Link>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} xl={4}>
                    <div className="footer-widget footer-menu-widget clearfix">
                      <h4 className="footer-title" style={{color: "#654321"}}>Karachi Office </h4>
                      <div className="footer-menu">
                      <div className="footer-address">
                        <ul>
                          <li>
                            <div className="footer-address-icon">
                              <FaMapMarkerAlt style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p style={{color: "#000000"}}>DHA Bahawalpur Karachi Sub office Gate No. 2, Nisar Shaheed Park, Phase IV, DHA Karachi</p>
                            </div>
                          </li>
                          <li>
                            <div className="footer-address-icon">
                              <FaPhoneAlt style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p>
                                <Link href="tel:+92 21 99332104" style={{color: "#000000"}}>+92 21 99332104, +92 21 99332105</Link>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="footer-address-icon">
                              <FaEnvelope style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p>
                                <Link href="mailto:info@dhabahawalpur.com" style={{color: "#000000"}}>
                                  info@dhabahawalpur.com
                                </Link>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={6} xl={4}>
                    <div className="footer-widget footer-menu-widget clearfix">
                      <h4 className="footer-title" style={{color: "#654321"}}>Islamabad Office</h4>
                      <div className="footer-menu">
                      <div className="footer-address">
                        <ul>
                          <li>
                            <div className="footer-address-icon">
                              <FaMapMarkerAlt style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p style={{color: "#000000"}}> DHA Bahawalpur 2nd Floor , Plaza No 5, Sector-E, Commercial DHA Phase-1, Islamabad</p>
                            </div>
                          </li>
                          <li>
                            <div className="footer-address-icon">
                              <FaPhoneAlt style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p>
                                <Link href="tel:+92 300 5517775" style={{color: "#000000"}}>051-2759700 , +92 300 5517775</Link>
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="footer-address-icon">
                              <FaEnvelope style={{color: "#654321"}} />
                            </div>
                            <div className="footer-address-info">
                              <p>
                                <Link href="mailto:info@dhabahawalpur.com" style={{color: "#000000"}}>
                                  info@dhabahawalpur.com
                                </Link>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      </div>
                    </div>
                  </Col>
                </Row>

              </Col>
              {/* <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          {" "}
                          <FaPaperPlane />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="mt-30">We Accept</h5>
                  <img src="/img/icons/payment-4.png" alt="Payment Image" />
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5" style={{backgroundColor: "#ffffff"}}>
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p style={{color: "#000000"}}>
                    All Rights Reserved @ Company{" "}
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li >
                      <Link href="#" style={{color: "#000000"}}>Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="#" style={{color: "#000000"}}>Claim</Link>
                    </li>
                    <li>
                      <Link href="#" style={{color: "#000000"}}>Privacy & Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
