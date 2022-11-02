import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import feature from '../../../assets/images/3.jpg';

const Feature = () => {
    return (
        <section className="py-5 mb-xl-5 mb-lg-4 position-relative" data-aos="fade-up">
            <Container>
                <Row className="align-items-center mt-5">
                    <Col lg={5}>
                        <h1 className="display-5 fw-semibold">Build amazing things together</h1>

                        <p className="text-muted my-4">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam beatae vitae dicta sunt explicabo.
                        </p>

                        <p className="text-muted my-4">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam beatae vitae dicta sunt explicabo.
                        </p>

                        <Link to="#" className="h6 text-primary">
                            Learn more
                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xxs" />
                        </Link>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div className="img-content2 position-relative mt-4 mt-lg-0">
                            <div className="img-up mb-lg-0 mb-6">
                                <img src={feature} alt="feature" className="img-fluid d-block shadow" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature;
