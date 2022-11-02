import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from '../../../assets/images/desktop1.gif';
import desktop from '../../../assets/images/desktop.jpg';

const Feature1 = () => {
    return (
        <section className="position-relative overflow-hidden py-6 features-3">
            <Container>
                <Row className="align-items-center">
                    <Col lg={5}>
                        <div className="mb-lg-0 mb-4" data-aos="fade-right" data-aos-duration="600">
                            <Badge pill className="badge-soft-danger px-2 py-1">
                                Free Cloud Account!
                            </Badge>
                            <h1 className="display-5 fw-medium mb-2">Smart auto deployment</h1>
                            <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                                Prompts automatically deploys your changes on the cloud
                            </h5>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="share" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Auto saves the files, one-click sync
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="git-merge" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Auto track every changes/revision
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="users" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Modern way to collaborate with team
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <img
                            src={desktop1}
                            alt="desktop1"
                            className="img-fluid"
                            data-aos="fade-left"
                            data-aos-duration="700"
                        />
                    </Col>
                </Row>

                <Row className="align-items-center pt-9">
                    <Col lg={6}>
                        <div
                            className="bg-white p-2 rounded border shadow"
                            data-aos="fade-right"
                            data-aos-duration="600"
                        >
                            <img src={desktop} alt="desktop" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="mt-4 mt-lg-0" data-aos="fade-left" data-aos-duration="700">
                            <Badge pill className="badge-soft-danger px-2 py-1">
                                Auto Sync
                            </Badge>
                            <h1 className="display-5 fw-medium mb-2">AutoSync deployment</h1>
                            <h5 className="fw-normal text-muted mx-auto mt-0 mb-4 pb-3">
                                Prompts automatically sync your scheduled sync configuration
                            </h5>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="settings" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Auto saves the files, one-click sync
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="git-branch" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    Auto saves the files, one-click sync
                                </div>
                            </div>

                            <div className="d-flex mb-3">
                                <div className="list-inline-item me-3 flex-shrink-0">
                                    <span className="bg-soft-primary avatar avatar-sm rounded-lg icon icon-with-bg icon-xs text-primary">
                                        <FeatherIcon icon="command" className="icon-dual-primary" />
                                    </span>
                                </div>
                                <div className="fw-medium fs-16 align-self-center flex-grow-1">
                                    A powerful command line interface
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature1;
