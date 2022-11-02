import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="hero-4 pt-lg-6 pb-sm-9 pb-6 pt-9">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title mb-0">Contact Us</h1>
                        <p className="mb-4 fs-17 text-muted">
                            Please fill out the following form and we will get back to you shortly
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="shape bottom">
                <svg
                    width="1440px"
                    height="40px"
                    viewBox="0 0 1440 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="shape-b" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="curve" fill="#fff">
                            <path
                                d="M0,30.013 C239.659,10.004 479.143,0 718.453,0 C957.763,0 1198.28,10.004 1440,30.013 L1440,40 L0,40 L0,30.013 Z"
                                id="Path"
                            ></path>
                        </g>
                    </g>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
