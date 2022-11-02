import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <section className="pt-8 pb-6 mb-4 mt-lg-4 bg-light position-relative" data-aos="fade-up">
            <div className="divider top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill className="badge-soft-info px-2 py-1">
                            stats
                        </Badge>
                        <h1 className="display-5 fw-medium">Prompt In Numbers</h1>
                    </Col>
                </Row>
                <Row className="mt-5 text-center">
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 fw-normal">
                            <CountUp duration={5} start={10} end={100} suffix="+" />
                        </div>
                        <p className="mt-2 mb-0 fw-semibold">Products Built</p>
                        <p>helped clients across the globe</p>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 fw-normal">
                            <CountUp duration={5} start={5} end={21} suffix="M+" prefix="$" />
                        </div>
                        <p className="mt-2 mb-0 fw-semibold">Revenue Generated</p>
                        <p>across 10+ countries</p>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 fw-normal">
                            <CountUp duration={5} start={10} end={100} suffix="+" />
                        </div>
                        <p className="mt-2 mb-0 fw-semibold">Satisfied Clients</p>
                        <p>across 100+ locations</p>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 fw-normal">
                            <CountUp duration={5} start={1} end={10} suffix="+" />
                        </div>
                        <p className="mt-2 mb-0 fw-semibold">Awards Won</p>
                        <p>on Awwwards, CSS Design Awards</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Counter;
