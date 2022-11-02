import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7 bg-gradient2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">How can we help?</h1>
                        <p className="fs-17 text-muted">
                            Explore our knowledge badge to learn more about all the functionality Prompt is offering. If
                            you don't find what you are looking, feel free to contact our support team.
                        </p>

                        <div className="mt-5">
                            <div className="form-control-with-hint">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="query"
                                    name="query"
                                    placeholder="Ask a question..."
                                />
                                <span className="form-control-feedback">
                                    <FeatherIcon className="icon-xs" icon="search" />
                                </span>
                            </div>
                        </div>

                        <Row className="align-items-center mt-1 g-0">
                            <Col xs={'auto'}>
                                <div className="fw-medium text-uppercase text-muted mb-0 fs-13">Recent searches:</div>
                            </Col>
                            <Col className="text-start">
                                <div className="text-muted ps-2">
                                    How to prepare upload documents, Linking Payment Account
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
