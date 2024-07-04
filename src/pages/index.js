import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import { getProducts, productSlug, getDiscountPrice } from "@/lib/product";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaPlay } from "react-icons/fa";
import { LayoutOne, LayoutTwo } from "@/layouts";
import HeroSectionStyleOne from "@/components/hero/styleOne";
import CarDealerSearchForm from "@/components/carDealerSearchForm";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import AboutUsStyleTwo from "@/components/aboutUs/aboutUsStyleTwo";
import CounterUp from "@/components/counterUp";
import Feature from "@/components/features";
import TitleSection from "@/components/titleSection";
import ProductItem from "@/components/product";
import CallToAction from "@/components/callToAction";
import VideoBanner from "@/components/banner/videoBanner";
import aminitiesData from "@/data/aminities/index.json";
import AminitiesItem from "@/components/aminities/item";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import featuresData from "@/data/service";
import HeroSectionStyleTwo from "@/components/hero/styleTwo";

import { useState } from "react";
// import Slider from "react-slick";
// import { LayoutOne } from "@/layouts";
// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
// import { getProducts, productSlug } from "@/lib/product";
// import TitleSection from "@/components/titleSection";
// import Feature from "@/components/features";
// import featuresData from "@/data/service";
// import HeroSectionStyleTwo from "@/components/hero/styleTwo";
import AboutUsSectionOne from "@/components/aboutUs/aboutUsSectionOne";
import AboutUsSectionTwo from "@/components/aboutUs/aboutUsSectionTwo";
import UpCommingcarousel from "@/components/upCommingCarousel";
import PropertyItem from "@/components/product/properties";
// import { useSelector } from "react-redux";
// import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import AminitiesItemTwo from "@/components/aminities/itemTwo";
// import aminitiesData from "@/data/aminities/index.json";
import TestimonialCarouselItemTwo from "@/components/testimonialCarousel/indexTwo";
// import testimonialData from "@/data/testimonial";
// import blogData from "@/data/blog";
// import BlogItem from "@/components/blog";
// import CallToAction from "@/components/callToAction";
import heroData from '@/data/hero/index-two.json';

