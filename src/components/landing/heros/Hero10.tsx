import { Button, Col, Container, Row } from 'react-bootstrap';
import { FormInput } from '../form';

// images
import marketing from '../../../assets/images/hero/marketing.png';

const Hero10 = () => {
    return (
        <section className="position-relative overflow-hidden hero-10 pb-2 pt-7 pt-sm-3 pb-sm-7">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6} sm={{ order: 1 }} xs={{ order: 2 }}>
                        <div className="img-container" data-aos="fade-right">
                            <img src={marketing} alt="marketing" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} sm={{ order: 2 }}>
                        <h1 className="mt-0 mb-4 pb-2 hero-title">
                            Boost your <span className="highlight highlight-success d-inline-block">sales</span> with
                            ease
                        </h1>

                        <p className="fs-17 text-muted">
                            Explore a fully automated RIO driven digital marketing platform.
                        </p>

                        <div className="pt-4 pb-3">
                            <Row className="text-start g-2">
                                <Col sm="auto">
                                    <FormInput type="email" name="email" id="email" placeholder="Enter Your Email" />
                                </Col>
                                <Col sm="auto">
                                    <Button className="mt-1 mt-sm-0">Start Free Trial</Button>
                                </Col>
                            </Row>
                            <p className="text-muted fs-13 text-start mt-1">* No Credit Card Required</p>
                        </div>
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

export default Hero10;
