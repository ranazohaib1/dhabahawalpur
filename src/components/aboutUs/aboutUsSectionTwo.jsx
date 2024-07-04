import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalVideo from "react-modal-video";
import { useState } from "react";

function AboutUsSectionTwo() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="gSiXR39AEtQ"
        onClose={() => setOpen(false)}
      />
      <Container>
        <Row>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area mb-20">
                {/* <h6 className="section-subtitle ltn__secondary-color">
                  Building Facilities
                </h6> */}
                <h1 className="section-title">
                  Facilities
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod
                    tempor incididunt ut labore et
                </p>
              </div>
              <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
                <li>
                  <i className="icon-done"></i>
                  Parking Area
                </li>
                <li>
                  <i className="icon-done"></i>
                  BBQ Area
                </li>
                <li>
                  <i className="icon-done"></i>
                  Green Wall
                </li>
                <li>
                  <i className="icon-done"></i>
                  Jogging Track
                </li>
                {/* <li>
                  <i className="icon-done"></i>A rare combination of inspired
                  architecture
                </li>
                <li>
                  <i className="icon-done"></i>
                  Outdoor grilling with dining court
                </li> */}
              </ul>
              <div className="  ltn__animation-pulse2 text-center mt-30">
                <button
                  className="ltn__video-play-btn bg-white--- ltn__secondary-bg"
                  onClick={() => setOpen(true)}
                >
                  <i className="icon-play white-color"></i>
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="align-self-center">
            <div className="about-us-img-wrap about-img-left">
              {/* <img src="./img/others/aboutImage.jpeg"></img> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUsSectionTwo;
