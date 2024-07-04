import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpCommingcarousel = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <>
      <Slider
        {...settings}
        className="row ltn__upcoming-project-slider-1-active slick-arrow-3"
      >
        {/* <!-- upcoming-project-item --> */}
        <Col xs={12}>
          <div className="ltn__upcoming-project-item">
            <Row>
              <Col xs={12} lg={7}>
                <div className="ltn__upcoming-project-img">
                  <img src="/img/projects/askari.jpg" alt="#" />
                </div>
              </Col>
              <Col xs={12} lg={5} className="section-bg-1">
                <div className="ltn__upcoming-project-info ltn__menu-widget">
                  <h1 className="mb-30">Completed Projects</h1>
                  <ul className="mt">
                    <li>
                      1. Project Name: <span>Askari Bank</span>
                    </li>
                    <li>
                      2. Project Type: <span>Bank</span>
                    </li>
                    <li>
                      3. Building Location: <span>Villa Community</span>
                    </li>
                    {/* <li>
                      4. No. Of Apartments: <span>568</span>
                    </li>
                    <li>
                      5. Total Investment: <span>$14,500,00</span>
                    </li> */}
                  </ul>
                  <div className="btn-wrapper animated">
                    <Link
                      href="/"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12}>
          <div className="ltn__upcoming-project-item">
            <Row>
              <Col xs={12} lg={7}>
                <div className="ltn__upcoming-project-img">
                  <img src="/img/projects/banquet.jpg" alt="#" />
                </div>
              </Col>
              <Col xs={12} lg={5} className="section-bg-1">
                <div className="ltn__upcoming-project-info ltn__menu-widget">
                  {/* <h6 className="ltn__secondary-color">About Projects</h6> */}
                  <h1>Completed Projects</h1>
                  <ul>
                    <li>
                      1. Project Name: <span>Banquet Hall</span>
                    </li>
                    <li>
                      2. Project Type: <span>Marriage Hall</span>
                    </li>
                    <li>
                      3. Building Location: <span>Villa Area</span>
                    </li>
                    {/* <li>
                      4. No. Of Apartments: <span>568</span>
                    </li>
                    <li>
                      5. Total Investment: <span>$14,500,00</span>
                    </li> */}
                  </ul>
                  <div className="btn-wrapper animated">
                    <Link
                      href="/"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* <!-- upcoming-project-item --> */}
        <Col xs={12}>
          <div className="ltn__upcoming-project-item">
            <Row>
              <Col xs={12} lg={7}>
                <div className="ltn__upcoming-project-img">
                  <img src="/img/projects/villamosque.jpg" alt="#" />
                </div>
              </Col>
              <Col xs={12} lg={5} className="section-bg-1">
                <div className="ltn__upcoming-project-info ltn__menu-widget">
                  {/* <h6 className="ltn__secondary-color">About Projects</h6> */}
                  <h1>Completed Projects</h1>
                  <ul>
                    <li>
                      1. Project Name: <span>Villa Mosque</span>
                    </li>
                    <li>
                      2. Project Type: <span>Mosque</span>
                    </li>
                    <li>
                      3. Building Location: <span>Near Villa Market</span>
                    </li>
                    {/* <li>
                      4. No. Of Apartments: <span>568</span>
                    </li>
                    <li>
                      5. Total Investment: <span>$14,500,00</span>
                    </li> */}
                  </ul>
                  <div className="btn-wrapper animated">
                    <Link
                      href="/"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* <!--  --> */}
      </Slider>
    </>
  );
};

export default UpCommingcarousel;
