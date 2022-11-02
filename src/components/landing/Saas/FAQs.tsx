import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import FAQContent from '../HelpDesk/FAQContent';

const FAQs = () => {
    return (
        <section className="section py-6 pt-sm-6 position-relative">
            <Container data-aos="fade-up" data-aos-duration="2000">
                <Row>
                    <Col className="text-center">
                        <Badge pill className="badge-soft-primary px-2 py-1">
                            FAQs
                        </Badge>
                        <h1 className="display-5 fw-medium">Frequently Asked Questions</h1>
                        <p className="text-muted mx-auto">
                            Here are some of the basic types of questions for our customers
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={10} lg={8}>
                        <FAQContent />
                    </Col>
                </Row>

                <Row className="justify-content-center mt-5">
                    <Col xs="auto">
                        <div className="rounded d-inline-block py-2 px-3 alert bg-light">
                            <div className="align-items-center">
                                <div className="text-dark">
                                    Still have unanswered questions? <Link to="#">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQs;
