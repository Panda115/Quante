import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature } from './home';

type FeaturesProps = {
    features: Feature[];
};

const Features = ({ features }: FeaturesProps) => {
    return (
        <section className="my-lg-5 py-5 py-sm-7 bg-gradient2 position-relative" data-aos="fade-up">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center" data-aos="fade-up">
                        <Badge pill className="badge-soft-primary px-2 py-1">
                            Features
                        </Badge>
                        <h1 className="display-4 fw-semibold">Why Choose Prompt</h1>
                        <p className="text-secondary mx-auto">A modern design, fresh look and feel</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(features || []).map((item, index) => {
                        return (
                            <Col lg={4} key={index.toString()} data-aos="fade-up" data-duration="600">
                                <Card className="shadow-sm">
                                    <Card.Body className="p-2">
                                        <div className="d-flex align-items-center">
                                            <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                                                {item.icon ? (
                                                    <FeatherIcon icon={item.icon} className="icon-dual-primary" />
                                                ) : (
                                                    <span className="fw-bolder">{item.name[0]}</span>
                                                )}
                                            </span>

                                            <div className="flex-grow-1">
                                                <h5 className="m-0">{item.name}</h5>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Features;
