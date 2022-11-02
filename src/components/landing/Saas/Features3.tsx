import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const Features3 = () => {
    return (
        <section className="position-relative pb-6 pt-lg-6 pt-4 features-3">
            <Container data-aos="fade-up" data-aos-duration="500">
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <h3 className="fw-medium mb-5">Many more powerful features</h3>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Hire and Retain Top Talent
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Team Management
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Stay Compliant
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Improve Productivity
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Improve Experience
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Self-service Time Tracking
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Performance Management
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Expert HR
                        </h6>
                    </Col>
                    <Col lg={3} md={6}>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            New Hire Checklist
                        </h6>
                        <h6 className="fw-medium fs-16 mb-4">
                            <FeatherIcon className="icon-sm icon-dual-success me-2" icon="check" />
                            Tax Calculator
                        </h6>
                    </Col>
                </Row>
                <Row className="mt-5 justify-content-center">
                    <Col xs="auto">
                        <Link to="#" className="btn btn-primary mb-2">
                            Sign Up Now <FeatherIcon className="icon-xs ms-2" icon="arrow-right" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features3;
