import { Row, Col, Container, Badge, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// components
import SwiperSlider2 from '../sliders/SwiperSlider2';

// dummy data
import { slides } from '../sliders/data';

const Testimonials = () => {
    return (
        <section className="section pt-5 pb-7 py-sm-9 position-relative features-4">
            <Container>
                <Row className="testimonials-2" data-aos="fade-up" data-aos-duration="200">
                    <Col lg={3}>
                        <Row className="align-items-center">
                            <Col>
                                <Badge pill className="badge-soft-primary px-2 py-1">
                                    Feedback
                                </Badge>
                                <h1 className="display-5 fw-medium">What people say</h1>
                                <p className="text-muted mx-auto">Few valuables words from our customers</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="auto" className="text-sm-right pt-2 pt-sm-0">
                                <div className="navigations">
                                    <Button variant="link" className="text-normal p-0 swiper-custom-prev">
                                        <FeatherIcon icon="arrow-left" className="icon-dual" />
                                    </Button>
                                    <Button variant="link" className="text-normal p-0 swiper-custom-next">
                                        <FeatherIcon icon="arrow-right" className="icon-dual" />
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{ span: 8, offset: 1 }}>
                        <div className="slider">
                            <SwiperSlider2 slides={slides} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;