function HomePage(props) {
  const [isOpen, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);
  const featureData = getProducts(featuresData, "buying", "featured", 3);
  const countryProducts = getProducts(products, "buying", "country", 5);
  const { data } = props;



  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
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

  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const testiMonialsettings = {
    arrows: true,
    dots: false,
    centerMode: false,
    centerPadding: '80px',
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <LayoutOne topbar={false}>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="gSiXR39AEtQ"
        onClose={() => setOpen(false)}
      />
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-11 section-bg-1">
        <HeroSectionStyleTwo data={heroData} />
      </div>
      {/* <!-- SLIDER AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area pt-115 pb-100 ">
        <AboutUsStyleOne />
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
        <AboutUsSectionTwo />
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- FEATURE AREA START ( Feature - 6) --> */}

      <div className="ltn__category-area ltn__product-gutter pt-115 pb-70">
        <Container>
          <Row>
            <Col xs={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  // subTitle: "Our Aminities",
                  title: "Our Aminities",
                  additionalClassName: "",
                }}
              />
            </Col>
          </Row>

          <Row className="slick-arrow-1 justify-content-center">
            {aminitiesData.map((data, key) => {
              return (
                <Col key={key} xs={12} sm={6} md={4} lg={3}>
                  <AminitiesItemTwo data={data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <CounterUp />

      <div className="ltn__video-popup-area">
          <VideoBanner />
      </div>
{/* 
      <Feature
        servicebtn={true}
        iconTag={false}
        data={featureData}
        classes=""
        headingClasses=""
        titleSectionData={{
          sectionClasses: "text-center",
          subTitle: "Our Services",
          title: "Our Main Focus",
        }}
      /> */}

<div
        className="ltn__search-by-place-area before-bg-top pt-115 pb-70"


      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area d-flex justify-content-center">
                {/* <h6 className="section-subtitle ltn__secondary-color">
                  Area Properties
                </h6> */}
                <h1 className="section-title">
                  Events
                </h1>
              </div>
            </Col>
          </Row>

          {!!countryProducts?.length ? (
            <Slider
              {...productsettings}
              className="ltn__product-slider-item-four-active-full-width slick-arrow-1"
            >
              {countryProducts.map((product, key) => {
                const slug = productSlug(product.title);

                return (
                  <PropertyItem
                    key={key}
                    product={product}
                    slug={slug}
                    baseUrl="/shop"
                  />
                );
              })}
            </Slider>
          ) : null}




        </Container>
      </div>

      {/* <!-- FEATURE AREA END -->

    <!-- UPCOMING PROJECT AREA START --> */}
      <div
        className="ltn__upcoming-project-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/projects/background.jpg")`, backgroundSize: "cover" }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Completed Projects
                </h6>
                <h1 className="section-title  white-color">
                  Upcoming Projects
                </h1>
              </div>
            </Col>
          </Row>
          <UpCommingcarousel />

        </Container>
      </div>
      {/* <!-- UPCOMING PROJECT AREA END -->

    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      {/* <!-- SEARCH BY PLACE AREA END -->

    <!-- SELECT AVAILABILITY AREA START --> */}
      <div className="select-availability-area pb-120 " style={{paddingTop: "40px"}}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h1 className="section-title">Dealers</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__select-availability-table-wrap">
                <div className="ltn__select-availability-table d-none d-md-block">
                  <ul className="ltn__select-availability-table-head" style={{fontWeigh : "700"}}>
                    <li style={{fontWeigh : "700"}}>Region no.</li>
                    <li style={{fontWeigh : "700"}}>Dealer Name</li>
                    <li style={{fontWeigh : "700"}}>Mobile No.</li>
                    <li style={{fontWeigh : "700"}}>Firm/ Company Name </li>
                    <li style={{fontWeigh : "700"}}>Business Address</li>
                    {/* <li>Details</li> */}
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">002</li>
                    <li>Muhammad Akhlaq Qureshi</li>
                    <li>0301-7778420</li>
                    <li>Naziri Estate Agency </li>
                    <li>Ahsan Commercial Plaza, Shop No 09, Fauji Basti, Airport Road, Bahawalpur</li>
                    {/* <li>
                      <a href="product-details">+ Available</a>
                    </li> */}
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">005</li>
                    <li>Muhammad Zahid</li>
                    <li>0308-6323206</li>
                    <li>Premier Estate Marketing </li>
                    <li>Office No 05, Liberty Square Plaza, Airport Road, Bahawalpur</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">007</li>
                    <li>Mohsin Abbas Safvi</li>
                    <li>0302-7087566</li>
                    <li>Asmat Real Estate Services & Developers </li>
                    <li>Safvi House, Yazman Road, Bahawalpur</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">009</li>
                    <li>Farooq Ahmed</li>
                    <li>0300-7800969</li>
                    <li>Pelican Real Estate Bahawalpur </li>
                    <li>Near City School, Air Port Road Bahawalpur</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">010</li>
                    <li>Hasnain Khalid</li>
                    <li>0300-8685625</li>
                    <li>Pak Punjab Property Advisor </li>
                    <li>Shop No 18, Cantonment Plaza, Model Town A, Bahawalpur</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">011</li>
                    <li>Major (R) Zahid Hussain</li>
                    <li>0300-9494709</li>
                    <li>Seerat Builders </li>
                    <li>House No.199 B Street No.11 Muhammadia Colony Bahawalpur</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">015</li>
                    <li>Izhaar Hussain Khan</li>
                    <li>0303-6448400</li>
                    <li>City Property Links </li>
                    <li>Office No 09, Al-Madina Commercial Cernter, Airport Road, Near Meezan Bank, Bahawalpur</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">019</li>
                    <li>Muhammad Jawad Malik</li>
                    <li>0300-8688185</li>
                    <li>Al-Fateh Estate & Builders </li>
                    <li>Near MCB Bank, Satellite Town, Commercial Area Bahawalpur</li>
                  </ul>
                </div>
                <div className="ltn__select-availability-table-responsive d-md-none">
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- SELECT AVAILABILITY AREA END -->

    <!-- NEIGHBOUR AREA START --> */}
      <div className="neighbour-area section-bg-1 pt-118 pb-120">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                {/* <h6 className="section-subtitle ltn__secondary-color">
                  Explore Neighbour
                </h6> */}
                <h1 className="section-title">
                  OnGoing Projects
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="ltn__neighbour-tab-wrap">

                <Tab.Container defaultActiveKey="first">
                  <div className="ltn__tab-menu ltn__tab-menu-4 text-center">
                    <Nav>
                      <Nav.Link eventKey="first"> <img src="/img/neighbour/policanmall.jpg" alt="#" /></Nav.Link>
                      <Nav.Link eventKey="second"> <img src="/img/neighbour/villamarket.jpg" alt="#" /></Nav.Link>
                      <Nav.Link eventKey="third"><img src="/img/neighbour/takmeelSquare.jpg" alt="#" /></Nav.Link>
                    </Nav>

                  </div>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/policanmall.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/neighbour/policanmall2.jpg" alt="#" />
                                </Link>
                                {/* <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div> */}
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Pelican Mall</Link>
                                </h4>
                                {/* <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label> */}
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                {/* <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/villamarket.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/neighbour/villamosque.jpg" alt="#" />
                                </Link>
                                {/* <div className="search-by-place-badge">
                                  <ul>
                                    <li>9 Properties</li>
                                  </ul>
                                </div> */}
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Villa Market</Link>
                                </h4>
                                {/* <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label> */}
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                {/* <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="ltn__neighbour-tab-content-inner">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="neighbour-apartments-img">
                              <img src="/img/neighbour/takmeelSquare.jpg" alt="#" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="ltn__search-by-place-item neighbour-apartments-item">
                              <div className="search-by-place-img">
                                <Link href="#">
                                  <img src="/img/neighbour/takmeelSquare2.jpg" alt="#" />
                                </Link>
                              </div>
                              <div className="search-by-place-info">
                                <h4>
                                  <Link href="#">Takmeel Square</Link>
                                </h4>
                                {/* <label>
                                  <span className="ltn__secondary-color">
                                    1,500m{" "}
                                  </span>
                                  / 21 min. walk
                                </label> */}
                                <div className="search-by-place-brief">
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore Enim ullamco laboris.
                                  </p>
                                </div>
                                {/* <div className="search-by-place-btn">
                                  <Link href="#">
                                    View Property{" "}
                                    <i className="flaticon-right-arrow"></i>
                                  </Link>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                <Row>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-mortarboard"></i> Pelican Mall
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title"><i className="flaticon-hospital"></i> Villa Market</Accordion.Header>
                        <Accordion.Body>
                          {/* <div className="ltn__video-img alignleft">
                            <img
                              src="/img/bg/17.jpg"
                              alt="video popup bg image"
                            />
                            <button
                              className="ltn__video-icon-2 ltn__video-icon-2-small"
                              onClick={() => setOpen(true)}
                            >
                              <FaPlay />
                            </button>
                          </div> */}
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      {/* <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-metro"></i> Railway Station
                        </Accordion.Header>
                        <Accordion.Body className="card-body">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item> */}
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                  <Col xs={12} lg={6}>
                    <Accordion>
                      {/* <!-- card --> */}
                      <Accordion.Item eventKey="1" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-building"></i> Takmeel Square
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      {/* <!-- card --> */}
                      {/* <Accordion.Item eventKey="2" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-airplane"></i> Quils of wisdom
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item> */}
                      {/* <!-- card --> */}
                      {/* <Accordion.Item eventKey="3" className="card">
                        <Accordion.Header className="ltn__card-title">
                          <i className="flaticon-slider"></i> Children Playland
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Scelerisque eleifend donec
                            pretium vulputate sapien nec sagittis.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item> */}
                      {/* <!--  --> */}
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- NEIGHBOUR AREA END -->

    <!-- CATEGORY AREA START --> */}
      {/* <!-- CATEGORY AREA END -->


    <!-- TESTIMONIAL AREA START (testimonial-8) --> */}
      <div
        className="ltn__testimonial-area bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/others/testimonial.jpg")`, backgroundSize: "cover" }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="section-title-area">
                <h6 className="section-subtitle white-color">
                  Client,s Testimonial
                </h6>
                <h1 className="section-title white-color">
                  See What,s Our Client <br />
                  Says About Us
                </h1>
              </div>
            </Col>
          </Row>
          <Slider
            {...testiMonialsettings}
            className="row ltn__testimonial-slider-6-active slick-arrow-3"
          >
            {testimonialData.map((data, key) => {
              return <Col xs={12} lg={4} key={key}><TestimonialCarouselItemTwo data={data} /></Col>;
            })}

            {/* <!--  --> */}
          </Slider>
        </Container>
      </div>
      {/* <!-- TESTIMONIAL AREA END -->

    <!-- BLOG AREA START (blog-3) --> */}
      <div className="ltn__blog-area pb-70">
        <Container>
          <Row>
            <Col lg={12}>
              <TitleSection
                sectionClasses="text-center"
                headingClasses=""
                titleSectionData={{
                  // subTitle: "News & Blogs",
                  title: "Latest News Feeds",
                }}
              />
            </Col>
          </Row>
          <Slider
            {...blogSettings}
            className="ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
          >
            {blogData.map((data, key) => {
              const slug = productSlug(data.title);
              return (
                <BlogItem key={key} baseUrl="/blog" data={data} slug={slug} />
              );
            })}
          </Slider>
        </Container>
      </div>
      {/* <!-- BLOG AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <Container>
          <Row>
            <Col xs={12}>
              <CallToAction />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- CALL TO ACTION END --> */}
    </LayoutOne>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index-two.json");
  const Herodata = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      Herodata,
    },
  };
}

export default HomePage;
