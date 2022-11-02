import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// images
import portfolio1 from '../../../assets/images/hero/portfolio1.png';

const Hero3 = () => {
    return (
        <section className="hero-3 pt-7 position-relative hero-with-shapes">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <Container className="hero-container">
                <Row>
                    <Col lg={6} data-aos="fade-right" data-aos-duration="1000">
                        <h4 className="mt-4 pt-2">
                            <span>Hola!</span> I am Greeva N.
                        </h4>

                        <h1 className="hero-title">I'm a freelance UX/UI Designer.</h1>
                        <p className="mt-3 fs-16 text-secondary">
                            A top-notch web designer helping business to craft their meaningful and interactive product
                            experiences
                        </p>

                        <div className="pt-3 pt-sm-5">
                            <Link to="#contact-me-form" className="btn btn-danger" data-toggle="smooth-scroll">
                                Hire Me
                            </Link>
                            <Link to="#" className="btn btn-outline-danger ms-2">
                                Download CV
                            </Link>
                        </div>
                    </Col>
                    <Col lg={{ offset: 1, span: 5 }}>
                        <div
                            className="img-container text-center text-lg-end"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <img src={portfolio1} alt="Hero" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero3;
