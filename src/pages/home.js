import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import Header from "../components/home/Header";
// import Testimonial from '../components/home/Testimonial'
import Bottom from "../components/home/Bottom";
import Footer from "../components/home/Footer";
import SwapBox from "./swapbox";
import TradingChart from "../components/TradingChart";
import TradingChartDark from "../components/TradingChartDark";
import { ThemeConsumer } from "../context/ThemeContext";
import Particles from "react-particles-js";
import Markets from "../components/home/Markets";
//import { motion } from "tsparticles/Options/Classes/Motion/Motion";
//import { motion } from "framer-motion";
import { motion } from "framer-motion/dist/framer-motion";
function Home() {
  const particleparam = {
    particles: {
      number: {
        value: 101,
      },
      color: {
        value: "#5d5a72",
      },
      size: {
        value: 3,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#c8c8c8",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  return (
    <>
      <Header />
      <div className="tradio">
        <div id="main-wrapper">
          <div className="particlearea">
            <Particles className="particlebackground" params={particleparam} />

            <div className="intro">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-xl-5 col-lg-5 col-12">
                    <div className="intro-content">
                      <h1>
                        <strong className="text-primary">Coming Soon</strong>
                        <br />						
                        Trading Platform
                      </h1>
                      <p>
                        Fast and secure way to exchange
                        <br />
                        150+ cryptocurrencies
                      </p>
                      <Form>
                        <Row>
                          <Col>
                            <Button
                              variant="primary"
                              type="submit"
                              style={{ padding: "8px 20px" }}
                            >
                              Sign Up
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>
                  <motion.div
                    className="col-xl-7 col-lg-7 col-12"
                    animation={{
                      opacity: 1,
                    }}
                  >
                    <ThemeConsumer>
                      {({ data }) => {
                        return data.theme === "light" ? (
                          <TradingChart />
                        ) : (
                          <TradingChartDark />
                        );
                      }}
                    </ThemeConsumer>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="swap">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  {/* <motion.div
                    className="col-xl-6 col-lg-6 col-12"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: "-300px",
                      },
                      visible: {
                        opacity: 1,
                        x: "0px",
                      },
                    }}
                  > */}
                  <div className="col-xl-6 col-lg-6 col-12">
                    <SwapBox />
                  </div>
                  {/* </motion.div> */}
                  <div className="col-xl-5 col-lg-6 col-12">
                    <div className="intro-content">
                      <h1>
					  <strong className="text-primary">Coming Soon</strong>
						<br />
                        No Registration
                        <br />
                        Instant Crypto Swaps
						<br />
					  </h1>
					  <a href="mailto:admin@myquantex.com?
					  subject=Quantex Coin Purchase Offer">
					  Contact us </a> to buy Quantex Coin (QTX) before we launch
                    </div>
                    <div className="mt-4 buttongroup">
                      <Link
                        to={{
                          pathname:
                            "https://play.google.com/store/apps/details?id=com.cryptiswap",
                        }}
                        className="btn btn-primary my-1 waves-effect"
                        target="_blank"
                      >
                        <img src="img/android.svg" alt="" />
                      </Link>
                      <Link
                        to={{
                          pathname:
                            "https://apps.apple.com/app/cryptiswap/id1558998980#?platform=iphone",
                        }}
                        className="btn btn-primary my-1 waves-effect"
                        target="_blank"
                      >
                        <img src="img/apple.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Markets />

          <div className="portfolio section-padding" id="portfolio">
            <div className="container">
              <motion.div
                className="row py-lg-5"
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: "-300px",
                  },
                  visible: {
                    opacity: 1,
                    x: "0px",
                  },
                }}
              >
                <div className="col-xl-7">
                  <div className="section-title">
                    <h2><span className="heading-link" onClick={()=>window.location='https://trade.myquantex.com/auth/register'}>Register to trade in just 2 minutes!</span></h2>
                    <p>
                      CryptiSwap has a variety of features that make it the best
                      place to start trading
                    </p>
                  </div>
                </div>
              </motion.div>
              <div className="row justify-content-between">
                <motion.div
                  className="col-xl-7 col-lg-6"
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "-300px",
                    },
                    visible: {
                      opacity: 1,
                      x: "0px",
                    },
                  }}
                >
                  <div className="portfolio_img">
                    <img
                      src="img/portfolio.png"
                      alt=""
                      className="img-fluid light"
                    />
                    <img
                      src="img/darkPortfolio.png"
                      alt=""
                      className="img-fluid dark"
                    />
                  </div>
                </motion.div>
                <div className="col-xl-5 col-lg-6">
                  <div className="portfolio_list">
                    <div className="row">
                      <motion.div
                        className="media"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.3 }}
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: "300px",
                          },
                          visible: {
                            opacity: 1,
                            x: "0px",
                          },
                        }}
                      >
                        <div className="media-body">
                          <h4>Safety</h4>
                          <p>
                            98.5% of users funds are stored offline in cold
                            storage
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="media"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6 }}
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: "300px",
                          },
                          visible: {
                            opacity: 1,
                            x: "0px",
                          },
                        }}
                      >
                        <div className="media-body">
                          <h4>Security</h4>
                          <p>
                            Multiple levels of authentication are required for
                            important processes like signing in and withdrawals
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="media"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.9 }}
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: "300px",
                          },
                          visible: {
                            opacity: 1,
                            x: "0px",
                          },
                        }}
                      >
                        <div className="media-body">
                          <h4>User Choice</h4>
                          <p>
                            We don't force you to give up custody of your funds,
                            as registration is optional on our instant swap
                            platform
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <motion.h5
                    className="media"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7 }}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: "300px",
                      },
                      visible: {
                        opacity: 1,
                        x: "0px",
                      },
                    }}
                  >
                    Available on:
                  </motion.h5>
                  <div className="row">
                    <motion.div
                      className="col-xl-3 col-lg-3 col-md-6"
                      style={{ marginBottom: "15px" }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.4 }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: "100px",
                        },
                        visible: {
                          opacity: 1,
                          x: "0px",
                        },
                      }}
                    >
                      <a
                        href="https://play.google.com/store/apps/details?id=com.cryptiswap"
                        className="portfolio_item"
                        style={{ width: "100%" }}
                      >
                        <div className="available-item">
                          <span>
                            <i className="lab la-google-play"></i>
                          </span>
                          <h6>Google Play</h6>
                        </div>
                      </a>
                    </motion.div>
                    <motion.div
                      className="col-xl-3 col-lg-3 col-md-6"
                      style={{ marginBottom: "15px" }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.7 }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: "100px",
                        },
                        visible: {
                          opacity: 1,
                          x: "0px",
                        },
                      }}
                    >
                      <a
                        href="https://apps.apple.com/app/cryptiswap/id1558998980#?platform=iphone"
                        className="portfolio_item"
                        style={{ width: "100%" }}
                      >
                        <div className="available-item">
                          <span>
                            <i className="la la-apple"></i>
                          </span>
                          <h6>App Store</h6>
                        </div>
                      </a>
                    </motion.div>
                    <motion.div
                      className="col-xl-3 col-lg-3 col-md-6"
                      style={{ marginBottom: "15px" }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1 }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: "100px",
                        },
                        visible: {
                          opacity: 1,
                          x: "0px",
                        },
                      }}
                    >
                      <a
                        href="https://quantex-global.github.io/"
                        className="portfolio_item"
                        style={{ width: "100%" }}
                      >
                        <div className="available-item">
                          <span>
                            <i className="la la-plug"></i>
                          </span>
                          <h6>API</h6>
                        </div>
                      </a>
                    </motion.div>
                    <motion.div
                      className="col-xl-3 col-lg-3 col-md-6"
                      style={{ marginBottom: "15px" }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1.3 }}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: "100px",
                        },
                        visible: {
                          opacity: 1,
                          x: "0px",
                        },
                      }}
                    >
                      <a
                        href="https://www.myquantex.com/swap"
                        className="portfolio_item"
                        style={{ width: "100%" }}
                      >
                        <div className="available-item">
                          <span>
                            <i className="la la-globe"></i>
                          </span>
                          <h6>Web</h6>
                        </div>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax">
            <div className="refers section-padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-12">
                    <div className="section-title text-center">
                      <h2>
                        Get paid in Quantex Coin (QTX)
                        <br />
                        for trading and referrals
                      </h2>
                      <Button variant="primary" style={{ padding: "8px 20px" }}>
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Bottom />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
