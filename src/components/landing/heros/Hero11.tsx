import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import { FormInput } from '../form';

const Hero11 = () => {
    return (
        <section className="position-relative hero-11 py-1 pt-7 pb-sm-6">
            <Container className="hero-content">
                <Row className="align-items-center">
                    <Col xs={12} className="text-center">
                        <h1 className="hero-title">
                            The best way to <span className="highlight highlight-success d-inline-block">showcase</span>{' '}
                            your saas
                        </h1>

                        <p className="fs-17 text-muted pt-0">
                            Make your saas application stand out with high-quality landing page designed and developed
                            by professional
                        </p>

                        <div className="mt-4 mt-sm-5 pt-0 d-flex align-items-center justify-content-center">
                            <Row className="g-2 text-start">
                                <Col sm={5}>
                                    <FormInput
                                        type="text"
                                        className="form-control mb-2 me-sm-2 shadow-sm"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                    />
                                </Col>
                                <Col sm={5}>
                                    <FormInput
                                        type="email"
                                        className="form-control mb-2 me-sm-2 shadow-sm"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                </Col>
                                <Col sm={2}>
                                    <Button type="submit" className="mb-2 text-nowrap">
                                        Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div className="d-flex mt-2 justify-content-center">
                            <div className="me-4">
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                Free 14-day Demo
                            </div>
                            <div className="me-4">
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                No credit card needed
                            </div>
                            <div>
                                <FeatherIcon icon="check-circle" className="icon icon-dual-success icon-xs me-1" />
                                No Setup
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="feature-container position-relative overflow-hidden mt-5 mb-4">
                <Container>
                    <Row className="align-items-center justify-content-center zindex-1 slider-container">
                        <Col xs={10} className="text-center zindex-1">
                            <Card className="rounded-lg shadow" data-aos="fade-up" data-aos-duration="2000">
                                <Card.Body className="slider-container-body">
                                    <div className="slider">
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Hero11;
