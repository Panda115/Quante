import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { Demo } from './home';

type DemosProps = {
    landings: Demo[];
};

const Demos = ({ landings }: DemosProps) => {
    return (
        <section className="mt-5 position-relative overflow-hidden features-1 py-5" id="demos">
            <Container>
                <Row>
                    <Col className="text-center" data-aos="fade-up">
                        <Badge pill className="badge-soft-primary px-2 py-1">
                            Demos
                        </Badge>
                        <h1 className="display-4 fw-semibold">Landing Pages</h1>
                        <p className="text-muted mx-auto">Modern landing pages available for every need</p>
                    </Col>
                </Row>
                <Row className="mt-2" data-aos="fade-up" data-duration="600">
                    {(landings || []).map((item, index) => {
                        return (
                            <Col lg={6} key={index.toString()}>
                                <Link to={item.url} target="_blank" className="mt-4">
                                    <div className="shadow p-2 rounded-sm border">
                                        <img src={item.image} className="img-fluid" alt="demo-img" />
                                    </div>
                                    <h4 className="text-center mt-3">{item.name}</h4>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Demos;
