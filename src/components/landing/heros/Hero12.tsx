import { Col, Container, Row, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import { FormInput } from '../form';

const Hero12 = () => {
    return (
        <section className="position-relative overflow-hidden hero-13 pt-7 pt-lg-5 pb-6">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <div className="mb-lg-0 mb-5">
                            <h1 className="hero-title">
                                The best way to{' '}
                                <span className="highlight highlight-success d-inline-block">showcase</span> your saas
                            </h1>
                            <p className="fs-17 text-muted pt-3">
                                Make your saas application stand out with high-quality landing page designed and
                                developed by professional
                            </p>

                            <div className="pt-5">
                                <Row className="g-2 text-start">
                                    <Col md={4} lg={6}>
                                        <FormInput
                                            type="email"
                                            className="mb-2 me-sm-2 shadow-sm"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                        />
                                    </Col>
                                    <Col sm={3}>
                                        <div>
                                            <Button className="mb-2">Sign Up</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="d-flex mt-1 fs-12">
                                <div className="me-4">
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    Free 14-day Demo
                                </div>
                                <div>
                                    <FeatherIcon
                                        icon="check"
                                        className="icon icon-dual-success icon-xs me-1"
                                    ></FeatherIcon>
                                    No credit card needed
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero12;
