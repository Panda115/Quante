import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const CTA = () => {
    return (
        <section className="section py-4 pt-sm-6 pb-sm-0 position-relative" id="section-download" data-aos="fade-up">
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col>
                        <h1 className="display-4 fw-medium">Start creating delightful user experience</h1>
                        <p className="text-muted mx-auto">
                            Start working with <span className="text-dark fw-bold">Prompt</span> to create awesome
                            landing pages & websites
                        </p>

                        <div className="text-center mt-5">
                            <Link to="#" className="btn btn-primary">
                                <FeatherIcon className="icon icon-xxs ms-1" icon="shopping-bag" /> Purchase Now
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
