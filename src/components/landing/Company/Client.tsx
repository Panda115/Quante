import { Badge, Col, Container, Row } from 'react-bootstrap';

// images
import amazon from '../../../assets/images/brands/amazon.svg';
import google from '../../../assets/images/brands/google.svg';
import paypal from '../../../assets/images/brands/paypal.svg';
import shopify from '../../../assets/images/brands/shopify.svg';

const Client = () => {
    return (
        <section className="py-5 mb-lg-6 position-relative" data-aos="fade-up">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill className="badge-soft-info px-2 py-1">
                            Investor
                        </Badge>
                        <h1 className="display-5 fw-medium">We are backed by</h1>
                        <p className="text-muted mx-auto">
                            100+ clients trust <span className="text-dark fw-bold">Prompt</span> to drive perfomance &
                            engagement.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <img src={amazon} alt="amazon" height="45" />
                    </Col>
                    <Col className="offset-1">
                        <img src={google} alt="google" height="45" />
                    </Col>
                    <Col className="offset-1">
                        <img src={paypal} alt="paypal" height="45" />
                    </Col>
                    <Col className="offset-1">
                        <img src={shopify} alt="shopify" height="45" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Client;
