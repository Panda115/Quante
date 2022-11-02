import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { Demo } from './home';

type InnerPagesProps = {
    pages: Demo[];
};

const InnerPages = ({ pages }: InnerPagesProps) => {
    return (
        <section className="position-relative overflow-hidden features-1 py-5" id="secondary-pages">
            <Container>
                <Row>
                    <Col className="text-center" data-aos="fade-up">
                        <Badge pill className="badge-soft-primary px-2 py-1">
                            Inner Pages
                        </Badge>
                        <h1 className="display-4 fw-semibold">Inner Pages</h1>
                    </Col>
                </Row>
                <Row className="mt-2" data-aos="fade-up" data-duration="600">
                    {(pages || []).map((item, index) => {
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

export default InnerPages;
