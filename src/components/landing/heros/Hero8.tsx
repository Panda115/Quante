import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Col, Container, Dropdown, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop from '../../../assets/images/desktop.jpg';

const Hero8 = () => {
    return (
        <section className="position-relative overflow-hidden hero-7 pt-6 pb-4">
            <Container>
                <Row className="align-items-center text-center text-sm-start">
                    <Col lg={6}>
                        <h1 className="hero-title">
                            Speed up your{' '}
                            <span className="highlight highlight-warning d-inline-block">performance</span>
                        </h1>
                        <p className="fs-16 mt-3 text-muted">
                            Prompt makes it easier to build better website and application more quickly and with less
                            effort
                        </p>

                        <div className="py-5">
                            <Dropdown as={ButtonGroup}>
                                <Button>
                                    <FeatherIcon icon="download" className="icon-xs me-2" />
                                    Download for Ubuntu 19.04
                                </Button>
                                <Dropdown.Toggle split id="dropdown-split-basic">
                                    <FeatherIcon icon="chevron-down" className="icon-xs" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={1}>Windows 7/8/10</Dropdown.Item>
                                    <hr />
                                    <Dropdown.Item eventKey={2}>Mac OS</Dropdown.Item>
                                    <hr />
                                    <Dropdown.Item eventKey={3}>Ubuntu 18.04</Dropdown.Item>
                                    <Dropdown.Item eventKey={4}>Ubuntu 16.04</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="rounded d-inline-block mt-3 py-1 px-3 alert bg-soft-warning">
                                <div className="d-flex align-items-center">
                                    <div className="text-dark">
                                        Looking for other platforms?{' '}
                                        <Link to="#" className="text-dark fw-medium">
                                            Click Here
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} className="hero-right">
                        <div className="img-container" data-aos="fade-left" data-aos-duration="600">
                            <img src={desktop} alt="desktop" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero8;
