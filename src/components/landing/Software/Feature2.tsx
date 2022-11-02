import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature } from './software';

type FeatureProps = {
    features: Feature[];
};

const Feature2 = ({ features }: FeatureProps) => {
    return (
        <section className="py-4">
            <Container className="bg-soft-warning p-5 rounded-lg" data-aos="fade-up" data-aos-duration="700">
                <h4 className="display-5 fw-medium mb-2">Prompt works on Every Device</h4>
                <Row className="align-items-center">
                    <Col lg={8}>
                        <ul className="list-inline mb-0 mt-4">
                            {(features || []).map((feature, index) => {
                                return (
                                    <li className="list-inline-item text-center me-3 me-sm-5" key={index.toString()}>
                                        <span className="icon icon-sm text-secondary">
                                            <FeatherIcon icon={feature.deviceIcon} className="icon-dual-dark" />
                                        </span>
                                        <h6 className="mb-lg-0">{feature.deviceName}</h6>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <div className="text-lg-center mt-5 mt-lg-0">
                            <Link to="#" className="btn btn-primary rounded">
                                Get Propmt for Free
                                <FeatherIcon icon="arrow-right" className="icon-xs ms-1" />
                            </Link>
                            <p className="text=muted mt-2 fs-12">
                                Looking for older versions?
                                <Link to="#">Click Here</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature2;
